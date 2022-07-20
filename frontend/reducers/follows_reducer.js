import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return Object.assign({}, newState, action.follows);
    case RECEIVE_FOLLOW:
      return Object.assign({}, newState, {[action.follow.id]: action.follow});
    case REMOVE_FOLLOW:
      delete newState[action.follow.id];
      return newState;
    default:
      return newState;
  }
}

export default followsReducer;