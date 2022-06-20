import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">REM</div>
      <div className="logo-text">32</div>
    </Link>
  )
}

export default Logo;