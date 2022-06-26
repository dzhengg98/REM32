import { connect } from 'react-redux';
import ImageCreateForm from './image_create_form';
import { createImage } from '../../actions/image_actions';

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
  }
  //debugger
};

export default connect(mSTP, mDTP)(ImageCreateForm);