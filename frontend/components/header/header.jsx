import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const showInfo = () => props.currentUser ? (
    <li>
      <a onClick={logoutUser}>Logout</a>{" "}
    </li>
  ) : (
    [
      <li key="login">
        <Link to="/login">Log in</Link>
      </li>,
      <li key="signup">
        <Link to="/signup">Sign up</Link>
        {/* button */}
      </li>,
    ]
  );

  return (
    <div>
      <ul>{ showInfo() }</ul>
      {/* auth-btns */}
    </div>
  )
}

export default Header;