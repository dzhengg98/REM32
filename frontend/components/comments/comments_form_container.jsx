import { connect } from 'react-redux';
import CommentsForm from './comments_form';
import { fetchComments, fetchComment, createComment, deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchImage } from '../../actions/image_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    images: state.entities.images,
    users: state.entities.users,
    comments: Object.values(state.entities.comments),
  }
}

const mDTP = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mSTP, mDTP)(CommentsForm);