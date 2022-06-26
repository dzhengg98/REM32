@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :title, :description, :uploader_id, :created_at, :updated_at
    json.imageUrl url_for(image.image)
  end
end