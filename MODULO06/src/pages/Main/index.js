import React, { Component } from 'react';
import { Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    users: []
  }

  handleNewUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      avatar: response.data.avatar,
      bio: response.data.bio
    }

    this.setState({ users: [...users, data], newUser: '' });

    Keyboard.dismiss();
  }

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o nome do usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleNewUser}
          />
          <SubmitButton onPress={this.handleNewUser}>
            <Icon name="add" size={20} color='#FFF' />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários'
};
