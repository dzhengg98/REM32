import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const Links = () => (
    <nav>
      <Link to="/login">Log In</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  )

  const display = () => (
    <div>
      <h2>Hi {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  )

  return currentUser ? display() : Links();
};

export default Header;