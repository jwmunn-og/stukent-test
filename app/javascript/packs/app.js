// Run this example by adding <%= javascript_pack_tag 'app' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios';
import List from './components/list'
import Post from './components/post'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPost: false,
      posts: [],
      post: {}
    }
  }

  getPosts = () => {
    axios.get('/posts.json')
    .then((res) => this.setState({ posts: res.data }) )
    .catch((err) => console.log(err.response.data) );
  }

  getPost = (url) => {
    axios.get(`${url}`)
      .then((res) => this.setState({ post: res.data, showPost: true }) )
      .catch((err) => console.log(err.response.data) );
  }

  deletePost = (id) => {
    const newPostsState = this.state.posts.filter((post) => post.id !== id );

    axios.delete(`/posts/${id}`)
    .then((res) => this.setState({ posts: newPostsState }))
    .catch((err) => console.log(err.response.data));
  }

  goBack = () => {
    this.setState({ showPost: false })
  }

  render() {
    const { showPost, posts, post } = this.state;

    return (
      <div>
        {showPost ?
          <Post
            post={post}
            goBack={this.goBack} />
          :
          <List
            getPosts={this.getPosts}
            posts={posts}
            getPost={this.getPost}
            deletePost={this.deletePost}
          />
        }
      </div>

    );
  }
}

export default App;