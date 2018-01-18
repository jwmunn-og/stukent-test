import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class List extends React.Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="list-container">
        List Component
      </div>
    );
  }
}

export default List;
