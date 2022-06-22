import React from 'react';
import { connect } from 'react-redux';
import ImageIndexContainer from './images/image_index_container';

const Home = (props) => {
  return (
    <div className="home-page">
      <div className="home-wrapper">
        <h1 className="home-title">Home Feed</h1>
        <p className="home-description">See photos and published Galleries from people you follow.</p>
      </div>

      <ImageIndexContainer />
    </div>
  );
};

const mSTP = (state) => {
  // debugger
  return {
    user: state.entities.users[state.session.id]
  }
}

export default connect(mSTP)(Home);