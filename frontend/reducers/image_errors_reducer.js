import { CLEAR_IMAGE_ERRORS, RECEIVE_IMAGE_ERRORS } from "../actions/image_actions";

const imageErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  //debugger

  switch (action.type) {
    case RECEIVE_IMAGE_ERRORS:
      //debugger
      return action.errors;
    case CLEAR_IMAGE_ERRORS:
      // debugger
      return [];
    default:
      //debugger
      return state;
  }
}

export default imageErrorsReducer;