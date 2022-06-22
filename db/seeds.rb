# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('images')

# USERS
demo_user = User.create!({ 
  username: "demoUser", 
  password: "demouser" 
})
user1 = User.create!({ 
  username: "david", 
  password: "123456" 
})

# IMAGES
image1 = Image.create!({ 
  title: "first image on the site", 
  description: "fun fun fun", 
  uploader_id: demo_user.id 
})
image2 = Image.create!({ 
  title: "second image on the site", 
  description: "test test test", 
  uploader_id: demo_user.id 
})
image3 = Image.create!({ 
  title: "third image on the site", 
  description: "david's image", 
  uploader_id: user1.id 
})