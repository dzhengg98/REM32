import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_LIKES:
      return Object.assign({}, newState, action.likes);
    case RECEIVE_LIKE:
      return Object.assign({}, newState, {[action.like.id]: action.like});
    case REMOVE_LIKE:
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
}

export default likesReducer;