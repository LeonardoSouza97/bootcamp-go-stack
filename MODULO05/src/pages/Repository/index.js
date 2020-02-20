import React, { Component } from 'react';
import ProtoTypes from 'prop-types'
import api from '../../services/api';

// import { Container } from './styles';

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

    return (
      <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>
    );
  }
}
