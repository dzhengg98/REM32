import {connect} from 'react-redux';
import ImageShow from './image_show';
import { fetchImage, fetchImages } from '../../actions/image_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';

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
    fetchImages: () => dispatch(fetchImages()),
    fetchImage: () => dispatch(fetchImage(ownProps.match.params.imageId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (uploaderId) => dispatch(fetchUser(uploaderId)),
    fetchComments: () => dispatch(fetchComments()),
  }
}

export default connect(mSTP, mDTP)(ImageShow);