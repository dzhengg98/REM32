import { connect } from 'react-redux';
import ImageForm from './image_form';
import { createImage } from '../../actions/image_actions';

const mSTP = (state) => {
  return {
    formType: 'Upload Image',
    image: {
      title: '',
      description: ''
    },
    currentUser: state.session.id
  }
};

const mDTP = (dispatch) => {
  return {
    processForm: (image) => dispatch(createImage(image))
  }
};

export default connect(mSTP, mDTP)(ImageForm);