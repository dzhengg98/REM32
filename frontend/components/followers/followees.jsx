import React from 'react';
import { Link } from 'react-router-dom';

const followees = (props) => {
  const a = [];
  props.userFollowers.forEach(follower => a.push(follower.followerId));
  const allUserFollowers = Object.values(props.users).filter(user => a.indexOf(user.id) !== -1);
  return (
    <div className="modal" onClick={props.closeModal}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-holder">
          <div className="modal-holder-top-container">
            <div className="exit-modal">
              <div className="close-modal" onClick={props.closeModal}>
                <div className="modal-button"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
              </div>
            </div>
            <h4 className="modal-title">Followers</h4>
          </div>
          <div className="followees-container">
            <div className="followees-inner">
              <div>
                <div className="followees-list">
                  {
                    allUserFollowers.map((follower, i) => 
                      <div className="followees-user" key={i}>
                        <div className="followees-user-image-container">
                          <Link to={`/users/${follower.id}`} onClick={props.closeModal}>
                            {follower.profilepic ? 
                              <img className="followees-user-image" src={follower.profilepic} alt="followerprofilepic" draggable="false"/> : 
                              <img className="followees-user-image" src={window.userIcon} alt="followingprofilepic" draggable="false"/>
                            }
                          </Link>
                        </div>
                        <div className="followees-user-username">
                          <Link to={`/users/${follower.id}`} onClick={props.closeModal}>{`${follower.firstName} ${follower.lastName}`}</Link>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default followees;