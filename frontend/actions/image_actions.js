import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

const receiveImages = (images) => {
  return ({
    type: RECEIVE_IMAGES,
    images,
  })
};

const receiveImage = (image) => {
  return ({
    type: RECEIVE_IMAGE,
    image,
  })
};

const removeImage = (imageId) => {
  return ({
    type: REMOVE_IMAGE,
    imageId,
  })
};

export const fetchImages = () => dispatch => {
  return (
    ImageAPIUtil.fetchImages()
      .then(images => dispatch(receiveImages(images)))
  )
};

export const fetchImage = (imageId) => dispatch => {
  return (
    ImageAPIUtil.fetchImage(imageId)
      .then(image => dispatch(receiveImage(image)))
  )
};

export const createImage = (image) => dispatch => {
  return (
    ImageAPIUtil.createImage(image)
      .then(image => dispatch(receiveImage(image)))
  )
};

export const editImage = (image) => dispatch => {
  return (
    ImageAPIUtil.editImage(image)
      .then(image => dispatch(receiveImage(image)))
  )
};

export const deleteImage = (imageId) => dispatch => {
  return (
    ImageAPIUtil.deleteImage(imageId)
      .then(() => dispatch(removeImage(imageId)))
  )
};