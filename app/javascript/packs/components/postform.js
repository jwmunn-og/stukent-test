import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostForm extends React.Component {
  render() {
    const { post, getPost, goBack } = this.props;

    return (
      <div>
        <form className="form-container">
          <div className="field">
            <label className="form-label" htmlFor="post_title">Title</label>
            <input
              id="post_title"
              className="form-input"
              type="text"
              name="post[title]"
              defaultValue={post.title}
            />
          </div>

          <div className="field">
            <label className="form-label" htmlFor="post_body">Body</label>
            <textarea
              id="post_body"
              className="form-input"
              name="post[body]"
              defaultValue={post.body}></textarea>
          </div>

          <div className="field">
            <label className="form-checkbox" htmlFor="post_published">
              <input name="post[published]" type="hidden" value="0"/>
              <input id="post_published" className="form-checkbox" type="checkbox" value="1" name="post[published]"/>
              <i className="form-icon"></i> Published
            </label>
          </div>

          <div className="actions">
            <input type="submit" name="commit" value="Update Post" data-disable-with="Update Post" className="btn btn-success" />
          </div>
        </form>
        <span className='btn' onClick={() => getPost(post.url)}>Show</span>
        <span className='btn'  onClick={() => goBack()}>Back</span>
        </div>
    );
  }
}

export default PostForm;