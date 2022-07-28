import React, { useState, useEffect } from 'react';

const ImageCreateForm = (props) => {

  const { createImage, history, errors, clearImageErrors } = props;

  const [state, setState] = useState({
    title: "",
    description: "",
    imageFile: null,
    imageUrl: null,
  })

  useEffect(() => {
    if (errors.length) {
    };
    return () => {
      clearImageErrors();
    }
  }, [])

  const update = (field) => {
    return e => { setState({ ...state, [field]: e.target.value })}
  }

  const handleFile = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];

    fileReader.onloadend = () => {
      setState(prevState => {
        return {...prevState, imageFile: file}
      })
      setState( prevState => {
        return {...prevState, imageUrl: fileReader.result}
      })
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      setState({...state}, {imageFile: null})
      setState({...state}, {imageUrl: null})
    }
  }

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (state.imageFile) {
      formData.append('image[title]', state.title);
      formData.append('image[description]', state.description);
      formData.append('image[image]', state.imageFile);
    }
    createImage(formData).then(() => {history.push(`/`);})
  }

  const preview = () => {
    return state.imageUrl ? (
      <img className="image-preview-img" src={state.imageUrl} alt="Image Preview" draggable="false" />
    ) : (
      null
    )
  }

  const uploadStage = () => {
    return state.imageUrl ? (
      <div className="image-create-container">
        <div className="block-space"></div>
        <div className="upload-text"><span>Upload</span></div>
        <div className="inner-image-create-container">
          <div className="image-preview">
            {preview()}
          </div>
          <div className="info-container">
            <div className="upload-title-container">
              <h2 className="upload-title">1 photo selected</h2>
            </div>
            <div className="image-title-container">
              <label className="upload-image-title" htmlFor="image-upload-title">
                <span>Title</span>
              </label>
              <input
                id="image-upload-title"
                className="image-title-field"
                type="text"
                value={state.title || ""}
                placeholder="Title"
                onChange={update('title')}
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
                value={state.description || ""}
                placeholder="e.g. Low angle view of young African man surfing in the ocean with a clear blue sky"
                onChange={update('description')}
                required
              />
            </div>
            <div>
              {errors.map((error, i) => (
                <p key={i} className="image-create-errors">{error}</p>
              ))}
            </div>
            <div className="create-image-button-container">
              <button
                className="create-image-button"
                onClick={handleImageSubmit}
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
                  <img className="home-upload-image-icon" src={uploadIcon} draggable="false" alt="upload icon" />
                  <div className="home-upload-main-text">Upload photos</div>
                  <label className="image-photo-button" htmlFor="image-file-upload">
                    Select Photos
                  </label>
                  <input 
                    id="image-file-upload"
                    type="file"
                    onChange={handleFile}
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
                            draggable="false"
                            alt="photo requirements icon"
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
                            draggable="false"
                            alt="photo requirements icon"
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

  return (
    <div>
      {uploadStage()}
    </div>
  )
}

export default ImageCreateForm;