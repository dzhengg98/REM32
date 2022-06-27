import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages } from '../../actions/image_actions';

const mSTP = (state) => {
  // debugger
  return {
    images: Object.values(state.entities.images)
  }
};

const mDTP = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages())
  }
};

export default connect(mSTP, mDTP)(ImageIndex);