import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container, Header, Name, Bio, Avatar, Stars, Starred, OwnerAvatar, Title, Author, Info } from './styles';

export default class User extends Component {
  state = {
    stars: []
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name
  });

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`users/${user.login}/starred`);

    this.setState({ stars: response.data });

  }

  render() {
    const { stars } = this.state;

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }}></OwnerAvatar>
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        ></Stars>
      </Container >
    );
  }
}
