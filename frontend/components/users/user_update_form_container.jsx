import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserUpdateForm from './user_update_form';

const mSTP = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.user,
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mSTP, mDTP)(UserUpdateForm);