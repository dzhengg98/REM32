import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  return props.currentUser ? (
    <div className="header-right">
      {/* <p className="welcome-message">Hello {props.currentUser.username}!</p> */}
      <h2 className="header-search-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg></h2>
      <input type="text" disabled className="header-search" placeholder="Search REM32"/>
      <h2 className="header-icon-user"><a href="#"><img src={window.userIcon} /></a></h2>
      <h2 className="header-icon-null"><a href="#"><img src={window.messageIcon} /></a></h2>
      <h2 className="header-icon-null"><a href="#"><img src={window.notificationIcon} /></a></h2>
      <ul className="user-auth-buttons">
        <li key="logout" className="log-out"><a onClick={logoutUser}>Logout</a></li>
        <li key="upload" className="upload-button"><Link to="/images/new">Upload</Link></li>
      </ul>
    </div>
  ) : (
    <div className="header-right">
      <h2 className="header-search-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg></h2>
      <input type="text" disabled className="header-search" placeholder="Search REM32"/>
      <ul className="user-auth-buttons">
        <li key="login" className="log-in"><Link to="/login">Log in</Link></li>
        <li key="signup" className="sign-up-button"><Link to="/signup">Sign up</Link></li>
      </ul>
    </div>
  )
}

export default Header;