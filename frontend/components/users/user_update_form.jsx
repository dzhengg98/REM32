import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      city: "",
      country: "",
      about: "",
      website: "",
      instagram: "",
      facebook: "",
      twitter: "",
      id: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (user && this.state.id.length === 0) {
      this.setState({
        first_name: user.firstName,
        last_name: user.lastName,
        city: user.city,
        country: user.country,
        about: user.about,
        website: user.website,
        instagram: user.instagram,
        facebook: user.facebook,
        twitter: user.twitter,
        id: user.id
      })
    }
  }

  handleSubmit(e) {
    const { updateUser, history, currentUserId } = this.props;
    e.preventDefault();
    updateUser(this.state).then(() => {history.push(`/users/${currentUserId}`)})
  }

  update(field) {
    return e => {this.setState({[field]: e.target.value})}
  }

  hasAccess() {
    const { userId, currentUserId } = this.props;
    const {first_name, last_name, city, country, about, website, instagram, facebook, twitter } = this.state;
    return Number(userId) === currentUserId ? (
      <div className="user-update-container">
        <div className="block-space"></div>
        <div className="user-update-profile-title-container">
          <div className="user-update-profile-title-arrow-icon">
            <Link to={`/users/${currentUserId}`} >
              <svg height="24" weight="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/></svg>
            </Link>
          </div>
          <div className="user-update-profile-title">Edit Profile</div>
          <div className="empty"></div>
        </div>
        <div className="user-update-profile-main-outer-container">
          <div className="user-update-profile-main-container">
            <div className="user-update-form-container">
              <div className="user-update-full-name-container">
                <div className="user-update-first-name-container">
                  <label className="update-user-first-name" htmlFor="user-update-first-name">
                    <span>First Name</span>
                  </label>
                  <input
                    id="user-update-first-name"
                    className="user-update-first-name-field"
                    type="text"
                    value={first_name}
                    placeholder="First Name"
                    onChange={this.update('first_name')}
                  />
                </div>
                <div className="user-update-last-name-container">
                  <label className="update-user-last-name" htmlFor="user-update-last-name">
                    <span>Last Name</span>
                  </label>
                  <input
                    id="user-update-last-name"
                    className="user-update-last-name-field"
                    type="text"
                    value={last_name}
                    placeholder="Last Name"
                    onChange={this.update('last_name')}
                  />
                </div>
              </div>
              <div className="user-update-location-container">
                <div className="user-update-city-container">
                  <label className="update-user-city" htmlFor="user-update-city">
                    <span>City</span>
                  </label>
                  <input
                    id="user-update-city"
                    className="user-update-city-field"
                    type="text"
                    value={city}
                    placeholder="City"
                    onChange={this.update('city')}
                  />
                </div>
                <div className="user-update-country-container">
                  <label className="update-user-country" htmlFor="user-update-country">
                    <span>Country</span>
                  </label>
                  <input
                    id="user-update-country"
                    className="user-update-country-field"
                    type="text"
                    value={country}
                    placeholder="country"
                    onChange={this.update('country')}
                  />
                </div>
              </div>
              <div className="user-update-about-main-container">
                <div className="user-update-about-container">
                  <label className="update-user-about" htmlFor='user-update-about'>
                    <span>About</span>
                  </label>
                  <textarea
                    id="user-update-about"
                    className="user-update-about-field"
                    type="text"
                    value={about}
                    placeholder="Write a about page"
                    onChange={this.update('about')}
                  />
                </div>
                <div></div>
              </div>
              <div className="user-update-social-media-1-container">
                <div className="user-update-website-container">
                  <label className="update-user-website" htmlFor="user-update-website">
                    <span>Website</span>
                  </label>
                  <input
                    id="user-update-website"
                    className="user-update-website-field"
                    type="text"
                    value={website}
                    placeholder="website"
                    onChange={this.update('website')}
                  />
                </div>
                <div className="user-update-instagram-container">
                  <label className="update-user-instagram" htmlFor="user-update-instagram">
                    <span>Instagram</span>
                  </label>
                  <input
                    id="user-update-instagram"
                    className="user-update-instagram-field"
                    type="text"
                    value={instagram}
                    placeholder="instagram"
                    onChange={this.update('instagram')}
                  />
                </div>
              </div>
              <div className="user-update-social-media-2-container">
                <div className="user-update-facebook-container">
                  <label className="update-user-facebook" htmlFor="user-update-facebook">
                    <span>Facebook</span>
                  </label>
                  <input
                    id="user-update-facebook"
                    className="user-update-facebook-field"
                    type="text"
                    value={facebook}
                    placeholder="facebook"
                    onChange={this.update('facebook')}
                  />
                </div>
                <div className="user-update-twitter-container">
                  <label className="update-user-twitter" htmlFor="user-update-twitter">
                    <span>Twitter</span>
                  </label>
                  <input
                    id="user-update-twitter"
                    className="user-update-twitter-field"
                    type="text"
                    value={twitter}
                    placeholder="twitter"
                    onChange={this.update('twitter')}
                  />
                </div>
              </div>
              <div className="user-update-buttons-container">
                <div className="user-update-cancel-button-container">
                  <Link to={`/users/${currentUserId}`}>
                    <button className="user-update-cancel-button">Cancel</button>
                  </Link>
                </div>
                <button className="user-update-save-changes-button" onClick={this.handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    )
  }

  render() {
    return (
      <div className="user-update-main-container">
        {this.hasAccess()}
      </div>
    )
  }
}

export default UserUpdateForm;