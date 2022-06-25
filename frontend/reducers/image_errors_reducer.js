import { RECEIVE_IMAGE_ERRORS } from "../actions/image_actions";

const imageErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_IMAGE_ERRORS:
      return action.errors;
    default:
        return state;
  }
}

export default imageErrorsReducer;