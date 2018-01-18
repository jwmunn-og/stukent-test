import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PostRow from './postrow';

class List extends React.Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, getPost, deletePost, showPostForm, togglePost } = this.props;

    const allPosts = posts.map((post, index) => {
      return (
        <PostRow
          key={index}
          index={index}
          post={post}
          getPost={getPost}
          deletePost={deletePost}
          showPostForm={showPostForm}
        />
      );
    });

    return (
      <div className="posts-table">
        <h1>Posts</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Published</th>
              <th colSpan="3"></th>
            </tr>
          </thead>

          <tbody>
            {allPosts}
          </tbody>
        </table>
        <br /><br />
        <span className='btn btn-success' onClick={() => togglePost()}>New Post</span>
      </div>
    );
  }
}

export default List;
