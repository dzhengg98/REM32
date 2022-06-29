json.extract! user, :id, :username, :first_name, :last_name, :city, :country, :about, :website, :instagram, :facebook, :twitter

if user.profile_pic.attached?
  json.profile_pic url_for(user.profile_pic)
end

if user.cover_pic.attached?
  json.cover_pic url_for(user.cover_pic)
end

json.images user.images, :id, :title, :description, :uploader_id, :created_at, :updated_at