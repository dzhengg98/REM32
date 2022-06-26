json.partial! "api/users/user", user: @user

if (user.profile_picture.attached?)
  json.imageUrl url_for(user.profile_picture)
end