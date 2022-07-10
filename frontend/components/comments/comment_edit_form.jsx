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
    const { comment, updateComment, editComment } = this.props;
    const { body } = this.state;

    e.preventDefault();

    let comment1 = {
      id: comment.id,
      userId: comment.userId,
      imageId: comment.imageId,
      parentId: comment.parentId,
      body: body,
    }

    updateComment(comment1);

    this.setState({ body: comment1.body });

    editComment();
  }

  render() {
    const { body } = this.state;
    return (
      <div>
        <div className="comment-edit-body">
          <textarea 
            value={body} 
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