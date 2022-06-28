import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages } from '../../actions/image_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => {
  // debugger
  return {
    images: Object.values(state.entities.images),
    users: state.entities.users
  }
};

const mDTP = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers()),
  }
};

export default connect(mSTP, mDTP)(ImageIndex);