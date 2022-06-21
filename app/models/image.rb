class Image < ApplicationRecord
  validates :title, :description, :uploader_id, presence: true
  # the title of the image must be unique, within the scope of this account
  # same user should not be able to create a image with the same name
  validates :title, uniqueness: { scope: :uploader_id }

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

end
