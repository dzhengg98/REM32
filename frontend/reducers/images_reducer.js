import { RECEIVE_IMAGES, RECEIVE_IMAGE } from '../actions/image_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_IMAGES:
      return Object.assign({}, newState, action.images);
    case RECEIVE_IMAGE:
      return Object.assign({}, newState, {[action.image.id]: action.image});
    default:
      return state;
  }
};

export default imagesReducer;