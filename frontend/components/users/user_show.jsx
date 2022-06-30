import React from 'react';
import ErrorPage from '../404/404_page';
import UserShowImageItem from './user_show_image_item';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilepic: '',
      profilepicUrl: '',
      id: '',
      coverpic: '',
      coverpicUrl: '',
      nav: ''
    }
    this.handleProfilePicFile = this.handleProfilePicFile.bind(this);
    this.handleProfilePicSubmit = this.handleProfilePicSubmit.bind(this);
    this.handleCoverPicFile = this.handleCoverPicFile.bind(this);
    this.handleCoverPicSubmit = this.handleCoverPicSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
    this.props.user ? this.setState({id: this.props.user.id}) : this.setState({id: Number(this.props.match.params.userId)})
  }

  // COVER PIC

  userCoverPic() {
    return this.props.user.coverpic ? (
      <img className="user-cover-picture-image" src={this.props.user.coverpic}/>
    ) : (
      <div></div>
    )
  }

  handleCoverPicSubmit() {
    const formData = new FormData();
    if (this.state.coverpic) {
      formData.append('user[coverpic]', this.state.coverpic);
      formData.append('user[id]', this.state.id);
    }
    this.props.updateUserProfilePic(formData, this.props.user.id);
  }

  handleCoverPicFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        coverpic: file,
        coverpicUrl: fileReader.result,
      }, () => this.handleCoverPicSubmit());
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // COVER EDIT
  
  userCoverEdit() {
    return (
      <div className="user-cover-picture-input-container">
        <label htmlFor="user-cover-picture-input" className="user-cover-picture-input-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>
        </label>
        <input type="file" id="user-cover-picture-input" onInput={this.handleCoverPicFile}/>
      </div>
    )
  }

  // PROFILE PIC

  handleProfilePicSubmit() {
    const formData = new FormData();

    if (this.state.profilepic) {
      formData.append('user[profilepic]', this.state.profilepic);
      formData.append('user[id]', this.state.id);
    }

    this.props.updateUserProfilePic(formData, this.props.user.id);
  }

  userProfilePic() {
    return this.props.user.profilepic ? (
      <img className="circular profile-image" src={this.props.user.profilepic}/>
    ) : (
      <img className="circular profile-image" src={window.userIcon}/>
    )
  }

  handleProfilePicFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        profilepic: file,
        profilepicUrl: fileReader.result,
      }, () => this.handleProfilePicSubmit());
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // PROFILE EDIT
  userProfileEdit() {
    return (
      <div className="user-profile-picture-input-container">
        <label htmlFor="user-profile-picture-input" className="user-profile-picture-input-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>
        </label>
        <input type="file" id="user-profile-picture-input" onInput={this.handleProfilePicFile}/>
      </div>
    )
  }

  // PROFILE ICONS
  userProfileIcons() {
    return this.props.currentUser.id === this.props.user.id ? (
      <div className="user-profile-main-icons">
        <div className="user-profile-icon-container">
          <div className="user-profile-edit-icon">
            <Link to={`/users/${this.props.currentUser.id}/edit`}>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
          </div>
        </div>
        <div className="user-profile-icon-container">
          <div className="user-profile-share-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
          </div>
        </div>
        <div className="user-profile-icon-container">
          <div className="user-profile-portfolio-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7v15h24v-15h-24zm22 13h-20v-6h6v-2h-6v-3h20v3h-6v2h6v6zm-13-15.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v2h2v-1.5zm5 6.5h-4v4h4v-4z"/></svg>
          </div>
        </div>
        <div className="user-profile-icon-container">
          <div className="user-profile-more-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
          </div>
        </div>
      </div>
    ) : (
      <div className="other-user-profile-main-icons">
        <div className="other-user-profile-icon-container">
          <div className="other-user-profile-airplane-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
          </div>
        </div>
        <div className="other-user-profile-icon-container">
          <div className="other-user-profile-share-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
          </div>
        </div>
        <div className="other-user-profile-icon-container">
          <div className="other-user-profile-report-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
          </div>
        </div>
      </div>
    )
  }

  // PROFILE NAME
  userProfileName() {
    return this.props.user.firstName && this.props.user.lastName ? (
      <div className="user-profile-full-name-container">
        <h1 className="user-profile-full-name">
        {this.props.user.firstName} {this.props.user.lastName}
        </h1>
      </div>
    ) : (
      this.props.user.firstName ? (
        <div className="user-profile-full-name-container">
          <h1 className="user-profile-full-name">
          {this.props.user.firstName}
          </h1>
        </div>
      ) : (
        <div className="user-profile-full-name-container">
          <h1 className="user-profile-full-name">
          {this.props.user.lastName}
          </h1>
        </div>
      )
    )
  }

  // PROFILE LOCATION

  userProfileLocation() {
    return (this.props.user.city && this.props.user.country) ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-container') : ('other-user-profile-location-container')}`}>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-icon') : ('other-user-profile-location-icon')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
        </div>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city-country") : ("other-user-profile-location-city-country")}`}>
          <p>{this.props.user.city.concat(',')} {this.props.user.country}</p>
        </div>
      </div>
    ) : (
      (this.props.user.city) ? (
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
          </div>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city") : ("other-user-profile-location-city")}`}>
            <p>{this.props.user.city}</p>
          </div>
        </div>
      ) : (
        (this.props.user.country) ? (
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
            <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </div>
            <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-country") : ("other-user-profile-location-country")}`}>
              <p>{this.props.user.country}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )
      )
    )
  }

  // OTHER USER PROFILE FOLLOW

  otheruserFollowButton() {
    return (
      <div className="other-user-profile-follow-button-container">
        <button className="other-user-profile-follow-button">
          <span>Follow</span>
        </button>
    </div>
    )
  }

  // PROFILE ABOUT

  userProfileAbout() {
    return this.props.user.about ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-about") : ("other-user-about")}`}>
        <p>{this.props.user.about}</p>
      </div>
    ) : (
      <div></div>
    )
  }

  // PROFILE LIKES IMPRESSIONS

  userProfileLikesImpressions() {
    return this.props.currentUser.id === this.props.user.id ? (
      <div className="user-profile-likes-impressions-container">
        <div className="user-profile-likes">
          <p><span className="user-profile-likes-number">0 Photo Likes</span></p>
        </div>
        <div className="user-profile-impressions">
          <p><span className="user-profile-impressions-number">0 Photo Impressions</span></p>
          <div className="user-profile-impressions-info">
            {/* <div>Info</div> */}
            <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fillRule="nonzero"/></svg>
          </div>
        </div>
      </div>
    ) : (
      <div className="other-user-profile-likes-impressions-container">
        <div className="other-user-profile-followers">
          <p>0&nbsp;</p>
          <p>Followers</p>
        </div>
        <div className="other-user-profile-followings">
          <p>0&nbsp;</p>
          <p>Following</p>
        </div>
        <div className="other-user-profile-likes">
          <p><span className="other-user-profile-likes-number">0 Photo Likes</span></p>
        </div>
        <div className="other-user-profile-impressions">
          <p><span className="other-user-profile-impressions-number">0 Photo Impressions</span></p>
            <div className="other-user-profile-impressions-info">
              {/* <div>Info</div> */}
              <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fillRule="nonzero"/></svg>
            </div>
          </div>
      </div>
    )
  }

  // PROFILE TWITTER LINK

  userTwitterLink() {
    return this.props.user.twitter ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-twitter-link") : ("other-user-profile-twitter-link")}`}>
        <a href={`//${this.props.user.twitter}`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
        </a>
      </div>
    ) : (
      <div></div>
    )
  }

  // PROFILE INSTAGRAM LINK

  userInstagramLink() {
    return this.props.user.instagram ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-instagram-link") : ("other-user-profile-instagram-link")}`}>
        <a href={`//${this.props.user.instagram}`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.615 6h-9.23c-.766 0-1.385.62-1.385 1.384v9.23c0 .766.619 1.386 1.385 1.386h9.23c.766 0 1.385-.62 1.385-1.385v-9.23c0-.765-.619-1.385-1.385-1.385zm-4.615 3.693c1.274 0 2.309 1.032 2.309 2.307s-1.035 2.307-2.309 2.307-2.307-1.033-2.307-2.307 1.033-2.307 2.307-2.307zm4.5 6.346c0 .255-.207.461-.461.461h-8.078c-.254 0-.461-.207-.461-.461v-5.039h.949c-.045.158-.078.32-.102.486-.023.168-.038.339-.038.514 0 2.04 1.652 3.693 3.691 3.693s3.691-1.653 3.691-3.693c0-.174-.015-.346-.039-.514-.023-.166-.058-.328-.102-.486h.95v5.039zm0-6.991c0 .255-.207.462-.461.462h-1.088c-.256 0-.461-.208-.461-.462v-1.087c0-.255.205-.461.461-.461h1.088c.254 0 .461.207.461.461v1.087z"/></svg>
        </a>
      </div>
    ) : (
      <div></div>
    )
  }

  // PROFILE FACEBOOK LINK

  userFacebookLink() {
    return this.props.user.facebook ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-facebook-link") : ("other-user-profile-facebook-link")}`}>
        <a href={`//${this.props.user.facebook}`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
        </a>
      </div>
    ) : (
      <div></div>
    )
  }

  // PROFILE WEBSITE LINK

  userWebsiteLink() {
    return this.props.user.website ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-website-link") : ("other-user-profile-website-link")}`}>
        <a href={`//${this.props.user.website}`} target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"/></svg>
        </a>
      </div>
    ) : (
      <div></div>
    )
  }
  
  // PROFILE NAVBAR 
  
  userNavBar() {
    return this.props.currentUser.id === this.props.user.id ? (
      <div className="user-profile-nav-bar-container">
        <button className='user-profile-nav-bar-link-1' onClick={() => this.changeNavToPhotos()}>
          <p>
            <span>Photos <span>{this.props.user.images.length}</span></span>
          </p>
        </button> 
        <button className="user-profile-nav-bar-link-2" onClick={() => this.changeNavToGalleries()}>
          <p>
            <span>Galleries</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-3" onClick={() => this.changeNavToGroups()}>
          <p>
            <span>Groups</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-4" onClick={() => this.changeNavToLicensing()}>
          <p>
            <span>Licensing</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-5" onClick={() => this.changeNavToResources()}>
          <p>
            <span>Resources</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-6" onClick={() => this.changeNavToResume()}>
          <p>
            <span>Resume</span>
          </p>
        </button>
      </div>
    ) : (
      <div className="other-user-profile-nav-bar-container">
        <button className="user-profile-nav-bar-link-1" onClick={() => this.changeNavToPhotos()}>
          <p>
            <span>Photos <span>{this.props.user.images.length}</span></span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-2" onClick={() => this.changeNavToGalleries()}>
          <p>
            <span>Galleries</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-3" onClick={() => this.changeNavToGroups()}>
          <p>
            <span>Licensing</span>
          </p>
        </button>
        <button className="user-profile-nav-bar-link-6" onClick={() => this.changeNavToLicensing()}>
          <p>
            <span>Licensing</span>
          </p>
        </button>
      </div>
    )
  }
  
  changeNavToPhotos() {
    this.setState({ nav: "photos" })
  }

  changeNavToGalleries() {
    this.setState({ nav: "galleries"})
  }

  changeNavToGroups() {
    this.setState({ nav: "groups"})
  }

  changeNavToLicensing() {
    this.setState({ nav: "licensing"})
  }

  changeNavToResources() {
    this.setState({ nav: "resources"})
  }

  changeNavToResume() {
    this.setState({ nav: "resume"})
  }

  // PROFILE ALL INFO

  userProfileInfo() {
    return this.props.currentUser.id === Number(this.props.match.params.userId) ? (
      <div className="user-profile-information">
        <div className="user-profile-information-top-container">
          <div className="user-cover-pic-container">
            <div className="user-cover-pic-inner-container">
              {this.userCoverPic()}
              {this.userCoverEdit()}
              <div className="user-profile-arrow-container">
                <div className="user-profile-arrow-inner-container">
                  <Link to="/"></Link>
                  {/* <img src={window.arrowLeftIcon} /> */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24 11L3.8 11L9.4 5.4L8 4L0 12L8 20L9.4 18.6L3.8 13L24 13V11Z" fill="#222222"></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile-main-container">
            <div className="user-profile-picture-image">
              <div className="user-profile-picture-image-inner">
                {this.userProfilePic()}
                {this.userProfileEdit()}
              </div>
            </div>
          </div>
        </div>
        <div className="user-main-info-container-outer">
          {this.userProfileIcons()}
          {this.userProfileName()}
          <div className="user-profile-location-outer-container">
            {this.userProfileLocation()}
          </div>
          {this.userProfileAbout()}
          {this.userProfileLikesImpressions()}
          <div className="user-profile-links-container">
            {this.userTwitterLink()}
            {this.userInstagramLink()}
            {this.userFacebookLink()}
            {this.userWebsiteLink()}
          </div>
        </div>
        {this.userNavBar()}
      </div>
    ) : (
      <div className="other-user-profile-information">
        <div className="other-user-profile-information-top-container">
          <div className="other-user-cover-pic-container">
            <div className="other-user-cover-pic-inner-container">
            {this.userCoverPic()}
            </div>
          </div>
          <div className="other-user-profile-main-container">
            <div className="other-user-profile-picture-image">
              <div className="other-user-profile-picture-image-inner">
                {this.userProfilePic()}
              </div>
            </div>
          </div>
        </div>
        <div className="other-user-main-info-container-outer">
        {this.userProfileIcons()}
        {this.userProfileName()}
        <div className="other-user-profile-location-outer-container">
          {this.userProfileLocation()}
        </div>
        {this.otheruserFollowButton()}
        {this.userProfileAbout()}
        {this.userProfileLikesImpressions()}
          <div className="other-user-profile-links-container">
            {this.userTwitterLink()}
            {this.userInstagramLink()}
            {this.userFacebookLink()}
            {this.userWebsiteLink()}
          </div>
        </div>
        {this.userNavBar()}
      </div>
    )
  }

  // PROFILE OTHER INFO

  userProfileOtherInfo(navBar) {
    const images = this.props.images.filter((image) => image.uploaderId === Number(this.props.match.params.userId))
    switch (navBar) {
      case 'photos':
        return (
          <div className="user-image-gallery-container">
            {
              images.reverse().map((image) => <UserShowImageItem key={image.id} image={image} />)
            }
          </div>
        )
      case 'galleries':
        return (
          this.props.currentUser.id === this.props.user.id ? (
            <div className="user-galleries-container">
              <div className="user-galleries-inner-container">
                <div className="user-galleries-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24-4v20h2v-18h18v-2h-20zm18 13h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
                </div>
                <h4 className="user-galleries-title">
                  <span>Curate photos using Galleries</span>
                </h4>
                <div className="user-galleries-text">
                  <p>
                    <span>Build a Gallery to show off your style or to keep track of what inspires you!</span>
                  </p>
                </div>
                <div className="user-galleries-button-container">
                  <button className="user-galleries-button">Create a new Gallery</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-galleries-container">
              <div className="user-galleries-inner-container">
                <div className="user-galleries-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24-4v20h2v-18h18v-2h-20zm18 13h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/></svg>
                </div>
                <h4 className="user-galleries-title">
                  <span>Work in progress</span>
                </h4>
                <div className="user-galleries-text">
                  <p>
                    <span>{this.props.user.firstName + " " + this.props.user.lastName} hasn't created any Galleries yet. Check back soon.</span>
                  </p>
                </div>
              </div>
            </div>
          )
        )
      case 'groups':
        return (
          this.props.currentUser.id === this.props.user.id ? (
            <div className="user-groups-container">
              <div className="user-groups-inner-container">
                <div className="user-groups-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M.002 20h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619zm20.498-7c-1.932 0-3.5 1.567-3.5 3.5s1.568 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.568-3.5-3.5-3.5zm1.5 4h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm-4.814 3h-9.183l-.003-.829c0-1.679.133-2.649 2.118-3.107 2.243-.518 4.458-.981 3.394-2.945-3.156-5.82-.901-9.119 2.488-9.119 4.06 0 4.857 4.119 3.085 7.903-1.972.609-3.419 2.428-3.419 4.597 0 1.38.589 2.619 1.52 3.5z"/></svg>
                </div>
                <h4 className="user-groups-title">
                  <span>You haven't joined any Groups</span>
                </h4>
                <div className="user-groups-text">
                  <p>
                    <span>Join Groups to meet like-minded REM32 members and participate in lively discussions around creative topics</span>
                  </p>
                </div>
                <div className="user-groups-button-container">
                  <button className="user-groups-button">Discover Groups</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-groups-container">
              <div className="user-groups-inner-container">
                <div className="user-groups-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M.002 20h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619zm20.498-7c-1.932 0-3.5 1.567-3.5 3.5s1.568 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.568-3.5-3.5-3.5zm1.5 4h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm-4.814 3h-9.183l-.003-.829c0-1.679.133-2.649 2.118-3.107 2.243-.518 4.458-.981 3.394-2.945-3.156-5.82-.901-9.119 2.488-9.119 4.06 0 4.857 4.119 3.085 7.903-1.972.609-3.419 2.428-3.419 4.597 0 1.38.589 2.619 1.52 3.5z"/></svg>
                </div>
                <h4 className="user-groups-title">
                  <span>Work in progress</span>
                </h4>
                <div className="user-groups-text">
                  <p>
                    <span>{this.props.user.firstName + " " + this.props.user.lastName} hasn't joined any Groups yet. Check back soon.</span>
                  </p>
                </div>
              </div>
            </div>
          )
        )
      case 'licensing':
        return (
          this.props.currentUser.id === this.props.user.id ? (
            <div className="user-licensing-container">
              <div className="user-licensing-inner-container">
                <div className="user-licensing-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"/></svg>
                </div>
                <h4 className="user-licensing-title">
                  <span>Add Licensing photos</span>
                </h4>
                <div className="user-licensing-text">
                  <p>
                    <span>Submit your work to REM32 Licensing and get paid for your work through our exclusive distribution partners. Your accepted photos will appear here!</span>
                  </p>
                </div>
                <div className="user-licensing-upload-button-container">
                  <button className="user-licensing-upload-button">Upload Photos</button>
                </div>
                <div className="user-licensing-choose-button-container">
                  <button className="user-licensing-choose-button">Choose from Photo Manager</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-licensing-container">
              <div className="user-licensing-inner-container">
                <div className="user-licensing-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"/></svg>
                </div>
                <h4 className="user-licensing-title">
                  <span>Work in progress</span>
                </h4>
                <div className="user-licensing-text">
                  <p>
                    <span>{this.props.user.firstName + " " + this.props.user.lastName} hasn't Licensed any photos yet. Check back soon.</span>
                  </p>
                </div>
              </div>
            </div>
          )
        )
      case 'resources':
        return (
          <div className="user-resources-container">
            <div className="user-resources-outer-container">
              <div className="user-resources-inner-container">
                <div className="user-resources-svg-container">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M7.902 14c-1.722-1.39-2.902-3.968-2.902-6.037 0-3.094 2.158-4.89 4.187-4.961.841-.013 1.729.199 2.394.57-.175-1.278-.747-2.259-1.344-2.958l1.367-.614c.283.407.572 1.129.761 1.979.383-.695.848-1.262 1.475-1.628.669-.391 1.778-.412 2.518-.272-.187.658-.577 1.513-1.491 2.075-.562.345-1.467.522-2.384.453.042.283.073.574.087.867.682-.364 1.44-.484 2.243-.472 2.029.071 4.187 1.867 4.187 4.961 0 2.069-1.18 4.647-2.902 6.037h6.902v2h-19.5c-.276 0-.5.224-.5.5s.224.5.5.5h19.5v2h-18.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h18.5v2h-18.5c-1.932 0-3.5-1.568-3.5-3.5 0-.83.29-1.593.773-2.193-.476-.455-.773-1.097-.773-1.807 0-1.38 1.12-2.5 2.5-2.5h4.402zm15.098 7h-18v-1h18v1zm-12.624-15.6c-1.643 1.229-2.035 3.45-.42 6.6-.755-.402-2.37-2.047-2.352-3.945.016-1.676 1.413-2.73 2.772-2.655z"/></svg>
                </div>
                <h4 className="user-resources-title">
                  <span>Add a Resource</span>
                </h4>
                <div className="user-resources-text">
                  <p>
                    <span>Share your educational tools, videos, webinars, workshops, and more</span>
                  </p>
                  <p>
                    <span>Resources are published to the Resource Hub, Activity Feeds and all your photo pages.</span>
                  </p>
                </div>
                <div className="user-resources-button-container">
                  <button className="user-resources-button">Add a Resource</button>
                </div>
                <div className="user-resources-text">
                  <p>
                    <span>Need ideas? <a href="#">View the Resource Hub</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'resume':
        return (
          <div className="user-resume-container">
            <div className="user-resume-inner-container">
              <div className="user-resume-inner">
                <div className="user-resume-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M21 1c-.438 1.438-1.563 2.562-3 3 1.437.438 2.562 1.563 3 3 .438-1.437 1.563-2.561 3-3-1.437-.438-2.562-1.562-3-3zm-19.001 2c-.292.957-1.042 1.708-1.999 2 .959.293 1.707 1.042 2.001 2 .292-.958 1.042-1.708 1.999-2-.957-.292-1.707-1.042-2.001-2zm18.5 16c-.365 1.196-1.303 2.134-2.499 2.5 1.199.366 2.134 1.303 2.501 2.5.365-1.197 1.303-2.134 2.499-2.5-1.196-.364-2.134-1.303-2.501-2.5zm-9.499-19c-.292.958-1.042 1.708-2 2 .959.293 1.708 1.042 2.002 2 .292-.958 1.042-1.708 1.998-2-.956-.292-1.706-1.042-2-2zm-8.001 18c-.435 1.436-1.563 2.561-2.999 3 1.439.439 2.564 1.564 3 3 .439-1.436 1.564-2.561 2.999-3-1.435-.437-2.56-1.564-3-3zm14.063-12h-10.054l-5.008 5.625 10 12.375 10-12.305-4.938-5.695zm-9.394 6l3.039 7.218-5.832-7.218h2.793zm7.579 0l-3.247 7.711-3.247-7.711h6.494zm-6.04-1l2.793-2.793 2.793 2.793h-5.586zm7.125 1h2.843l-5.899 7.259 3.056-7.259zm2.418-1h-2.543l-3-3h2.942l2.601 3zm-10.846-3h2.889l-3 3h-2.559l2.67-3z"/></svg>
                </div>
                <h4 className="user-resume-title">
                  <span>Add Resume</span>
                </h4>
                <p className="user-resume-text">Show you're available for hire. List your years of experience, client testimonials, and specialties.</p>
                <button className="user-resume-button">Add a Resume</button>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="user-image-gallery-container">
            {
              images.reverse().map((image) => <UserShowImageItem key={image.id} image={image} />)
            }
          </div>
        )
    }
  }

  render() {
    const navBar = this.state.nav;
    // debugger
    if (!Object.keys(this.props.users).includes(this.props.match.params.userId)) return <ErrorPage/>
    return (
      <div>
        <div className="block-space"></div>
        {this.userProfileInfo()}
        {this.userProfileOtherInfo(navBar)}
      </div>
    )
  }
}

export default UserShow;