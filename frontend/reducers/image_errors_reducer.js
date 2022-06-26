import { RECEIVE_IMAGE_ERRORS } from "../actions/image_actions";

const imageErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  //debugger

  switch (action.type) {
    case RECEIVE_IMAGE_ERRORS:
      //debugger
      return action.errors;
    default:
      //debugger
      return state;
  }
}

export default imageErrorsReducer;