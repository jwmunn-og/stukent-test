import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render() {
    const { showPost, showPostForm, post, goBack } = this.props;

    return (
      <div className="post-container">
        <p>
          <strong>Title:</strong>
          {post.title} about Factorials
          {/* {post.factorial.toString()} */}
        </p>

        <p>
          <strong>Body:</strong>
          {post.body}
        </p>

        <p>
          <strong>Published:</strong>
          {post.published.toString()}
        </p>

        <span className='btn' onClick={() => showPostForm(post.url)}>Edit</span>
        <span className='btn'  onClick={() => goBack()}>Back</span>
      </div>
    );
  }
}

export default Post;