import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostRow extends React.Component {
  render() {
    const { post, getPost, deletePost, showPostForm } = this.props;

    return (
      <tr>
        <td className="mobile-display-block">
          <strong className="show-sm">Title: </strong>
          {post.title}
        </td>
        <td className="mobile-display-block">
          <strong className="show-sm">Body: </strong>
          {post.body}
        </td>
        <td className="mobile-display-block">
          <strong className="show-sm">Published: </strong>
          {post.published.toString()}
        </td>
        <td className="mobile-display-inline-block">
          <span className='btn btn-primary' onClick={() => getPost(post.url)}>Show</span>
        </td>
        <td className="mobile-display-inline-block">
          <span className='btn' onClick={() => showPostForm(post.url)}>Edit</span>
        </td>
        <td className="mobile-display-inline-block">
          <span className='btn btn-error' onClick={() => deletePost(post.id)}>Destroy</span>
        </td>
      </tr>
    );
  }
}

export default PostRow;
