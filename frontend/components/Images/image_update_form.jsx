import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorPage from '../404/404_page';

const ImageUpdateForm = props => {
  const { 
    errors, 
    clearImageErrors,
    fetchImage,
    editImage,
    deleteImage,
    history,
    imageId,
    image,
    currentUserId
  } = props;

  const [state, setState] = useState({
    title: "",
    description: "",
    imageUrl: "",
    id: "",
  })

  if (image && state.id !== image.id ) {
    setState({
      title: image.title,
      description: image.description,
      imageUrl: image.imageUrl,
      id: image.id,
    })
  }

  useEffect(() => {
    if (errors.length) {
    };
    fetchImage(imageId);
    return () => {
      clearImageErrors();
    }
  }, [])

  if (!props.image) return <ErrorPage/>

  const handleSubmit = (e) => {
    e.preventDefault();
    editImage(state).then(() => {history.push(`/images/${image.id}`);})
  }

  const update = (field) => {
    return e => { setState({ ...state, [field]: e.target.value }) };
  }

  const deleted = () => {
    deleteImage(imageId).then(() => {history.push(`/`);})
  }

  const hasAccess = () => {
    return image.uploaderId === currentUserId ? (
      <div className="image-update-container">
        <div className="block-space"></div>
        <div className="photo-manager-text"><span>Photo manager</span></div>
        <div className="image-update-bar">
          <div className="image-update-bar-all-photos">
            <svg 
              width="24" 
              height="24" 
              xmlns="http://www.w3.org/2000/svg" 
              fillRule="evenodd" 
              clipRule="evenodd"
            >
              <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
            </svg>
            <span>All photos</span>
          </div>
          <div className="image-update-bar-licensing">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
            >
              <path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"/>
            </svg>
            <span>Licensing</span>
          </div>
        </div>
        <div className="inner-image-update-container">
          <div className="image-update-preview">
            <div className="image-update-amount">1 photo</div>
            <div className="image-update-status">Public</div>
            <div className="image-update-status-description">Accessible everywhere, including on Profile</div>
            <img 
              className="image-update-preview-image" 
              src={state.imageUrl}
              alt="image preview"
              draggable="false"
            />
          </div>

          <div className="image-update-info-container">
            <div className="image-update-main-title-container">
              <h2 className="image-update-main-title">Edit 1 photo</h2>
            </div>
            <div className="image-update-title-container">
              <label className="update-image-title" htmlFor="image-update-title">
                <span>Title</span>
              </label>
              <input
                id="image-update-title"
                className="image-update-title-field"
                type="text"
                value={state.title}
                placeholder="Title"
                onChange={update('title')}
                required
              />
            </div>
            <div className="image-update-description-container">
              <label className="update-image-description" htmlFor="image-update-description">
                <span>Description</span>
              </label>
              <textarea
                id="image-update-description"
                className="image-update-description-field"
                type="text"
                value={state.description}
                placeholder="e.g. Low angle view of young African man surfing in the ocean with a clear blue sky"
                onChange={update('description')}
                required
              />
            </div>
            <div>
              {(errors.map((error, i) => (
                <p key={i} className="image-update-errors">{error}</p>
              )))}
            </div>
            <div className="update-image-buttons-container">
              <div className="delete-image-button-container">
                <button className="delete-image-button" onClick={deleted}> Delete photo </button>
              </div>
              <div className="update-image-button-container">
                <button className="update-image-button" onClick={handleSubmit}> Save changes </button>
              </div>
            </div>
          </div>          
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    )
  }

  return (
    <div>
      {hasAccess()}
    </div>
  )
}

export default ImageUpdateForm;