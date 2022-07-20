import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const userProfilePic = () => {
    return props.currentUser.profilepic ? (
      <img className="circular" src={props.currentUser.profilepic}/>
    ) : (
      <img src={window.userIcon}/>
    )
  }

  return props.currentUser ? (
    <div className="header-right">
      <h2 className="header-search-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg></h2>
      <input type="text" disabled className="header-search" placeholder="Search REM32"/>
      <h2 className="header-icon-user"><Link to={`/users/${props.currentUser.id}`}>{userProfilePic()}</Link></h2>
      <h2 className="header-plane-icon">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
        </div>
      </h2>
      <h2 className="header-bell-icon">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M22.656 6.383c-.216-.817.023-1.696.627-2.298l.003-.003c.475-.474.714-1.095.714-1.712 0-1.305-1.051-2.37-2.37-2.37-.618 0-1.239.238-1.714.712l-.002.003c-.604.604-1.48.844-2.299.626-5.93-1.57-11.011 7.819-16.211 5.179l-1.404 1.406 16.073 16.074 1.405-1.406c-2.64-5.198 6.751-10.28 5.178-16.211zm-.154-4.887c.444.443.444 1.165 0 1.608-.443.443-1.163.442-1.606-.001s-.444-1.164 0-1.606c.443-.444 1.164-.444 1.606-.001zm-11.731 20.504c-.646.646-1.535 1-2.422 1-.874 0-1.746-.346-2.376-.976-1.27-1.27-1.308-3.563-.024-4.846l4.822 4.822z"/></svg>
        </div>
      </h2>
      <ul className="user-auth-buttons">
        <li key="logout" className="log-out"><a onClick={logoutUser}>Logout</a></li>
        <Link to="/images/new" className="no-blue">
          <li key="upload" className="upload-button">
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z" fillRule="nonzero"/></svg>
            <span>Upload</span>
          </li>
        </Link>
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