export const fetchlikes = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/likes',
    })
  )
};

export const fetchlike = (likeId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/likes/${likeId}`,
    })
  )
};

export const createlike = (like) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/likes',
      data: { like }
    })
  )
};

export const deletelike = (likeId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/likes/${likeId}`,
    })
  )
};