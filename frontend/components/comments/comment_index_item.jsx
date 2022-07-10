import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';
import CommentEditForm from './comment_edit_form';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }
    this.removeComment = this.removeComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  removeComment(e) {
    const { deleteComment, comment } = this.props;
    e.preventDefault();
    deleteComment(comment.id);
  }

  editComment() {
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    const { users, comment, updateComment, currentUser } = this.props;
    const { editing } = this.state;
    return (
      <div className="comment-container">
        {
          users[comment.userId].profilepic ? (
            <div className="commenter-profile-pic-container">
              <div className="commenter-profile-pic">
                <Link to={`/users/${comment.userId}`}>
                  <img src={users[comment.userId].profilepic}/>
                </Link>
              </div>
            </div>
          ) : (
            <div className="commenter-profile-pic-container">
              <div className="commenter-profile-pic">
                <Link to={`/users/${comment.userId}`}>
                  <img src={window.userIcon}/>
                </Link>
              </div>
            </div>
          )
        }
        <div className="commenter-comment-container">
          <div className="commenter-name-date-container">
            <Link to={`/users/${comment.userId}`}>{comment.user.fullname.trim() ? comment.user.fullname : comment.user.username }</Link>
            <p className="commenter-date">{formatDate(comment.createdAt)}</p>
          </div>
          <div className="commenter-comment-body-container">
            {editing ? 
              (
                <CommentEditForm 
                  comment={comment} 
                  updateComment={updateComment} 
                  editComment={this.editComment}
                />
              ) : (
                <p className="commenter-comment-body">{comment.body}</p>
              )
            }
            <div className="comment-actions-container">
              {currentUser.id === comment.userId && !editing ? <button className="delete-comment-button" onClick={this.removeComment}>Delete</button> : <div></div>}
              {currentUser.id === comment.userId && !editing ? <button className="edit-comment-button" onClick={this.editComment}>Edit</button> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;