import * as commentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  }
};

const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment,
  }
};

export const fetchComments = () => {
  return (dispatch) => {
    return commentAPIUtil.fetchComments().then(comments =>
      dispatch(receiveComments(comments))
    )
  }
};

export const fetchComment = (comment) => {
  return (dispatch) => {
    return commentAPIUtil.fetchComment(comment).then(comment =>
      dispatch(receiveComment(comment))
    )
  }
};

export const createComment = (comment) => {
  return (dispatch) => {
    return commentAPIUtil.createComment(comment).then(comment =>
      dispatch(receiveComment(comment))
    )
  }
};

export const updateComment = (comment) => {
  return (dispatch) => {
    return commentAPIUtil.updateComment(comment).then(comment =>
      dispatch(receiveComment(comment))
    )
  }
};

export const deleteComment = (commentId) => {
  return (dispatch) => {
    return commentAPIUtil.deleteComment(commentId).then(comment => 
      dispatch(removeComment(comment))
    )
  }
};