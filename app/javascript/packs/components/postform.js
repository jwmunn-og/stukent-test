import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const isChecked = document.getElementById("myCheckbox").checked;
    const formData = {
      title: this.title.value,
      body: this.body.value,
      published: isChecked
    };
    console.log(formData);
    this.props.submitPost(formData);
  }



  render() {
    const { post, getPost, goBack, submitPost } = this.props;

    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.onSubmit(e)}>
          <div className="field">
            <label className="form-label" htmlFor="post_title">Title</label>
            <input
              id="post_title"
              className="form-input"
              type="text"
              name="post[title]"
              defaultValue={post.title}
              ref={(input) => this.title = input}
            />
          </div>

          <div className="field">
            <label className="form-label" htmlFor="post_body">Body</label>
            <textarea
              id="post_body"
              className="form-input"
              name="post[body]"
              defaultValue={post.body}
              ref={(input) => this.body = input}></textarea>
          </div>

          <div className="field">
            {/* Add ref for checkbox */}
            <label htmlFor="post_published">
              <input id="myCheckbox" type="checkbox" onChange={this.handleInputChange} /> Published
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