class Comment < ApplicationRecord
  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  belongs_to :image,
  class_name: :Image,
  foreign_key: :image_id

  belongs_to :parent,
  class_name: :Comment,
  optional: true

  has_many :replies,
  class_name: :Comment,
  foreign_key: :parent_id,
  dependent: :destroy
  
end