import * as commentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

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

export const fetchComments = () => {
  return (dispatch) => {
    return commentAPIUtil.fetchComments().then(comments =>
      dispatch(receiveComments(comments))
    )
  }
};

export const fetchComment = () => {
  return (dispatch) => {
    return commentAPIUtil.fetchComment().then(comment =>
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