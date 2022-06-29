json.extract! user, :id, :username, :first_name, :last_name, :city, :country, :about, :website, :instagram, :facebook, :twitter

if user.profilepic.attached?
  json.profilepic url_for(user.profilepic)
end

if user.coverpic.attached?
  json.coverpic url_for(user.coverpic)
end

json.images user.images, :id, :title, :description, :uploader_id, :created_at, :updated_at