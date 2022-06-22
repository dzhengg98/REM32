import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-page">
      <h1 className="splash-title">Discover and share the world's best photos</h1>
      <p className="splash-description">Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
      <button className="splash-sign-up-button"><Link to="/signup"><span>Sign up</span></Link></button>
    </div>
  )
}

export default Splash;