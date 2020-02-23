import React, { Component } from 'react';
import { FaPlus, FaGithubAlt, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    notFound: null
  }

  handleSubmit = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const { newRepo, repositories, error } = this.state;

    try {
      const response = await api.get(`/repos/${newRepo}`)
      const data = {
        name: response.data.full_name
      }

      if(repositories.find(r => r.name)){
        throw new Error('Repositório duplicado');
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        notFound: false
      });

    } catch (error) {
      this.setState({
        error: true
      });
    } finally {
      this.setState({ loading: false });
    }
  }


componentDidMount() {
  const repositories = localStorage.getItem('repositories');

  if (repositories) {
    this.setState({ repositories: JSON.parse(repositories) });
  }
}

componentDidUpdate(_, prevState) {
  const { repositories } = this.state;
  if (repositories !== prevState.repositories) {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }
}

handleInputChange = e => {
  this.setState({ newRepo: e.target.value });
}

render() {
  const { newRepo, loading, repositories, error } = this.state;

  return (
    <>
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
          </h1>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type='text'
            placeholder='Adicionar repositório'
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? <FaSpinner color="#FFF" size={14} /> : <FaPlus color="#FFF" size={14} />}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => {
            return (<li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
            </li>)
          })}
        </List>
      </Container>

    </>
  );
}

}
