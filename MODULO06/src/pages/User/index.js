import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container, Header, Name, Bio, Avatar, Stars, Starred, OwnerAvatar, Title, Author, Info } from './styles';

export default class User extends Component {
  state = {
    stars: [],
    loading: true,
    page: 1,
    refreshing: false
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
    this.load();
  }

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  }

  load = async (page = 1) => {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`users/${user.login}/starred`, { params: { page } });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data, loading: false, page, refreshing: false
    });
  }

  loadMore = () => {
    const { page } = this.state;
    const nextPage = page + 1;
    this.load(nextPage);
  }

  refreshList = () => {
    this.setState({ stars: [], refreshing: true }, this.load);
  }

  render() {
    const { stars, loading, refreshing } = this.state;

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? <ActivityIndicator color='#999' size={70}>
        </ActivityIndicator> :
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={item ? { uri: item.owner.avatar_url } : ''}>
                </OwnerAvatar>
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          ></Stars>}
      </Container >
    );
  }
}
