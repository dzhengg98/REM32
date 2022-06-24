class Image < ApplicationRecord
  validates :title, :description, :uploader_id, presence: true
  validates :title, uniqueness: { scope: :uploader_id }

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

  has_one_attached :photo
end
