import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoUserLogin: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
