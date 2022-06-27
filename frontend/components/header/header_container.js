import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Header from './header';

const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
  // debugger
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mSTP, mDTP)(Header);