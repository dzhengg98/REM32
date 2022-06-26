import { connect } from 'react-redux';
import { editImage, deleteImage, fetchImage, clearImageErrors } from '../../actions/image_actions';
import ImageUpdateForm from './image_update_form';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    imageId: ownProps.match.params.imageId,
    image: state.entities.images[ownProps.match.params.imageId],
    errors: state.errors.images,
    currentUserId: state.session.id,
  }
  // debugger
}

const mDTP = (dispatch) => {
  debugger
  return {
    editImage: (image) => dispatch(editImage(image)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId)),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    clearImageErrors: () => dispatch(clearImageErrors()),
  }
  debugger
}

export default connect(mSTP, mDTP)(ImageUpdateForm);