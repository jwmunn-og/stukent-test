import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render() {
    const { post } = this.props;

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
          <a href="#" className='btn btn-primary'>Show</a>
        </td>
        <td>
          <a href="#" className='btn'>Edit</a>
        </td>
        <td>
          <a href="#" className='btn btn-error'>Destroy</a>
        </td>
      </tr>
    );
  }
}

export default Post;
