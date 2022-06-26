import React from 'react';

class ImageCreateForm extends React.Component {
  constructor(props) {
    //debugger
    super(props);
    //debugger
    this.state = {
      title: "",
      description: "",
      imageFile: null,
      imageUrl: null,
    }
    //debugger
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update = (field) => {
    //debugger
    return e => {this.setState({[field]: e.target.value})}
  }

  handleFile(e) {
    //debugger
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];

    fileReader.onloadend = () => {
      //debugger
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result,
      })
    }

    if (file) {
      //debugger
      fileReader.readAsDataURL(file);
    } else {
      //debugger
      this.setState({
        imageFile: null,
        imageUrl: null,
      })
      //debugger
    }
  }

  handleImageSubmit(e) {
    //debugger
    e.preventDefault();
    const formData = new FormData();
    if (this.state.imageFile) {
      //debugger
      formData.append('image[title]', this.state.title);
      formData.append('image[description]', this.state.description);
      formData.append('image[image]', this.state.imageFile);
      //debugger
    }
    //debugger
    this.props.createImage(formData).then(() => {
      //debugger
      this.props.history.goBack();
      //debugger
    })
    //debugger
  }

  preview() {
    return this.state.imageUrl ? (
      <img 
        className="image-preview-img"
        src={this.state.imageUrl}
      />
    ) : (
      null
    )
  }

  uploadStage() {
    return this.state.imageUrl ? (
      <div className="image-update-container">
        <div className="block-space"></div>
        <div className="upload-text"><span>Upload</span></div>
        <div className="inner-image-update-container">
          <div className="image-preview">
            {this.preview()}
          </div>
          <div className="info-container">
            <div className="upload-title-container">
              <h2 className="upload-title">1 photo selected</h2>
            </div>
            <div className="image-title-container">
              <label className="upload-image-title" htmlFor='image-upload-title'>
                <span>Title</span>
              </label>
              <input
                id="image-upload-title"
                className="image-title-field"
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.update('title')}
                required
                />
            </div>
            <div className="image-description-container">
              <label className="upload-image-description" htmlFor="image-upload-description">
                <span>Description</span>
              </label>
              <textarea
                id="image-upload-description"
                className="image-description-field"
                type="text"
                value={this.state.description}
                placeholder="e.g. Low angle view of young African man surfing in the ocean with a clear blue sky"
                onChange={this.update('description')}
                required
                />
            </div>
            <div>
              {this.props.errors.map((error, i) => (
                <p key={i} className="image-create-errors">{error}</p>
              ))}
            </div>
            <div className="create-image-button-container">
              <button
                className="create-image-button"
                onClick={this.handleImageSubmit}
                > Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="outer-image-form-container">
        <div className="block-space"></div>
        <div className="upload-text"><span>Upload</span></div>
        <div className="inner-image-form-container">
          <div className="image-form-top-spacer">
            <div className="upload-image-wrapper">
              <div className="upload-image-display">

                <div className="home-upload-image-main">
                  <img className="home-upload-image-icon" src={uploadIcon} />
                  <div className="home-upload-main-text">Upload photos</div>
                  <label className="image-photo-button" htmlFor="image-file-upload">
                    Select Photos
                  </label>
                  <input 
                    id="image-file-upload"
                    type="file"
                    onChange={this.handleFile}
                  />
                  <div className="home-upload-text">Or drag and drop photos anywhere on this page</div>
                </div>

                <div className="home-upload-image-requirements">

                  <div className="photo-requirements-container">
                    <h4 className="photo-requirements-title">Photo requirements</h4>
                    <ul className="photo-requirements-list">
                      <li className="photo-requirements-item">.jpg only</li>
                      <li className="photo-requirements-item">
                        Max. photo dimensions are 200MP/megapixels 
                        <span className="more-info-icon">
                          <img
                            className="photo-requirements-icon" 
                            src={infoIcon}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="licensing-requirements-container">
                    <h4 className="licensing-requirements-title">Licensing requirements</h4>
                    <ul className="licensing-requirements-list">
                      <li className="photo-requirements-item">
                        Min. photo dimensions are 3MP/megapixels 
                        <span className="more-info-icon">
                          <img
                            className="photo-requirements-icon" 
                            src={infoIcon}
                          />
                        </span>
                      </li>
                      <li className="photo-requirements-item">No watermarks, logos, or borders</li>
                      <li className="photo-requirements-item">No NSFW content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.uploadStage()}
      </div>
    )
  }

}

export default ImageCreateForm;