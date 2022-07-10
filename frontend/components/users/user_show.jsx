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
    this.props.user ? this.setState({id: this.props.user.id}) : this.setState({id: Number(this.props.match.params.userId)});
    this.props.fetchLikes();
    window.scrollTo(0, 0);
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z"/></svg>          </div>
        </div>
        <div className="user-profile-icon-container">
          <div className="user-profile-share-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg>          </div>
        </div>
        <div className="user-profile-icon-container">
          <div className="user-profile-portfolio-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 6h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5zm12 1v6l-1.5-1.5-1.5 1.5v-6h-18v15h24v-15h-3z"/></svg>          </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
          </div>
        </div>
        <div className="other-user-profile-icon-container">
          <div className="other-user-profile-share-icon">
            <a href="#" target="_blank" rel="noopener noreferrer"></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg>
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
        this.props.user.lastName? (
        <div className="user-profile-full-name-container">
          <h1 className="user-profile-full-name">
          {this.props.user.lastName}
          </h1>
        </div>
      ) : (
          <div className="user-profile-full-name-container">
            <h1 className="user-profile-full-name">
              {this.props.user.username}
            </h1>
          </div>
        )
      )
    )
  }

  // PROFILE LOCATION

  userProfileLocation() {
    return (this.props.user.city && this.props.user.country) ? (
      <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-container') : ('other-user-profile-location-container')}`}>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ('user-profile-location-icon') : ('other-user-profile-location-icon')}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-.461 15.795c-.228.013-.453.034-.683.034-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12 0 .23-.021.455-.034.682-.582-.652-1.266-1.209-2.031-1.643-.064-.679-.182-1.293-.306-1.671-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.056.166.047.335.009.504-.725-.215-1.489-.334-2.282-.334-2.885 0-5.69 1.602-7.103 4.328-.126.058-.25.121-.381.161-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.105-.055.685-.023.595-.295-.1-.277.051-.195.181-.253-.02.008.245-.454.359-.452-.103-.088-.395.111-.51.102-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.611 1.686 3.809 2.804 6.265 3.037.434.764.989 1.446 1.641 2.027zm3.007-17.337c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm-5.299-1.089c-.084.085.003.14.089.103.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.089.105zm.475.344c.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.207-.299-.36.362-.36.362l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171zm13.134 12.116c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6zm-3.5-2.5l-6 2.25 3 .75.754 3 2.246-6z"/></svg>        </div>
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city-country") : ("other-user-profile-location-city-country")}`}>
          <p>{this.props.user.city.concat(',')} {this.props.user.country}</p>
        </div>
      </div>
    ) : (
      (this.props.user.city) ? (
        <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-.461 15.795c-.228.013-.453.034-.683.034-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12 0 .23-.021.455-.034.682-.582-.652-1.266-1.209-2.031-1.643-.064-.679-.182-1.293-.306-1.671-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.056.166.047.335.009.504-.725-.215-1.489-.334-2.282-.334-2.885 0-5.69 1.602-7.103 4.328-.126.058-.25.121-.381.161-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.105-.055.685-.023.595-.295-.1-.277.051-.195.181-.253-.02.008.245-.454.359-.452-.103-.088-.395.111-.51.102-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.611 1.686 3.809 2.804 6.265 3.037.434.764.989 1.446 1.641 2.027zm3.007-17.337c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm-5.299-1.089c-.084.085.003.14.089.103.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.089.105zm.475.344c.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.207-.299-.36.362-.36.362l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171zm13.134 12.116c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6zm-3.5-2.5l-6 2.25 3 .75.754 3 2.246-6z"/></svg>
          </div>
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-city") : ("other-user-profile-location-city")}`}>
            <p>{this.props.user.city}</p>
          </div>
        </div>
      ) : (
        (this.props.user.country) ? (
          <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-container") : ("other-user-profile-location-container")}`}>
            <div className={`${this.props.currentUser.id === this.props.user.id ? ("user-profile-location-icon") : ("other-user-profile-location-icon")}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-.461 15.795c-.228.013-.453.034-.683.034-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12 0 .23-.021.455-.034.682-.582-.652-1.266-1.209-2.031-1.643-.064-.679-.182-1.293-.306-1.671-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.056.166.047.335.009.504-.725-.215-1.489-.334-2.282-.334-2.885 0-5.69 1.602-7.103 4.328-.126.058-.25.121-.381.161-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.105-.055.685-.023.595-.295-.1-.277.051-.195.181-.253-.02.008.245-.454.359-.452-.103-.088-.395.111-.51.102-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.611 1.686 3.809 2.804 6.265 3.037.434.764.989 1.446 1.641 2.027zm3.007-17.337c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm-5.299-1.089c-.084.085.003.14.089.103.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.089.105zm.475.344c.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.207-.299-.36.362-.36.362l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171zm13.134 12.116c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6zm-3.5-2.5l-6 2.25 3 .75.754 3 2.246-6z"/></svg>
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
    let a = []
    let b = []
    this.props.images.filter(image => image.uploaderId === this.props.user.id).forEach(image => a.push(image.id));
    a.forEach(n => (b.push(this.props.likes.filter(like => like.imageId === n))));

    return this.props.currentUser.id === this.props.user.id ? (
      <div className="user-profile-likes-impressions-container">
        <div className="user-profile-likes">
          <p><span className="user-profile-likes-number">{b.length} Photo Likes</span></p>
        </div>
        <div className="user-profile-impressions">
          <p><span className="user-profile-impressions-number">{a.length*b.length} Photo Impressions</span></p>
          <div className="user-profile-impressions-info">
            {/* <div>Info</div> */}
            <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fillRule="nonzero"/></svg>          </div>
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
          <p><span className="other-user-profile-likes-number">{b.length} Photo Likes</span></p>
        </div>
        <div className="other-user-profile-impressions">
          <p><span className="other-user-profile-impressions-number">{a.length*b.length+12} Photo Impressions</span></p>
          <div className="other-user-profile-impressions-info">
            {/* <div>Info</div> */}
            <svg width="16" height="16" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fillRule="nonzero"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
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
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"/></svg>
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
        {
          this.state.nav === "" || this.state.nav === "photos" ? (
          <button className='user-profile-nav-bar-link-1-highlighted' onClick={() => this.changeNavToPhotos()}>
            <p>
              <span>Photos <span>{this.props.user.images.length}</span></span>
            </p>
          </button> 
          ) : (
          <button className='user-profile-nav-bar-link-1' onClick={() => this.changeNavToPhotos()}>
            <p>
              <span>Photos <span>{this.props.user.images.length}</span></span>
            </p>
          </button> 
          )
        }
        {
          this.state.nav === "galleries" ? (
          <button className="user-profile-nav-bar-link-2-highlighted" onClick={() => this.changeNavToGalleries()}>
            <p>
              <span>Galleries</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-2" onClick={() => this.changeNavToGalleries()}>
            <p>
              <span>Galleries</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "groups" ? (
          <button className="user-profile-nav-bar-link-3-highlighted" onClick={() => this.changeNavToGroups()}>
            <p>
              <span>Groups</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-3" onClick={() => this.changeNavToGroups()}>
            <p>
              <span>Groups</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "licensing" ? (
          <button className="user-profile-nav-bar-link-4-highlighted" onClick={() => this.changeNavToLicensing()}>
            <p>
              <span>Licensing</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-4" onClick={() => this.changeNavToLicensing()}>
            <p>
              <span>Licensing</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "resources" ? (
          <button className="user-profile-nav-bar-link-5-highlighted" onClick={() => this.changeNavToResources()}>
            <p>
              <span>Resources</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-5" onClick={() => this.changeNavToResources()}>
            <p>
              <span>Resources</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "resume" ? (
          <button className="user-profile-nav-bar-link-6-highlighted" onClick={() => this.changeNavToResume()}>
            <p>
              <span>Resume</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-6" onClick={() => this.changeNavToResume()}>
            <p>
              <span>Resume</span>
            </p>
          </button>
          )
        }
      </div>
    ) : (
      <div className="other-user-profile-nav-bar-container">
        {
          this.state.nav === "" || this.state.nav === "photos" ? (
          <button className="user-profile-nav-bar-link-1-highlighted" onClick={() => this.changeNavToPhotos()}>
            <p>
              <span>Photos <span>{this.props.user.images.length}</span></span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-1" onClick={() => this.changeNavToPhotos()}>
            <p>
              <span>Photos <span>{this.props.user.images.length}</span></span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "galleries" ? (
          <button className="user-profile-nav-bar-link-2-highlighted" onClick={() => this.changeNavToGalleries()}>
            <p>
              <span>Galleries</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-2" onClick={() => this.changeNavToGalleries()}>
            <p>
              <span>Galleries</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "groups" ? (
          <button className="user-profile-nav-bar-link-3-highlighted" onClick={() => this.changeNavToGroups()}>
            <p>
              <span>Groups</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-3" onClick={() => this.changeNavToGroups()}>
            <p>
              <span>Groups</span>
            </p>
          </button>
          )
        }
        {
          this.state.nav === "licensing" ? (
          <button className="user-profile-nav-bar-link-6-highlighted" onClick={() => this.changeNavToLicensing()}>
            <p>
              <span>Licensing</span>
            </p>
          </button>
          ) : (
          <button className="user-profile-nav-bar-link-6" onClick={() => this.changeNavToLicensing()}>
            <p>
              <span>Licensing</span>
            </p>
          </button>
          )
        }
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
                  <svg height="48" width="48" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fillRule="nonzero"/></svg>
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
                  <Link to='/'>
                    <button className="user-galleries-button">Create a new Gallery</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-galleries-container">
              <div className="user-galleries-inner-container">
                <div className="user-galleries-svg-container">
                <svg height="48" width="48" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fillRule="nonzero"/></svg>
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
                  <Link to='/'>
                    <button className="user-groups-button">Discover Groups</button>
                  </Link>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3 16l-3-10 7.104 4 4.896-8 4.896 8 7.104-4-3 10h-18zm0 2v4h18v-4h-18z"/></svg>
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
                  <Link to='/images/new'>
                    <button className="user-licensing-upload-button">Upload Photos</button>
                  </Link>
                </div>
                <div className="user-licensing-choose-button-container">
                  <Link to='/'>
                    <button className="user-licensing-choose-button">Choose from Photo Manager</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-licensing-container">
              <div className="user-licensing-inner-container">
                <div className="user-licensing-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3 16l-3-10 7.104 4 4.896-8 4.896 8 7.104-4-3 10h-18zm0 2v4h18v-4h-18z"/></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>                </div>
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
                  <Link to='/'>
                    <button className="user-resources-button">Add a Resource</button>
                  </Link>
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
                <Link to='/'>
                  <button className="user-resume-button">Add a Resume</button>
                </Link>
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
    debugger
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