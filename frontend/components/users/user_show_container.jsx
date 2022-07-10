import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchImages, fetchImage } from '../../actions/image_actions';
import { fetchUsers, updateUserProfilePic } from '../../actions/user_actions';
import { fetchLikes } from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    images: Object.values(state.entities.images),
    users: state.entities.users,
    likes: Object.values(state.entities.likes),
  }
};

const mDTP = dispatch => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLikes: () => dispatch(fetchLikes()),
    updateUserProfilePic: (image, userId) => dispatch(updateUserProfilePic(image, userId))
  }
};

export default connect(mSTP, mDTP)(UserShow);