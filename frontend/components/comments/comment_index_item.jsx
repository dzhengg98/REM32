import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';
import CommentEditForm from './comment_edit_form';

const CommentIndexItem = (props) => {

  const { deleteComment, comment, users, updateComment, currentUser } = props;

  const [state, setState] = useState({
    editing: false
  })

  const removeComment = (e) => {
    e.preventDefault();
    deleteComment(comment.id)
  }

  const editComment = () => {
    setState({ editing: !state.editing })
  }

  if (!users[comment.userId]) return null;

  return (
    <div className="comment-container">
      {
        users[comment.userId].profilepic ? (
          <div className="commenter-profile-pic-container">
            <div className="commenter-profile-pic">
              <Link to={`/users/${comment.userId}`}>
                <img src={users[comment.userId].profilepic} alt="profile pic" draggable="false"/>
              </Link>
            </div>
          </div>
        ) : (
          <div className="commenter-profile-pic-container">
            <div className="commenter-profile-pic">
              <Link to={`/users/${comment.userId}`}>
                <img src={window.userIcon} alt="profile pic" draggable="false"/>
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
          {state.editing ? 
            (
              <CommentEditForm 
                comment={comment} 
                updateComment={updateComment} 
                editComment={editComment}
              />
            ) : (
              <p className="commenter-comment-body">{comment.body}</p>
            )
          }
          <div className="comment-actions-container">
            {currentUser.id === comment.userId && !state.editing ? <button className="delete-comment-button" onClick={removeComment}>Delete</button> : <div></div>}
            {currentUser.id === comment.userId && !state.editing ? <button className="edit-comment-button" onClick={editComment}>Edit</button> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  )

} 

export default CommentIndexItem;