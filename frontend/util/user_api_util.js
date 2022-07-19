export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
}

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
  })
}

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user },
  })
}

export const updateUserProfilePic = (image, userId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: image,
    contentType: false,
    processData: false,
  })
}