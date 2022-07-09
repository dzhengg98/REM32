class Image < ApplicationRecord
  validates :title, :description, :uploader_id, presence: true
  validates :title, uniqueness: { scope: :uploader_id }
  validate :ensure_image
  
  has_one_attached :image

  def ensure_image
    unless self.image.attached?
        errors[:image] << "must be attached"
    end
  end

  belongs_to :user,
  foreign_key: :uploader_id,
  class_name: :User

  has_many :comments,
  foreign_key: :image_id,
  class_name: :Comment,
  dependent: :destroy

  has_many :likes,
  foreign_key: :image_id,
  class_name: :Like
end
