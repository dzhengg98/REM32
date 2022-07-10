import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
};

const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
};

export const fetchUsers = () => {
  return (dispatch) => {
    return UserAPIUtil.fetchUsers().then(users =>
      dispatch(receiveUsers(users))
    )
  }
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUser(userId).then(user => 
      dispatch(receiveUser(user))
    )
  }
};

export const updateUser = (user) => {
  return (dispatch) => {
    return UserAPIUtil.updateUser(user).then(user => 
      dispatch(receiveUser(user)), err =>
      dispatch(receiveUserErrors(err.responseJSON))
    )
  }
};

export const updateUserProfilePic = (image, userId) => {
  return (dispatch) => {
    return UserAPIUtil.updateUserProfilePic(image, userId).then(user => 
      dispatch(receiveUser(user)), err =>
      dispatch(receiveUserErrors(err.responseJSON))  
    )
  }
};