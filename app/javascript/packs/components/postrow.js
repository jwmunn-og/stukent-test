import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostRow extends React.Component {
  render() {
    const { post, getPost, deletePost } = this.props;

    return (
      <tr>
        <td>
          {post.title}
        </td>
        <td>
          {post.body}
          {post.published}
        </td>
        <td>
          {post.published.toString()}
        </td>
        <td>
          <span className='btn btn-primary' onClick={() => getPost(post.url)}>Show</span>
        </td>
        <td>
          <span className='btn'>Edit</span>
        </td>
        <td>
          <span className='btn btn-error' onClick={() => deletePost(post.id)}>Destroy</span>
        </td>
      </tr>
    );
  }
}

export default PostRow;
