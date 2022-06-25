json.extract! @image, :id, :title, :description, :uploader_id
json.imageUrl url_for(@image.image)