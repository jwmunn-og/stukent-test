import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class PostForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const isChecked = document.getElementById("myCheckbox").checked;
    const factorializedNumber = this.randomNumber();
    const assignFactorial = this.factorialize(factorializedNumber);

    const formData = {
      title: this.title.value,
      body: this.body.value,
      published: isChecked,
      factorial: assignFactorial
    };
    console.log(formData);
    this.props.submitPost(formData, this.props.post.id);
  }

  randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  factorialize(num) {
    let number = num;
    if (number < 0) {
      return -1;
    } else if (number == 0) {
      return 1;
    } else {
      return (number * this.factorialize(number - 1));
    }
  }



  render() {
    const { post, getPost, goBack, submitPost } = this.props;

    return (
      <div>
        <h1>Edit Post</h1>

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
            <label htmlFor="post_published">
              <input id="myCheckbox" type="checkbox" onChange={this.handleInputChange} /> Published
            </label>
          </div>
          <br />
          <div className="actions">
            <input type="submit" name="commit" value="Submit Post" data-disable-with="Submit Post" className="btn btn-success" />
          </div>
        </form>

        <div class="divider"></div>

        <span className='btn btn-primary' onClick={() => getPost(post.url)}>Show Post</span>
        &nbsp;&nbsp;
        <span className='btn'  onClick={() => goBack()}>Back</span>
        </div>
    );
  }
}

export default PostForm;