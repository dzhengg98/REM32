import React from 'react';
import ErrorPage from '../404/404_page';
import UserShowImageItem from './user_show_image_item';

class userShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchImages();
    this.props.fetchUsers();
    this.props.fetchUser(this.props.user.id);
  }

    // this.props.currentUser.id === Number(this.props.match.params.userId) 
    // if these two matches, then we know the user is viewing his own profile page
    // if it does not match, then we know the user is viewing another user's profile pages
  userProfileInfo() {
    // debugger
    return this.props.currentUser.id === Number(this.props.match.params.userId) ? (
      <div>
        <div>You are the current user</div>
        <div className="arrow"></div>
        <div className="user-profile-main-container">
          <div className="user-profile-picture-image"></div>
          <div className="user-profile-edit-icon">Pencil</div>
          <div className="user-profile-share-icon">Share</div>
          <div className="user-profile-portfolio-icon">Briefcase</div>
          <div className="user-profile-more-icon-container">Dots
            <div className="user-profile-manage-photos-icon">photos</div>
            <div className="user-profile-settings-icon">cog</div>
          </div>
        </div>
        <div className="user-profile-username">{this.props.user.username}</div>
        <div className="user-profile-location-container">
          <div className="user-profile-location-icon">location icon</div>
          <div className="user-profile-location-city">{this.props.user.city}, </div>
          <div className="user-profile-location-state">{this.props.user.country}</div>
        </div>
        <div className="user-profile-about">{this.props.user.about}</div>
        {/* <div className="user-profile-likes-impressions-container">
          <div className="user-profile-likes">
            <span className="user-profile-likes-number"></span>
            <span>Photo Likes</span>
          </div>
          <div className="user-profile-impressions">
            <span className="user-profile-impressions-number"></span>
            <span>Photo impressions</span>
          </div>
          <div className="user-profile-impressions-info"></div>
        </div> */}
        <div className="user-profile-links-container">
          <div className="user-profile-twitter-link"><a href={`${this.props.user.twitter}`}></a></div>
          <div className="user-profile-instagram-link"><a href={`${this.props.user.instagram}`}></a></div>
          <div className="user-profile-facebook-link"><a href={`${this.props.user.facebook}`}></a></div>
          <div className="user-profile-website-link"><a href={`${this.props.user.website}`}></a></div>
        </div>
        <div className="user-profile-nav-bar-container">
          <div className="user-profile-nav-bar-link">Photos {this.props.user.images.length}</div>
          <div className="user-profile-nav-bar-link">Galleries</div>
          <div className="user-profile-nav-bar-link">Groups</div>
          <div className="user-profile-nav-bar-link">Licensing</div>
          <div className="user-profile-nav-bar-link">Resources</div>
          <div className="user-profile-nav-bar-link">Resume</div>
        </div>
      </div>
    ) : (
      <div>
        <div>You are viewing another user</div>
        <div className="user-profile-main-container">
          <div className="user-profile-picture-image"></div>
        </div>
        <div className="user-profile-username">{this.props.user.username}</div>
        <div className="user-profile-location-container">
          <div className="user-profile-location-icon">location icon</div>
          <div className="user-profile-location-city">{this.props.user.city}, </div>
          <div className="user-profile-location-state">{this.props.user.country}</div>
        </div>
        <div className="user-profile-follow-button">
          <button>Follow</button>
        </div>
        <div className="user-profile-about">{this.props.user.about}</div>
        {/* <div className="user-profile-likes-impressions-container">
          <div className="user-profile-followers">
            <span className="user-profile-followers-number"></span>
            <span>Followers</span>
          </div>
          <div className="user-profile-followings">
            <span className="user-profile-followings-number"></span>
            <span>Following</span>
          </div>
          <div className="user-profile-likes">
            <span className="user-profile-likes-number"></span>
            <span>Photo Likes</span>
          </div>
          <div className="user-profile-impressions">
            <span className="user-profile-impressions-number"></span>
            <span>Photo impressions</span>
          </div>
          <div className="user-profile-impressions-info"></div>
        </div> */}
        <div className="user-profile-links-container">
          <div className="user-profile-twitter-link"><a href={`${this.props.user.twitter}`}></a></div>
          <div className="user-profile-instagram-link"><a href={`${this.props.user.instagram}`}></a></div>
          <div className="user-profile-facebook-link"><a href={`${this.props.user.facebook}`}></a></div>
          <div className="user-profile-website-link"><a href={`${this.props.user.website}`}></a></div>
        </div>
        <div className="user-profile-nav-bar-container">
          <div className="user-profile-nav-bar-link">Photos {this.props.user.images.length}</div>
          <div className="user-profile-nav-bar-link">Galleries</div>
          <div className="user-profile-nav-bar-link">Groups</div>
        </div>
      </div>
    )
  }

  render() {
    // debugger
    const images = this.props.images.filter((image) => image.uploaderId === Number(this.props.match.params.userId))

    if (!Object.keys(this.props.users).includes(this.props.match.params.userId)) return <ErrorPage/>

    return (
      <div>
        <div className="block-space"></div>
        <p>This is the user show page</p>
        {this.userProfileInfo()}
        <div>
          {
            images.map((image) => <UserShowImageItem key={image.id} image={image} />)
          }
        </div>
      </div>
    )
  }
}

export default userShow;