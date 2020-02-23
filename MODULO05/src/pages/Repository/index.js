import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProtoTypes from 'prop-types'
import api from '../../services/api';

import { Loading, Owner, IssueList, Filters, NavegationButtons } from './styles';
import Container from '../../Components/Container';

export default class Repository extends Component {

  static protoTypes = {
    match: ProtoTypes.shape({
      params: ProtoTypes.shape({
        repository: ProtoTypes.string,
      })
    }).isRequired,
  }

  state = {
    repository: {},
    issues: [],
    loading: true,
    currentPage: 1,
    state: 'all'
  }

  async componentDidMount() {
    const { state } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: state,
          per_page: 5
        }
      })
    ]);

    this.setState({ repository: repository.data, issues: issues.data, loading: false });
  }

  async componentDidUpdate(_, prevState) {
    const { state, currentPage } = this.state;
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: state,
          per_page: 5,
          page: currentPage
        }
      })
    ]);

    this.setState({ repository: repository.data, issues: issues.data, loading: false });
  }

  filtersIssues = async e => {
    this.setState({ state: e.target.value });
  }

  changePage = async e => {
    const option = e.target.value;
    var { currentPage } = this.state;

    this.setState({ currentPage: option !== 'previous' ? ++currentPage : --currentPage });
  }

  render() {
    const { repository, issues, loading, currentPage } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to='/'>Voltar aos reposítorios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Filters onChange={this.filtersIssues}>
          <option value="all">Todos</option>
          <option value="open">Abertos</option>
          <option value="closed">Fechados</option>
        </Filters>
        <NavegationButtons disabled={currentPage === 1}>
          <button className='previous' onClick={this.changePage} value='previous'>Anterior</button>
          <button onClick={this.changePage} value='next'>Próximo</button>
        </NavegationButtons>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url}></img>

              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                  <p>
                    {issue.user.login}
                  </p>
                </strong>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
