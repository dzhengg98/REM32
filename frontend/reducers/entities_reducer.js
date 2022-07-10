import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import imagesReducer from "./images_reducer";
import commentsReducer from "./comments_reducer";
import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  comments: commentsReducer,
  likes: likesReducer,
});

export default entitiesReducer;