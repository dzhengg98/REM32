import * as followAPIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollows = follows => {
  return {
    type: RECEIVE_FOLLOWS,
    follows
  }
};

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  }
};

const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow
  }
};

export const fetchFollows = () => {
  return (dispatch) => {
    return followAPIUtil.fetchFollows().then(follows =>
      dispatch(receiveFollows(follows))
    )
  }
};

export const createFollow = (follow) => {
  return (dispatch) => {
    return followAPIUtil.createFollow(follow).then(follow =>
      dispatch(receiveFollow(follow))
    )
  }
};

export const deleteFollow = (followId) => {
  return (dispatch) => {
    return followAPIUtil.deleteFollow(followId).then(follow =>
      dispatch(removeFollow(follow))
    )
  }
};