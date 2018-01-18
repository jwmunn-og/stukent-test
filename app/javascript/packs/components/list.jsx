import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Post from './post';

class List extends React.Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;

    const allPosts = posts.map((post, index) => {
      return (
        <Post
          key={index}
          index={index}
          post={post}
        />
      );
    });

    return (
      <div className="posts-table">
        <h1>Posts</h1>

        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Published</th>
              <th colspan="3"></th>
            </tr>
          </thead>

          <tbody>
            {allPosts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
