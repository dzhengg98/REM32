# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

user2 = User.create!({
  username: "alvin",
  password: "123456"
})

user3 = User.create!({
  username: "bob",
  password: "123456"
})

user4 = User.create!({
  username: "candy",
  password: "123456"
})

user5 = User.create!({
  username: "elaine",
  password: "123456"
})

user6 = User.create!({
  username: "francis",
  password: "123456"
})

user7 = User.create!({
  username: "george",
  password: "123456"
})

user8 = User.create!({
  username: "harris",
  password: "123456"
})

user9 = User.create!({
  username: "issac",
  password: "123456"
})

# IMAGES

#1
imagepost1 = Image.create({ 
  title: "Basketball is my game", 
  description: "Love the warm weather, going hooping a lot more and enjoying the sunshine", 
  uploader_id: demo_user.id 
})
image1 = open("https://rem32-dev.s3.amazonaws.com/basketball-hoop-shot.jpg")
imagepost1.image.attach(io: image1, filename: 'basketballhoopshot.jpg')
imagepost1.save!

#2
imagepost2 = Image.create({ 
  title: "boat by the lake", 
  description: "boat by the lake, going fishing", 
  uploader_id: demo_user.id 
})
image2 = open("https://rem32-dev.s3.amazonaws.com/boat-lake-green.jpg")
imagepost2.image.attach(io: image2, filename: 'boatlakegreen.jpg')
imagepost2.save!

#3
imagepost3 = Image.create({ 
  title: "boatsharborlake", 
  description: "cool boats by the harbor looks kind of nice...", 
  uploader_id: user1.id 
})
image3 = open("https://rem32-dev.s3.amazonaws.com/boats-harbor-lake.jpg")
imagepost3.image.attach(io: image3, filename: 'boatsharborlake.jpg')
imagepost3.save!

#4
imagepost4 = Image.create({
  title: "nice shiny building",
  description: "check out this cool building",
  uploader_id: user1.id
})
image4 = open("https://rem32-dev.s3.amazonaws.com/building-shiny-black.jpg")
imagepost4.image.attach(io: image4, filename: 'buildingshinyblack.jpg')
imagepost4.save!

#5
imagepost5 = Image.create({
  title: "white tall building",
  description: "check out this cool building",
  uploader_id: user1.id
})
image5 = open("https://rem32-dev.s3.amazonaws.com/building-white-tall.jpg")
imagepost5.image.attach(io: image5, filename: 'buildingwhitetall.jpg')
imagepost5.save!

#6
imagepost6 = Image.create({
  title: "expensive camera",
  description: "check out the camera I just brought",
  uploader_id: user2.id
})
image6 = open("https://rem32-dev.s3.amazonaws.com/camera-black-flash.jpg")
imagepost6.image.attach(io: image6, filename: 'camerablackflash.jpg')
imagepost6.save!

#7
imagepost7 = Image.create({
  title: "car",
  description: "car goes vroom",
  uploader_id: user2.id
})
image7 = open("https://rem32-dev.s3.amazonaws.com/car-black-vroom.jpg")
imagepost7.image.attach(io: image7, filename: 'carblackvroom.jpg')
imagepost7.save!

#8
imagepost8 = Image.create({
  title: "coffee",
  description: "coffee",
  uploader_id: user3.id
})
image8 = open("https://rem32-dev.s3.amazonaws.com/coffee-beans-coco.jpg")
imagepost8.image.attach(io: image8, filename: 'coffeebeanscoco.jpg')
imagepost8.save!

#9
imagepost9 = Image.create({
  title: "fashion",
  description: "fashion for yal",
  uploader_id: user4.id
})
image9 = open("https://rem32-dev.s3.amazonaws.com/fashion-beauty-women.jpg")
imagepost9.image.attach(io: image9, filename: 'fashionbeautywomen.jpg')
imagepost9.save!

#10
imagepost10 = Image.create({
  title: "fashion2",
  description: "fashion for yal2",
  uploader_id: user4.id
})
image10 = open("https://rem32-dev.s3.amazonaws.com/fashion-black-women.jpg")
imagepost10.image.attach(io: image10, filename: 'fashionbeautywomen.jpg')
imagepost10.save!

#11
imagepost11 = Image.create({
  title: "fashion3",
  description: "fashion for yal3",
  uploader_id: user4.id
})
image11 = open("https://rem32-dev.s3.amazonaws.com/fashion-shirt-red.jpg")
imagepost11.image.attach(io: image11, filename: 'fashionshirtred.jpg')
imagepost11.save!

#12
imagepost12 = Image.create({
  title: "fashion4",
  description: "fashion for yal4",
  uploader_id: user4.id
})
image12 = open("https://rem32-dev.s3.amazonaws.com/fashion-suit-sunglasses.jpg")
imagepost12.image.attach(io: image12, filename: 'fashionsuitsunglasses.jpg')
imagepost12.save!

#13
imagepost13 = Image.create({
  title: "girl",
  description: "girl",
  uploader_id: user5.id
})
image13 = open("https://rem32-dev.s3.amazonaws.com/girl-profile-photo.jpeg")
imagepost13.image.attach(io: image13, filename: 'girlprofilephoto.jpg')
imagepost13.save!

#14
imagepost14 = Image.create({
  title: "drink",
  description: "fresh bottle lemon drink",
  uploader_id: user6.id
})
image14 = open("https://rem32-dev.s3.amazonaws.com/lemon-drink-bottle.jpg")
imagepost14.image.attach(io: image14, filename: 'lemondrinkbottle')
imagepost14.save!

#15
imagepost15 = Image.create({
  title: "rich life",
  description: "flex life",
  uploader_id: user6.id
})
image15 = open("https://rem32-dev.s3.amazonaws.com/mansion-forest-green.jpg")
imagepost15.image.attach(io: image15, filename: 'mansionforestgreen.jpg')
imagepost15.save!

#16
imagepost16 = Image.create({
  title: "mountain forest",
  description: "mountain forest view",
  uploader_id: user7.id
})
image16 = open("https://rem32-dev.s3.amazonaws.com/mountain-forest-fog.jpeg")
imagepost16.image.attach(io: image16, filename: 'mountainforestfog.jpg')
imagepost16.save!

#17
imagepost17 = Image.create({
  title: "mountain lake",
  description: "mountain lake nature",
  uploader_id: user7.id
})
image17 = open("https://rem32-dev.s3.amazonaws.com/mountain-lake-nature.jpeg")
imagepost17.image.attach(io: image17, filename: 'mountainlakenature.jpg')
imagepost17.save!

#18
imagepost18 = Image.create({
  title: "mountain sunny",
  description: "mountain sunny side lake",
  uploader_id: user7.id
})
image18 = open("https://rem32-dev.s3.amazonaws.com/mountain-lake-sunny.jpg")
imagepost18.image.attach(io: image18, filename: 'mountainlakesunny.jpg')
imagepost18.save!

#19
imagepost19 = Image.create({
  title: "painting",
  description: "painting apple sketch",
  uploader_id: user8.id
})
image19 = open("https://rem32-dev.s3.amazonaws.com/painting-apple-sketch.jpg")
imagepost19.image.attach(io: image19, filename: 'paintingapplesketch.jpg')
imagepost19.save!

#20
imagepost20 = Image.create({
  title: "strawberry",
  description: "strawberry ice splash",
  uploader_id: user8.id
})
image20 = open("https://rem32-dev.s3.amazonaws.com/strawberry-ice-splash.jpg")
imagepost20.image.attach(io: image20, filename: 'strawberryicesplash.jpg')
imagepost20.save!

#21
imagepost21 = Image.create({
  title: "umbrella",
  description: "umbrella blue float",
  uploader_id: user9.id
})
image21 = open("https://rem32-dev.s3.amazonaws.com/umbrella-blue-float.jpg")
imagepost21.image.attach(io: image21, filename: 'umbrellabluefloat.jpg')
imagepost21.save!

#22
imagepost22 = Image.create({
  title: "weights",
  description: "I work out",
  uploader_id: user9.id
})
image22 = open("https://rem32-dev.s3.amazonaws.com/weights-flex-strong.jpg")
imagepost22.image.attach(io: image22, filename: "weightsflexstrong.jpg")
imagepost22.save!