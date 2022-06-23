import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  return props.currentUser ? (
    <div className="header-right">
      <p className="welcome-message">Hello {props.currentUser.username}!</p>
      <h2><a href="#"><img src={window.userIcon} /></a></h2>
      <h2><a href="#"><img src={window.messageIcon} /></a></h2>
      <h2><a href="#"><img src={window.notificationIcon} /></a></h2>
      <ul className="user-auth-buttons">
        <li className="log-out"><a onClick={logoutUser}>Logout</a></li>
      </ul>
    </div>
  ) : (
    <div className="header-right">
      <ul className="user-auth-buttons">
        <li key="login" className="log-in"><Link to="/login">Log in</Link></li>
        <li key="signup" className="sign-up-button"><Link to="/signup">Sign up</Link></li>
      </ul>
    </div>
  )
}

export default Header;