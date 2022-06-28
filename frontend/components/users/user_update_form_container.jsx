import { connect } from 'react-redux';
import { fetchUser, updateUser, updateUserProfilePic } from '../../actions/user_actions';
import UserUpdateForm from './user_update_form';

const mSTP = (state, ownProps) => {
  debugger
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.users,
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  debugger
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateUserProfilePic: (image, userId) => dispatch(updateUserProfilePic(image, userId)),
  }
}

export default connect(mSTP, mDTP)(UserUpdateForm);