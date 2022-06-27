import { connect } from 'react-redux';
import userShow from './user_show';
import { fetchImages, fetchImage } from '../../actions/image_actions';
import { fetchUser, fetchUsers, updateUser, updateUserProfilePic } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    images: Object.values(state.entities.images),
    users: state.entities.users
  }
  // debugger
};

const mDTP = dispatch => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: (user) => dispatch(updateUser(user)),
    updateUserProfilePic: (image, userId) => dispatch(updateUserProfilePic(image, userId))
  }
};

export default connect(mSTP, mDTP)(userShow);