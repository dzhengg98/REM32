import React from 'react';
import { Link } from 'react-router-dom';

const following = (props) => {
  const a = [];
  props.userFollowings.forEach(following => a.push(following.followeeId));
  const allUserFollowings = Object.values(props.users).filter(user => a.indexOf(user.id) !== -1);

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
            <h4 className="modal-title">Following</h4>
          </div>
          <div className="following-container">
            <div className="following-inner">
              <div>
                <div className="following-list">
                  {
                    allUserFollowings.map((following, i) => 
                      <div className="following-user" key={i}>
                        <div className="following-user-image-container">
                          <Link to={`/users/${following.id}`} onClick={props.closeModal}>
                            {following.profilepic ? 
                              <img className="following-user-image" src={following.profilepic} alt="followingprofilepic" /> :
                              <img className="following-user-image" src={window.userIcon} alt="followingprofilepic"/>
                            }
                          </Link>
                        </div>
                        <div className="following-user-username">
                          <Link to={`/users/${following.id}`} onClick={props.closeModal}>{`${following.firstName} ${following.lastName}`}</Link>
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

export default following;