import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const welcomeMessage = () => props.currentUser ? (
    <p>Hi {props.currentUser.username}!</p>
  ) : (
    <p>{" "}</p>
  )

  const showInfo = () => props.currentUser ? (
    <li className="log-out">
      <a onClick={logoutUser}>Logout</a>
    </li>
  ) : (
    [
      <li key="login" className="log-in">
        <Link to="/login">Log in</Link>
      </li>,
      <li key="signup" className="sign-up-button">
        <Link to="/signup">Sign up</Link>
      </li>,
    ]
  );

  return (
    <div>
      <h2>{ welcomeMessage() }</h2>
      <ul className="user-auth-buttons">{ showInfo() }</ul>
    </div>
  )
}

export default Header;