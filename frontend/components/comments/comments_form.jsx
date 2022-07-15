import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

const CommentsForm = (props) => {

  const { image, currentUser, createComment, comments, users, deleteComment, updateComment } = props;
  const currentImageComments = comments.filter((comment) => comment.imageId === image.id && comment.parentId === null).reverse();

  const [state, setState] = useState({
    body: ""
  })

  const update = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setState({ body: e.target.value })
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newComment = {
      image_id: image.id,
      user_id: currentUser.id,
      body: state.body,
    }

    setState({ body: "" })
    createComment(newComment)
  }

  const makeComment = () => {
    return (
      <div className="comments-add-container">
        {
          currentUser.profilepic ? (
            <div className="comments-profile-picture-container">
              <div className="commments=profile-picture-inner-container">
                <Link className="comments-profile-link" to={`/users/${currentUser.id}`}>
                  <img className="comment-profile-image" src={currentUser.profilepic}/>
                </Link>
              </div>
            </div>
          ) : (
            <div className="comments-profile-picture-container">
              <div className="comments-profile-picture-inner-container">
                <Link className="comments-profile-link" to={`/users/${currentUser.id}`}>
                  <img className="comment-profile-image" src={window.userIcon}/>
                </Link>
              </div>
            </div>
          )
        }
        <div className="comments-input-container">
          <div className="comments-inner-input-container">
            <label id="create-comment-label"></label>
            <textarea
              htmlFor="create-comment-label"
              className="comments-input-area"
              value={state.body} 
              placeholder="Add a comment"
              onChange={update}
            />
            <div className="submit-button-container">
              <button className="submit-comments-button" onClick={handleCommentSubmit}>
                <span>Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="comments-main-container">
      <div className="image-comments-container">
        {makeComment()}
        <div className="comments-show-container">
          <p className="comments-show-amount">{currentImageComments.length}{" "}
          {currentImageComments.length > 1 || currentImageComments.length === 0 ? (
            <span>comments</span>
          ): (
            <span>comment</span>
          )}
          </p>
          <div className="show-comments-container">
              { currentImageComments.length ? (
                <div className="show-comments-inner-container">
                  {
                    currentImageComments.map((comment) => 
                      <CommentIndexItem 
                        key={comment.id} 
                        comment={comment} 
                        users={users} 
                        deleteComment={deleteComment} 
                        currentUser={currentUser}
                        updateComment={updateComment} 
                      />
                  )
                  }
                </div>
              ) : (
                <div className="no-comments-container">
                  <div className="no-comments-svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 11.5c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"/></svg>
                  </div>
                  <p className="no-comments-text"><span>No comments yet</span></p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsForm;