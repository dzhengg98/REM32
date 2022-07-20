import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

const Splash = () => {
  return (
    <div>
      <div className="splash-page">
        <div className="splash-cover">
          <div className="splash-text">
            <h1 className="splash-title">Discover and share the world's best photos</h1>
            <p className="splash-description">Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads-just great photography.</p>
            <Link to="/signup">
              <button className="splash-sign-up-button">
                <span>Sign up</span>
              </button>
            </Link>
          </div>
          <div className="splash-shape-divider-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,202.7C672,192,768,128,864,112C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
        
        <div className="editor-choice-container">
          <div className="splash-layout-box-container">
            <div className="splash-layout-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M5.627 19.027l2.265 3.359c-.643.448-1.219.991-1.708 1.614l-.48-2.506h-2.704c.745-.949 1.631-1.782 2.627-2.467zm12.746 0l-2.265 3.359c.643.448 1.219.991 1.708 1.614l.48-2.506h2.704c-.745-.949-1.631-1.782-2.627-2.467zm-6.373-2.388c-2.198 0-4.256.595-6.023 1.632l2.271 3.368c1.118-.607 2.396-.948 3.752-.948s2.634.34 3.752.948l2.271-3.368c-1.767-1.037-3.825-1.632-6.023-1.632zm-2.341 3.275l-.537-.287-.536.287.107-.599-.438-.421.602-.083.265-.547.266.547.603.083-.438.421.106.599zm3.149-.115l-.818-.438-.82.438.164-.915-.671-.643.921-.127.406-.835.405.835.92.127-.671.643.164.915zm2.583.115l-.536-.287-.536.287.106-.599-.438-.421.603-.083.266-.547.265.547.603.083-.438.421.105.599zm2.618-10.258c-.286.638-.585 1.231-.882 1.783 4.065-1.348 6.501-5.334 6.873-9.439h-4.077c-.036.482-.08.955-.139 1.405h2.688c-.426 2.001-1.548 4.729-4.463 6.251zm-6.009 5.983c.577 0 1.152.039 1.721.115 1.221-3.468 5.279-6.995 5.279-15.754h-14c0 8.758 4.065 12.285 5.29 15.752.564-.075 1.136-.113 1.71-.113zm-2.951-13.639c.011 3.621.76 7.793 2.646 11.053-2.355-2.72-4.14-6.405-4.345-11.053h1.699zm-2.176 9.438c-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077c.372 4.105 2.808 8.091 6.873 9.438z"/></svg>
            </div>
          </div>
          <h2 className="editor-choice-title">
            <span>Editors' Choice</span>
          </h2>
        </div>

        <div className="editor-content-container">
          <div className="editor-content-info">
            <div className="editor-content-info-inner">
              <h3 className="editor-content-info-title">The best of the best.</h3>
              <p className="editor-content-info-para">Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what's new.</p>
              <Link to="/signup" className="join-button"><span>Join Today!</span></Link>
            </div>
          </div>
        </div>

        <div className="editor-images-container">
          <div className="editor-image-container">
            <img src={window.editorImage1} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage2} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage3} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage4} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage5} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage6} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage7} alt="" className="editor-image"/>
          </div>
          <div className="editor-image-container">
            <img src={window.editorImage8} alt="" className="editor-image"/>
          </div>
        </div>

        <div className="join-community-container">
          <div></div>
          <h2 className="join-community-title">Join our community today</h2>
          <p className="join-community-para">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography.</p>
          <Link to="/signup" className="join-community-sign-up-button"><span>Sign Up</span></Link>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Splash;