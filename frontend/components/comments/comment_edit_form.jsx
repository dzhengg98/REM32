import React, { useState } from 'react';

const CommentEditForm = (props) => {

  const { comment, updateComment, editComment } = props;

  const [state, setState] = useState({
    body: comment.body
  })

  const update = (field) => {
    return e => setState({[field]: e.target.value})
  }

  const saveEdit = (e) => {
    e.preventDefault();

    let comment1 = {
      id: comment.id,
      userId: comment.userId,
      imageId: comment.imageId,
      parentId: comment.parentId,
      body: state.body
    }

    updateComment(comment1);
    setState({ body: comment.body})
    editComment();
  }

  return(
    <div>
      <div className="comment-edit-body">
        <textarea 
          value={state.body} 
          onChange={update('body')} 
          placeholder="write your comment here"
          className="comment-edit-area"
        />
        <button className="comment-save-button" onClick={saveEdit}>Save</button>
      </div>
    </div>
  )

}

export default CommentEditForm;