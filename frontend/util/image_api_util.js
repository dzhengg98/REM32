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
  //debugger
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/images/${image.id}`,
      data: { image },
    })
  )
  //debugger
};

export const deleteImage = (imageId) => {
  //debugger
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/images/${imageId}`,
    })
  )
  //debugger
};