import * as likeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  }
};

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  }
};

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  }
};

export const fetchLikes = () => {
  return (dispatch) => {
    return likeAPIUtil.fetchlikes().then(likes => 
      dispatch(receiveLikes(likes))
    )
  }
};

export const fetchLike = (likeId) => {
  return (dispatch) => {
    return likeAPIUtil.fetchlike(likeId).then(like =>
      dispatch(receiveLike(like))
    )
  }
};

export const createLike = (like) => {
  return (dispatch) => {
    return likeAPIUtil.createlike(like).then(like =>
      dispatch(receiveLike(like))
    )
  }
};

export const deleteLike = (likeId) => {
  return (dispatch) => {
    return likeAPIUtil.deletelike(likeId).then(like =>
      dispatch(removeLike(like))
    )
  }
};