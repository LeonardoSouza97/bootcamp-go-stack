import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <img className="profile" src={this.props.post.author.avatar}></img>
        <span className="author">{this.props.post.author.name}</span>
        <span className="date">{this.props.post.date}</span>
        <span class="title">{this.props.post.content}</span>
      </div>
    )
  }
}

export default Comment;