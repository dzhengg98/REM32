class Like < ApplicationRecord
  validates :liker_id, :image_id, presence: true
  validates :liker_id, uniqueness: { scope: :image_id }

  belongs_to :image,
  foreign_key: :image_id,
  class_name: :Image
  
  belongs_to :liker,
  foreign_key: :liker_id,
  class_name: :User
end
