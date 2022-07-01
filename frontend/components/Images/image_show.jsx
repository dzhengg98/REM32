import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../404/404_page';
import { formatDate } from '../../util/date_util';
import CommentsFormContainer from '../comments/comments_form_container';
import Footer from '../footer/footer';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchUsers().then(() => this.props.fetchImages().then(() => this.props.fetchImage()));
    this.props.fetchComments();
  }

  editable() {
    return this.props.image.uploaderId === this.props.currentUserId ? (
      <Link to={`/images/${this.props.image.id}/edit`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z"/></svg>
      </Link>
    ):(
      <div></div>
    )
  }

  userProfilePic() {
    return this.props.users[this.props.image.uploaderId]['profilepic'] ? (
      <Link to={`/users/${this.props.image.uploaderId}`}>
        <img className="circular" src={this.props.users[this.props.image.uploaderId]['profilepic']}/>
      </Link>
    ) : (
      <Link to={`/users/${this.props.image.uploaderId}`}>
        <img src={window.userIcon}/>
      </Link>
    )
  }

  render() {
    // debugger
    // const uploaderId = this.props.image.uploaderId

    if (!this.props.image) return <ErrorPage />
    // console.log(this.props.image.createdAt)
    // console.log(formatDate(this.props.image.createdAt))
    // console.log(this.props.image.uploaderId);
    // console.log(this.props.users)
    // console.log(this.props.users[this.props.image.uploaderId])
    // console.log(this.props.users[this.props.image.uploaderId]['username'])

    return (
      <div>
        <div className="image-show-container">
          <div className="block-space"></div>
          <div className="image-container">
            <div className="user-profile-arrow">
              <Link to="/">
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fillRule="nonzero"/></svg>
              </Link>
            </div>
            <img className="show-image" src={this.props.image.imageUrl}/>
          </div>

          <div className="outer-info-comment-container">
            <div className="inner-info-comment-container">
              <div className="image-info-container">
                <div className="icons">
                  <div className="svg-icon">
                    <div className="is">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"/></svg>
                    </div>
                  </div>
                  <div className="svg-icon">
                    <div className="is">
                      <svg width="36" height="36" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fillRule="nonzero"/></svg>
                    </div>
                  </div>
                  <div className="svg-icon">
                    <div className="is">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg>
                    </div>
                  </div>
                  <div className="svg-icon">
                    {this.editable()}
                  </div>
                </div>
                <div className="image-show-uploader-info-container">
                  {this.userProfilePic()}
                  <div className="image-show-information-container">
                  <h2 className="image-show-title">{this.props.image.title}</h2>
                  <p className="image-show-author-info-container">
                    <span className="image-show-author-info-text">by</span>
                    <Link to={`/users/${this.props.image.uploaderId}`}>
                      <span className="image-show-author-first-name">{this.props.users[this.props.image.uploaderId]['firstName']}</span>
                      <span className="image-show-author-last-name">{this.props.users[this.props.image.uploaderId]['lastName']}</span>
                    </Link>
                    <svg height="16" viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
                  </p>
                  </div>
                </div>
                <div className="image-uploaded-date-container">
                  <span className="image-show-uploaded-date-info-text">Uploaded:</span>
                  <span className="image-show-uploaded-date-info">{formatDate(this.props.image.createdAt)}</span>
                </div>
                <p className="image-show-description">{this.props.image.description}</p>
                <div className="image-show-popularity-container">
                  <div className="image-show-popularity-pulse">
                    <div className="pulse">Pulse</div> 
                    <h3 className="pulse-number">99</h3>
                  </div>
                  <div className="image-show-popularity-impressions">
                    <div className="impressions">Impression</div> 
                    <h3 className="impressions-number">99</h3>
                  </div>
                  <div className="image-show-popularity-popular">
                    <div className="popular">Popular</div> 
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z"/></svg>
                  </div>
                </div>
                <div className="image-show-like-counter-container">
                  <span className="image-show-like-counter-hover-effect">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"/></svg>
                    <span>0 people liked this</span>
                  </span>
                </div>
                <div className="image-show-category">
                  <p className="image-show-info-category-title">
                    <span>Category:</span>
                  </p>
                </div>
                <div className="image-show-galleries">
                  <div className="image-show-info-galleries-title">
                    <span>Featured in these Galleries</span>
                  </div>
                  <div className="image-show-info-galleries-show">
                    <div className="image-show-galleries-svg-container">
                      <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fillRule="nonzero"/></svg>
                      <p className="galleries-info-text"></p>
                      <button className="galleries-button">Add to Gallery</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-comment-container">
                <CommentsFormContainer image = {this.props.image} />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ImageShow;