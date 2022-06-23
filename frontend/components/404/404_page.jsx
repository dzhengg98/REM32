import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page-container'>
      <h1 className="error-page-title"> Sorry, page is missing </h1>
      <div className="error-home-link">
        <Link to='/'>Home</Link>
      </div>
      <div className="error-login-link">
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default ErrorPage;