import React from 'react';
import { connect } from 'react-redux';
import ImageIndexContainer from '../Images/image_index_container';
import Footer from '../footer/footer';
import DeveloperMessage from './developer_message';

const Home = (props) => {
  return (
    <div className="home-page">
      <div className="home-wrapper">
        <h1 className="home-title">Home Feed</h1>
        <p className="home-description">See photos and published Galleries from people you follow.</p>
      </div>
      <DeveloperMessage />
      <ImageIndexContainer />
      <Footer/>
    </div>
  );
};

const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id]
  }
}

export default connect(mSTP)(Home);