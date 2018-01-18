import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render() {
    const { showPost, showPostForm, post, goBack } = this.props;

    return (
      <div className="post-container">
        <p>
          <strong>Title: </strong>
          <h2>{post.title}</h2>
          <span className="label label-primary">Post Factorial: {post.factorial.toString()}</span>
        </p>


        <p>
          <strong>Body: </strong>
          {post.body}
        </p>

        <p>
          <strong>Published: </strong>
          {post.published.toString()}
        </p>

        <div class="divider"></div>

        <span className='btn' onClick={() => showPostForm(post.url)}>Edit</span>
        &nbsp;&nbsp;
        <span className='btn'  onClick={() => goBack()}>Back</span>
      </div>
    );
  }
}

export default Post;