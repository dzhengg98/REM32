import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-page">

      <div className="splash-cover">
        <div className="splash-text">
          <h1 className="splash-title">Discover and share the world's best photos</h1>
          <p className="splash-description">Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads-just great photography.</p>
          <button className="splash-sign-up-button"><Link to="/signup"><span>Sign up</span></Link></button>
        </div>
        <div className="splash-shape-divider-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,213.3C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        </div>
      </div>

      <div className="splash-about">
        <h2 className="splash-about-title">What makes us different</h2>
        <div className="splash-about-contents">
          <div className="splash-about-content">
            <img className="splash-about-icons" src={leafIcon} />
            <h3 className="splash-about-content-titles">Grow as a photographer</h3>
            <p className="splash-about-content-descriptions splash-about-content-description-one">Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
          </div>
          <div className="splash-about-content">
            <img className="splash-about-icons" src={pencilIcon} />
            <h3 className="splash-about-content-titles">Build your career</h3>
            <p className="splash-about-content-descriptions splash-about-content-description-two">Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered in Search results, showcase your articles, presents, videos, and more with Resources, and create a Portfolio website to showcase your work.</p>
          </div>
          <div className="splash-about-content">
            <img className="splash-about-icons" src={barIcon} />
            <h3 className="splash-about-content-titles">See how you're performing</h3>
            <p className="splash-about-content-descriptions splash-about-content-description-three">With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
          </div>
          <div className="splash-about-content">
            <img className="splash-about-icons" src={crownIcon} />
            <h3 className="splash-about-content-titles">Sell your work</h3>
            <p className="splash-about-content-descriptions splash-about-content-description-four">Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.</p>
          </div>
        </div>
      </div>

      <div className="splash-app">
        <div className="splash-app-left">
          <h2 className="splash-app-title">Get the app</h2>
          <p className="splash-app-description">Join our community of over 16 million like-minded photographers. Download the REM32 app for Android and iOS today!</p>
          <a href="#"><img src={appStoreIcon} className="splash-app-image" alt="Download on the App Store"/></a>
          <a href="#"><img src={googlePlayIcon} className="splash-app-image" alt="Get it on Google Play"/></a>
        </div>
        <div className="splash-app-right">
          <a href="#"><img src={devicesImg} className="devices-image" alt="devices image"/></a>
        </div>
      </div>
    </div>
  )
}

export default Splash;