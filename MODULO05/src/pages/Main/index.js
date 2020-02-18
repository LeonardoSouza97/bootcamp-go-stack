import React, { Component } from 'react';
import { FaPlus, FaGithubAlt, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false
  }

  handleSubmit = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`)
    const data = {
      name: response.data.full_name
    }
    this.setState({ repositories: [...repositories, data],
      newRepo: '',
      loading: false });
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  }

  render() {
    const { newRepo, loading } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Form onSubmit={this.handleSubmit}>
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
        </Container>

      </>
    );
  }

}
