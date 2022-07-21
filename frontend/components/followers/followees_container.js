import { connect } from 'react-redux';
import followees from './followees';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
  }
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mSTP, mDTP)(followees);