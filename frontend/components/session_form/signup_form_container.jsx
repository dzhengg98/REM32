import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
  }
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
};

export default connect(mSTP, mDTP)(SessionForm);