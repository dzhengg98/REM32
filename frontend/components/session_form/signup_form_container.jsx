import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions";

const mstP = (state) => {
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

export default connect(mstP, mDTP)(SessionForm);