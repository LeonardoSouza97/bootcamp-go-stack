import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProtoTypes from 'prop-types'
import api from '../../services/api';

import { Loading, Owner } from './styles';
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
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: `open`,
          per_page: 5
        }
      })
    ]);

    this.setState({ repository: repository.data, issues: issues.data, loading: false });

    console.log(repository);
    console.log(issues);

  }

  render() {
    const { repository, issues, loading } = this.state;
    const { match } = this.props;

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
      </Container>
    );
  }
}
