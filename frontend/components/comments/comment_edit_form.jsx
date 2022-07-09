import React from 'react';

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body
    }
    this.saveEdit = this.saveEdit.bind(this);
  }

  update(field) {
    return e => {this.setState({[field]: e.target.value})}
  }

  saveEdit(e) {
    e.preventDefault();
    let comment = {
      id: this.props.comment.id,
      userId: this.props.comment.userId,
      imageId: this.props.comment.imageId,
      parentId: this.props.comment.parentId,
      body: this.state.body,
    }
    this.props.updateComment(comment);
    this.setState({
      body: comment.body
    });
    this.props.editComment();
  }

  render() {
    // debugger
    return (
      <div>
        <div className="comment-edit-body">
          <textarea 
            value={this.state.body} 
            onChange={this.update('body')} 
            placeholder="write your comment here"
            className="comment-edit-area"
          />
          <button className="comment-save-button" onClick={this.saveEdit}>Save</button>
        </div>
      </div>
    )
  }
}

export default CommentEditForm;