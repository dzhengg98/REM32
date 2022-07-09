@likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :liker_id, :image_id, :created_at, :updated_at
  end
end