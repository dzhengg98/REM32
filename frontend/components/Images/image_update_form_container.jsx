import { connect } from 'react-redux';
import { editImage, deleteImage, fetchImage, clearImageErrors } from '../../actions/image_actions';
import ImageUpdateForm from './image_update_form';

const mSTP = (state, ownProps) => {
  return {
    imageId: ownProps.match.params.imageId,
    image: state.entities.images[ownProps.match.params.imageId],
    errors: state.errors.images,
    currentUserId: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    editImage: (image) => dispatch(editImage(image)),
    deleteImage: (imageId) => dispatch(deleteImage(imageId)),
    fetchImage: (imageId) => dispatch(fetchImage(imageId)),
    clearImageErrors: () => dispatch(clearImageErrors()),
  }
}

export default connect(mSTP, mDTP)(ImageUpdateForm);