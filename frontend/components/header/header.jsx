import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const welcomeMessage = () => props.currentUser ? (
    <p className="welcome-message">Hello {props.currentUser.username}!</p>
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

  const userProfile = () => props.currentUser ? (
    <a href="#">
      <img src={window.userIcon} />
    </a>
  ) : (
    <p>{" "}</p>
  )

  const userMessage = () => props.currentUser ? (
    <a href="#">
      <img src={window.messageIcon} />
    </a>
  ) : (
    <p>{" "}</p>
  )

  const userNotification = () => props.currentUser ? (
    <a href="#">
      <img src={window.notificationIcon} />
    </a>
  ) : (
    <p>{" "}</p>
  )

  return (
    <div className="header-right">
      <h2>{ welcomeMessage() }</h2>
      <h2>{ userProfile() }</h2>
      <h2>{ userMessage() }</h2>
      <h2>{ userNotification() }</h2>
      <ul className="user-auth-buttons">{ showInfo() }</ul>
    </div>
  )
}

export default Header;