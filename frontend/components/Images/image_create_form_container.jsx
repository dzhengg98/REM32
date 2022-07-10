import { connect } from 'react-redux';
import ImageCreateForm from './image_create_form';
import { createImage, clearImageErrors } from '../../actions/image_actions';

const mSTP = (state) => {
  return {
    errors: state.errors.images,
  }
};

const mDTP = (dispatch) => {
  return {
    createImage: (image) => dispatch(createImage(image)),
    clearImageErrors: () => dispatch(clearImageErrors()),
  }
};

export default connect(mSTP, mDTP)(ImageCreateForm);