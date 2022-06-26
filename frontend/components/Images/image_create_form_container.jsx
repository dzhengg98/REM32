import { connect } from 'react-redux';
import ImageCreateForm from './image_create_form';
import { createImage, clearImageErrors } from '../../actions/image_actions';

const mSTP = (state) => {
  //debugger
  return {
    errors: state.errors.images,
  }
  //debugger
};

const mDTP = (dispatch) => {
  //debugger
  return {
    createImage: (image) => dispatch(createImage(image)),
    clearImageErrors: () => dispatch(clearImageErrors()),
  }
  //debugger
};

export default connect(mSTP, mDTP)(ImageCreateForm);