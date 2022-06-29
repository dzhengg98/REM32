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
      // coverpic: '',
      // coverpicUrl: '',
    }
    this.handleProfilePicFile = this.handleProfilePicFile.bind(this);
    this.handleProfilePicSubmit = this.handleProfilePicSubmit.bind(this);
    // this.handleCoverPicFile = this.handleCoverPicFile.bind(this);
    // this.handleCoverPicSubmit = this.handleCoverPicSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchImages();
    this.props.fetchUsers();

    this.props.user ? this.setState({id: this.props.user.id}) : this.setState({id: Number(this.props.match.params.userId)})
    // this.props.fetchUser();
    // debugger
  }

  handleProfilePicSubmit() {
    const formData = new FormData();

    if (this.state.profilepic) {
      formData.append('user[profilepic]', this.state.profilepic);
      formData.append('user[id]', this.state.id);
    }

    // console.log(this)
    this.props.updateUserProfilePic(formData, this.props.user.id);
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

  // handleCoverPicSubmit() {
  //   const formData = new FormData();
  //   if (this.state.coverpic) {
  //     formData.append('user[coverpic]', this.state.coverpic);
  //     formData.append('user[id]', this.state.id);
  //   }
  //   this.props.updateUserProfilePic(formData, this.props.user.id);
  // }

  // handleCoverPicFile(e) {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   const fileReader = new FileReader();

  //   fileReader.onloadend = () => {
  //     this.setState({
  //       coverpic: file,
  //       coverpicUrl: fileReader.result,
  //     }, () => this.handleCoverPicSubmit());
  //   }

  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }

  userProfileLocation() {
    return (this.props.user.city && this.props.user.country) ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-container') : ('other-user-profile-location-container')}`}>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-icon') : ('other-user-profile-location-icon')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
        </div>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city") : ("other-user-profile-location-city")}`}>{this.props.user.city}, </div>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-state") : ("other-user-profile-location-state")}`}>{this.props.user.country}</div>
      </div>
    ) : (
      (this.props.user.city) ? (
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
          </div>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city") : ("other-user-profile-location-city")}`}>{this.props.user.city}</div>
        </div>
      ) : (
        (this.props.user.country) ? (
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
            <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            </div>
            <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-state") : ("other-user-profile-location-state")}`}>{this.props.user.country}</div>
          </div>
        ) : (
          <div></div>
        )
      )
    )
  }

  userProfileAbout() {
    return this.props.user.about ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-about") : ("other-user-about")}`}>{this.props.user.about}</div>
    ) : (
      <div></div>
    )
  }

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

  userProfilePic() {
    return this.props.user.profilepic ? (
      <img className="circular" src={this.props.user.profilepic}/>
    ) : (
      <img src={window.userIcon}/>
    )
  }

  userProfileInfo() {
    // debugger
    return this.props.currentUser.id === Number(this.props.match.params.userId) ? (
      <div className="user-profile-information">
        <div className="user-profile-arrow">
          <Link to="/">
            <svg height="30" width="30" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/></svg>
          </Link>
        </div>
        {/* <div className="user-cover-picture-main-container">
          {this.props.user.coverpic ? 
            (
              <img className="user-cover-picture-image" src={this.props.user.coverpic}/>
            ) : (
              <div></div>
            )
          }
          <div className="user-cover-picture-input-container">
            <label htmlFor="user-cover-picture-input" className="user-cover-picture-input-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>
            </label>
            <input type="file" id="user-cover-picture-input" onInput={this.handleCoverPicFile}/>
          </div>
        </div> */}
        <div className="user-profile-main-container">
          <div className="user-profile-picture-image">
            {this.userProfilePic()}
            <div className="user-profile-picture-input-container">
              <label htmlFor="user-profile-picture-input" className="user-profile-picture-input-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"/></svg>
              </label>
              <input type="file" id="user-profile-picture-input" onInput={this.handleProfilePicFile}/>
            </div>
          </div>
        </div>
        <div className="user-profile-main-icons">
          <div className="user-profile-edit-icon-container">
            <div className="user-profile-edit-icon">
              <Link to={`/users/${this.props.currentUser.id}/edit`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
              </Link>
            </div>
          </div>
          <div className="user-profile-share-icon-container">
            <div className="user-profile-share-icon">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
            </div>
          </div>
          <div className="user-profile-portfolio-icon-container">
            <div className="user-profile-portfolio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7v15h24v-15h-24zm22 13h-20v-6h6v-2h-6v-3h20v3h-6v2h6v6zm-13-15.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v2h2v-1.5zm5 6.5h-4v4h4v-4z"/></svg>
            </div>
          </div>
          <div className="user-profile-more-icon-container">
            <div className="user-profile-more-icon">
              <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
              {/* <div className="user-profile-manage-photos-icon">photos</div>
              <div className="user-profile-settings-icon">cog</div> */}
            </div>
          </div>
        </div>
        <div className="user-profile-full-name">
          <span className="user-profile-first-name">{this.props.user.firstName}</span>
          <span className="user-profile-last-name">{this.props.user.lastName}</span>
        </div>
        {this.userProfileLocation()}
        {this.userProfileAbout()}
        <div className="user-profile-likes-impressions-container">
          <div className="user-profile-likes">
            <span className="user-profile-likes-number">0</span>
            <span>Photo Likes</span>
          </div>
          <div className="user-profile-impressions">
            <span className="user-profile-impressions-number">0</span>
            <span>Photo impressions</span>
          </div>
          <div className="user-profile-impressions-info">
            <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fillRule="nonzero"/></svg>
          </div>
        </div>
        <div className="user-profile-links-container">
          {this.userTwitterLink()}
          {this.userInstagramLink()}
          {this.userFacebookLink()}
          {this.userWebsiteLink()}
        </div>
        <div className="user-profile-nav-bar-container">
          <div className="user-profile-nav-bar-link-main">
            <span>Photos</span> {this.props.user.images.length}
          </div>
          <div className="user-profile-nav-bar-link">
            <span>Galleries</span>
          </div>
          <div className="user-profile-nav-bar-link">
            <span>Groups</span>
          </div>
          <div className="user-profile-nav-bar-link">
            <span>Licensing</span>
          </div>
          <div className="user-profile-nav-bar-link">
            <span>Resources</span>
          </div>
          <div className="user-profile-nav-bar-link">
            <span>Resume</span>
          </div>
        </div>
      </div>
    ) : (
      <div className="other-user-profile-information">
        <div className="other-user-profile-space"></div>
        <div className="other-user-profile-main-container">
          <div className="other-user-profile-picture-image">
            {this.userProfilePic()}
          </div>
        </div>
        <div className="other-user-profile-picture-icon">
          <div className="other-user-profile-picture-icon-airplane">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
          </div>
          <div className="other-user-profile-picture-icon-share">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
          </div>
          <div className="other-user-profile-picture-icon-report">
            <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
          </div>
        </div>
        <div className="other-user-profile-full-name">
          <span className="other-user-profile-first-name">{this.props.user.firstName}</span>
          <span className="other-user-profile-last-name">{this.props.user.lastName}</span>
        </div>
        {this.userProfileLocation()}
        <div className="other-user-profile-follow-button-container">
          <button className="other-user-profile-follow-button">
            Follow
          </button>
        </div>
        {this.userProfileAbout()}
        <div className="other-user-profile-likes-impressions-container">
          <div className="other-user-profile-followers">
            <span className="other-user-profile-followers-number">0</span>
            <span className="other-user-profile-followers-word">Followers</span>
          </div>
          <div className="other-user-profile-followings">
            <span className="other-user-profile-followings-number">0</span>
            <span className="other-user-profile-followings-word">Following</span>
          </div>
          <div className="other-user-profile-likes">
            <span className="other-user-profile-likes-number">0</span>
            <span className="other-user-profile-likes-word">Photo Likes</span>
          </div>
          <div className="other-user-profile-impressions">
            <span className="other-user-profile-impressions-number">0</span>
            <span className="other-user-profile-impressions-word">Photo impressions</span>
          </div>
          <div className="other-user-profile-impressions-info">
            <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fillRule="nonzero"/></svg>
          </div>
        </div>
        <div className="other-user-profile-links-container">
          {this.userTwitterLink()}
          {this.userInstagramLink()}
          {this.userFacebookLink()}
          {this.userWebsiteLink()}
        </div>
        <div className="other-user-profile-nav-bar-container">
          <div className="other-user-profile-nav-bar-link-main">Photos {this.props.user.images.length}</div>
          <div className="other-user-profile-nav-bar-link">Galleries</div>
          <div className="other-user-profile-nav-bar-link">Groups</div>
          <div className="other-user-profile-nav-bar-link">Licensing</div>
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
        {this.userProfileInfo()}
        <div className="user-image-gallery-container">
          {
            images.reverse().map((image) => <UserShowImageItem key={image.id} image={image} />)
          }
        </div>
      </div>
    )
  }
}

export default UserShow;