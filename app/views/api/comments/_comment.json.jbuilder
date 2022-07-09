json.extract! comment, :id, :user_id, :image_id, :parent_id, :body, :created_at, :updated_at

json.user do
  json.fullname comment.user.first_name + " " + comment.user.last_name
  json.username comment.user.username
end