import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostRow extends React.Component {
  render() {
    const { post, getPost } = this.props;

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
          <span className='btn btn-error'>Destroy</span>
        </td>
      </tr>
    );
  }
}

export default PostRow;
