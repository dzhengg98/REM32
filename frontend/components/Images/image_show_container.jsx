import {connect} from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    image: state.entities.images[ownProps.match.params.imageId],
    currentUserId: state.session.id,
    users: state.entities.users
  }
  // debugger
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchImage: () => dispatch(fetchImage(ownProps.match.params.imageId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (uploaderId) => dispatch(fetchUser(uploaderId)),
  }
}

export default connect(mSTP, mDTP)(ImageShow);