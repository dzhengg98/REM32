export const fetchImages = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/images',
    })
  )
};

export const fetchImage = (imageId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/images/${imageId}`,
    })
  )
};

export const createImage = (image) => {
  //debugger
  return (
    $.ajax({
      method: 'POST',
      url: `/api/images`,
      data: image,
      contentType: false,
      processData: false,
    })
  )
  //debugger
};

export const editImage = (image) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/images/${image.id}`,
      data: { image },
    })
  )
};

export const deleteImage = (imageId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/images/${imageId}`,
    })
  )
};