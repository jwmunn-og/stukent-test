// Run this example by adding <%= javascript_pack_tag 'app' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import List from './components/list'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
  }

  getPosts = () => {
    axios.get('/posts.json')
    .then((res) => console.log(res.data) )
    .catch((err) => console.log(err.response.data) );
  }

  render() {
    return (
      <List getPosts={this.getPosts}/>
    );
  }
}

export default App;