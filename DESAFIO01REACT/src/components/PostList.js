import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i2.wp.com/portfolioplanetimoveis.com/wp-content/uploads/2019/05/pessoa-com-d%C3%BAvida-png.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i2.wp.com/portfolioplanetimoveis.com/wp-content/uploads/2019/05/pessoa-com-d%C3%BAvida-png.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i2.wp.com/portfolioplanetimoveis.com/wp-content/uploads/2019/05/pessoa-com-d%C3%BAvida-png.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i2.wp.com/portfolioplanetimoveis.com/wp-content/uploads/2019/05/pessoa-com-d%C3%BAvida-png.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        <ul>
          {this.state.posts.map(post =>
            <Post key={post.id}
            {...post}
            />
        )}
        </ul>
      </>)
  }
}

export default PostList;