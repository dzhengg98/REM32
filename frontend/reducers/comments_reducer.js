import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, newState, action.comments);
    case RECEIVE_COMMENT:
      return Object.assign({}, newState, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;