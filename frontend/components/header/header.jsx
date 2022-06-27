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
      <h2 className="header-icon-user"><Link to={`/users/${props.currentUser.id}`}><img src={window.userIcon} /></Link></h2>
      <h2 className="header-icon-null"><div className="is_disabled"><img src={window.messageIcon} /></div></h2>
      <h2 className="header-icon-null"><div className="is_disabled"><img src={window.notificationIcon} /></div></h2>
      <ul className="user-auth-buttons">
        <li key="logout" className="log-out"><a onClick={logoutUser}>Logout</a></li>
        <li key="upload" className="upload-button">
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z" fillRule="nonzero"/></svg>
          <Link to="/images/new">Upload</Link>
        </li>
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