import { RECEIVE_IMAGES, RECEIVE_IMAGE, REMOVE_IMAGE } from '../actions/image_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_IMAGES:
      return Object.assign({}, newState, action.images);
    case RECEIVE_IMAGE:
      //debugger
      return Object.assign({}, newState, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      delete newState[action.imageId];
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;