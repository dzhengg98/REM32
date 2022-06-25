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
  title: "ArtScience Museum", 
  description: "Singapore ArtScience Museum Architecture", 
  uploader_id: demo_user.id 
})
image1 = open("https://rem32-seeds.s3.amazonaws.com/architecture-artscience-museum-singapore.jpg")
imagepost1.image.attach(io: image1, filename: 'architectureartsciencemuseumsingapore.jpg')
imagepost1.save!

#2
imagepost2 = Image.create({ 
  title: "Green line drawing", 
  description: "drawing by artificial intelligence", 
  uploader_id: demo_user.id 
})
image2 = open("https://rem32-seeds.s3.amazonaws.com/artificial-intelligence-green.jpg")
imagepost2.image.attach(io: image2, filename: 'artificialintelligencegreen')
imagepost2.save!

#3
imagepost3 = Image.create({ 
  title: "Boat", 
  description: "boat near the ocean with a sunsetview", 
  uploader_id: user1.id 
})
image3 = open("https://rem32-seeds.s3.amazonaws.com/boat-ocean-sunsetview.jpg")
imagepost3.image.attach(io: image3, filename: 'boatoceansunsetview.jpg')
imagepost3.save!

#4
imagepost4 = Image.create({
  title: "Beef skewers",
  description: "freshly cooked beef skewers in singapore near the beach freshly eaten",
  uploader_id: user1.id
})
image4 = open("https://rem32-seeds.s3.amazonaws.com/beef-skewers-braseiro-singapore.jpg")
imagepost4.image.attach(io: image4, filename: 'beefskewersbraseirosingapore.jpg')
imagepost4.save!

#5
imagepost5 = Image.create({
  title: "Cells",
  description: "biological forms cell drawing made by artificial intelligence",
  uploader_id: user1.id
})
image5 = open("https://rem32-seeds.s3.amazonaws.com/biological-forms-function-ai.jpg")
imagepost5.image.attach(io: image5, filename: 'biologicalformsfunctionai.jpg')
imagepost5.save!

#6
imagepost6 = Image.create({
  title: "Toys for playtime",
  description: "cool looking train tracks and toys used for fun time",
  uploader_id: user2.id
})
image6 = open("https://rem32-seeds.s3.amazonaws.com/block-traintracks-toys-fun.jpg")
imagepost6.image.attach(io: image6, filename: 'blocktraintrackstoysfun.jpg')
imagepost6.save!

#7
imagepost7 = Image.create({
  title: "Breakfast",
  description: "breakfast bagel sandwich in portland",
  uploader_id: user2.id
})
image7 = open("https://rem32-seeds.s3.amazonaws.com/breakfast-bagel-sandwich-portland.jpg")
imagepost7.image.attach(io: image7, filename: 'breakfastbagelsandwichportland.jpg')
imagepost7.save!

#8
imagepost8 = Image.create({
  title: "Car goes vroom",
  description: "car drive in a medow...",
  uploader_id: user3.id
})
image8 = open("https://rem32-seeds.s3.amazonaws.com/car-drive-medow-flowers.jpg")
imagepost8.image.attach(io: image8, filename: 'cardrivemedowflowers.jpg')
imagepost8.save!

#9
imagepost9 = Image.create({
  title: "Car drive vroom",
  description: "car drive and it goes vroom...",
  uploader_id: user4.id
})
image9 = open("https://rem32-seeds.s3.amazonaws.com/car-drive-vroom-cool.jpg")
imagepost9.image.attach(io: image9, filename: 'cardrivevroomcool.jpg')
imagepost9.save!

#10
imagepost10 = Image.create({
  title: "cube",
  description: "cool looking glass cubes with grass and nature",
  uploader_id: user4.id
})
image10 = open("https://rem32-seeds.s3.amazonaws.com/cube-green-nature-glass.jpg")
imagepost10.image.attach(io: image10, filename: 'cubegreennatureglass.jpg')
imagepost10.save!

#11
imagepost11 = Image.create({
  title: "desert",
  description: "nice looking desert in the death valley, lots of sanddunes",
  uploader_id: user4.id
})
image11 = open("https://rem32-seeds.s3.amazonaws.com/desert-sanddunes-warm-death-valley.jpg")
imagepost11.image.attach(io: image11, filename: 'desertsandduneswarmdeathvalley.jpg')
imagepost11.save!

#12
imagepost12 = Image.create({
  title: "fern",
  description: "fern grass green nature",
  uploader_id: user4.id
})
image12 = open("https://rem32-seeds.s3.amazonaws.com/fern-grass-green-nature.jpg")
imagepost12.image.attach(io: image12, filename: 'ferngrassgreennature.jpg')
imagepost12.save!

#13
imagepost13 = Image.create({
  title: "Veggies",
  description: "Green veggies are very healthy food",
  uploader_id: user5.id
})
image13 = open("https://rem32-seeds.s3.amazonaws.com/green-veggies-food-health.jpg")
imagepost13.image.attach(io: image13, filename: 'greenveggiesfoodhealth.jpg')
imagepost13.save!

#14
imagepost14 = Image.create({
  title: "Moon",
  description: "halfmoondarknightsky",
  uploader_id: user6.id
})
image14 = open("https://rem32-seeds.s3.amazonaws.com/half-moon-dark-night-sky.jpg")
imagepost14.image.attach(io: image14, filename: 'halfmoondarknightsky.jpg')
imagepost14.save!

#15
imagepost15 = Image.create({
  title: "boats by harbor",
  description: "harbor with the boats in the mountainside",
  uploader_id: user6.id
})
image15 = open("https://rem32-seeds.s3.amazonaws.com/harbor-boat-building-mountainside.jpg")
imagepost15.image.attach(io: image15, filename: 'harborboatbuildingmountainside.jpg')
imagepost15.save!

#16
imagepost16 = Image.create({
  title: "islands",
  description: "Islands in Eibsee, Grainau, Germany",
  uploader_id: user7.id
})
image16 = open("https://rem32-seeds.s3.amazonaws.com/islands-eibsee-grainau-germany.jpg")
imagepost16.image.attach(io: image16, filename: 'islandseibseegrainaugermany.jpg')
imagepost16.save!

#17
imagepost17 = Image.create({
  title: "lake",
  description: "lake by the farmhouse",
  uploader_id: user7.id
})
image17 = open("https://rem32-seeds.s3.amazonaws.com/lake-palmtrees-farm.jpg")
imagepost17.image.attach(io: image17, filename: 'lakepalmtreesfarm.jpg')
imagepost17.save!

#18
imagepost18 = Image.create({
  title: "Mono Lake",
  description: "Mono Lake in California",
  uploader_id: user7.id
})
image18 = open("https://rem32-seeds.s3.amazonaws.com/mono-lake-california.jpg")
imagepost18.image.attach(io: image18, filename: 'monolakecalifornia.jpg')
imagepost18.save!

#19
imagepost19 = Image.create({
  title: "Bloody moon",
  description: "Bloody moon in the dark night sky",
  uploader_id: user8.id
})
image19 = open("https://rem32-seeds.s3.amazonaws.com/moon-bloody-dark-night.jpg")
imagepost19.image.attach(io: image19, filename: 'moonbloodydarknight.jpg')
imagepost19.save!

#20
imagepost20 = Image.create({
  title: "mountains",
  description: "tall mountain with dark clouds",
  uploader_id: user8.id
})
image20 = open("https://rem32-seeds.s3.amazonaws.com/mountain-clouds-dark-tall.jpg")
imagepost20.image.attach(io: image20, filename: 'mountaincloudsdarktall.jpg')
imagepost20.save!

#21
imagepost21 = Image.create({
  title: "snowy mountains",
  description: "snowy mountains in the spring time visited by clouds",
  uploader_id: user9.id
})
image21 = open("https://rem32-seeds.s3.amazonaws.com/mountain-clouds-spring-snow.jpg")
imagepost21.image.attach(io: image21, filename: 'mountaincloudsspringsnow.jpg')
imagepost21.save!

#22
imagepost22 = Image.create({
  title: "Indian mountains",
  description: "High mountains in Uttarakhand, India",
  uploader_id: user9.id
})
image22 = open("https://rem32-seeds.s3.amazonaws.com/mountain-high-uttarakhand-india.jpg")
imagepost22.image.attach(io: image22, filename: "mountainhighuttarakhandindia.jpg")
imagepost22.save!

#23
imagepost23 = Image.create({
  title: "sunset snow mountains",
  description: "snowy mountains in the sunset",
  uploader_id: user1.id
})
image23 = open("https://rem32-seeds.s3.amazonaws.com/mountain-snow-sunset-clouds.jpg")
imagepost23.image.attach(io: image23, filename: "mountiansnowsunsetclouds.jpg")
imagepost23.save!

#24
imagepost24 = Image.create({
  title: "comets mountaintop",
  description: "comets in the mountain top, the sun is also setting",
  uploader_id: user2.id
})
image24 = open("https://rem32-seeds.s3.amazonaws.com/mountain-sunset-comet.jpg")
imagepost24.image.attach(io: image24, filename: "mountainsunsetcomet.jpg")
imagepost24.save!

#25
imagepost25 = Image.create({
  title: "New Zealand",
  description: "Sunset mountain view in New Zealand",
  uploader_id: user3.id
})
image25 = open("https://rem32-seeds.s3.amazonaws.com/mountain-sunset-comet.jpg")
imagepost25.image.attach(io: image25, filename: "mountainsunsetcomet.jpg")
imagepost25.save!

#26
imagepost26 = Image.create({
  title: "Shooting Stars",
  description: "Shooting stars in the night sky",
  uploader_id: user4.id
})
image26 = open("https://rem32-seeds.s3.amazonaws.com/nights-trees-shooting-stars-horses.jpg")
imagepost26.image.attach(io: image26, filename: "nightstreesshootingstarshorses.jpg")
imagepost26.save!

#27
imagepost27 = Image.create({
  title: "Lighthouse",
  description: "Ocean Tower Sea Lighthouse",
  uploader_id: user5.id
})
image27 = open("https://rem32-seeds.s3.amazonaws.com/ocean-tower-sea-lighthouse.jpg")
imagepost27.image.attach(io: image27, filename: "oceantowersealighthouse.jpg")
imagepost27.save!

#28
imagepost28 = Image.create({
  title: "Pills",
  description: "pills for health and wellness",
  uploader_id: user6.id
})
image28 = open("https://rem32-seeds.s3.amazonaws.com/pills-health-wellness.jpg")
imagepost28.image.attach(io: image28, filename: "pillshealthwellness.jpg")
imagepost28.save!

#29
imagepost29 = Image.create({
  title: "powerboat",
  description: "Riding the powerboat in the United Kingdom Coastline",
  uploader_id: user7.id
})
image29 = open("https://rem32-seeds.s3.amazonaws.com/powerboat-coastline-unitedkingdom.jpg")
imagepost29.image.attach(io: image29, filename: "powerboatcoastlineunitedkingdom.jpg")
imagepost29.save!

#30
imagepost30 = Image.create({
  title: "Raining",
  description: "It's raining a lot tonight",
  uploader_id: user8.id
})
image30 = open("https://rem32-seeds.s3.amazonaws.com/raining-trees-nature.jpg")
imagepost30.image.attach(io: image30, filename: "rainingtreesnature.jpg")
imagepost30.save!

#31
imagepost31 = Image.create({
  title: "Mountains with snow",
  description: "Snowy forest in the mountains during sundown",
  uploader_id: user9.id
})
image31 = open("https://rem32-seeds.s3.amazonaws.com/snow-forest-mountain-sundown.jpg")
imagepost31.image.attach(io: image31, filename: "snowforestmountainsundown.jpg")
imagepost31.save!

#32
imagepost32 = Image.create({
  title: "Snowy Pines Winter",
  description: "Snowing in the winter, lots of pine trees",
  uploader_id: user1.id
})
image32 = open("https://rem32-seeds.s3.amazonaws.com/snow-tree-pine-winter.jpg")
imagepost32.image.attach(io: image32, filename: "snowtreepinewinter.jpg")
imagepost32.save!

#33
imagepost33 = Image.create({
  title: "I'm at the top of the world!",
  description: "Standing on top of the mountain in Calanques, France",
  uploader_id: user2.id
})
image33 = open("https://rem32-seeds.s3.amazonaws.com/standing-ontop-mountain-calanques-france.jpg")
imagepost33.image.attach(io: image33, filename: "standingontopmountaincalanquesfrance.jpg")
imagepost33.save!

#34
imagepost34 = Image.create({
  title: "Swirles",
  description: "Swirly lines textures patterns",
  uploader_id: user3.id
})
image34 = open("https://rem32-seeds.s3.amazonaws.com/swirly-lines-textures-patterns.jpg")
imagepost34.image.attach(io: image34, filename: "swirlylinestexturespatterns.jpg")
imagepost34.save!

#35
imagepost35 = Image.create({
  title: "Turtles",
  description: "Turtles in Kefalonia, Cephalonia, Greece",
  uploader_id: user4.id
})
image35 = open("https://rem32-seeds.s3.amazonaws.com/turtles-kefalonia-cephalonia-greece.jpg")
imagepost35.image.attach(io: image35, filename: "turtleskefaloniacephaloniagreece.jpg")
imagepost35.save!

#35
# imagepost35 = Image.create({
#   title: "",
#   description: "",
#   uploader_id: user4.id
# })
# image35 = open("")
# imagepost35.image.attach(io: image35, filename: "")
# imagepost35.save!