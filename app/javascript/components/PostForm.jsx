import React from 'react';
import ReactDOM from 'react-dom';


class PostForm extends React.component  {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.bookmark.comment,
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);

  }

  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  }
  render() {
    return (
      <div>
        <label>Comment</label>
        <input
          type="text"
          name="bookmark[comment]"
          value={this.state.comment}
          onChange={this.handleCommentChange}
        />

        <input type="submit" value="Update Post" />
      </div>
    );
  }
}

ReactDOM.render(
  <PostForm />,
  document.getElementById('simplef')
);

export default PostForm ;
