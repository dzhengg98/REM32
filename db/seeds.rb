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
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('images')
ApplicationRecord.connection.reset_pk_sequence!('comments')
ApplicationRecord.connection.reset_pk_sequence!('likes')
ApplicationRecord.connection.reset_pk_sequence!('follows')

# USERS
demo_user = User.create({ 
  username: "demoUser", 
  password: "demouser",
  first_name: "Demo",
  last_name: "User",
  city: "New York City",
  about: "This is the demoUser don't mess with him",
  website: "www.google.com",
  instagram: "www.instagram.com/",
  facebook: "www.facebook.com/",
  twitter: "www.twitter.com/",
  country: "United States",
})

user1 = User.create!({ 
  username: "dzhengg98", 
  password: "123456",
  first_name: "David",
  last_name: "Zheng",
  city: "New York City",
  about: "Hello, I am David",
  twitter: "www.twitter.com/dzhengg1",
  country: "United States",
})
profilepic1 = open("https://rem32-seeds.s3.amazonaws.com/chibi1.jpeg")
user1.profilepic.attach(io: profilepic1, filename: 'chibi1.jpg')
user1.save!

coverpic2 = open("https://rem32-seeds.s3.amazonaws.com/4263821.jpg")
user1.coverpic.attach(io: coverpic2, filename: '4263821.jpg')
user1.save!

user2 = User.create!({
  username: "alvintheprogrammer",
  password: "123456",
  first_name: "Alvin",
  last_name: "Zablan",
  city: "New York City",
  about: "Software Engineer",
  website: "https://www.structy.net/",
  country: "United States"
})
profilepic2 = open("https://rem32-seeds.s3.amazonaws.com/chibi2.png")
user2.profilepic.attach(io: profilepic2, filename: 'chibi2.png')
user2.save!

coverpic3 = open("https://rem32-seeds.s3.amazonaws.com/216030.jpg")
user2.coverpic.attach(io: coverpic3, filename: '216030.jpg')
user2.save!

user3 = User.create!({
  username: "king da ka",
  password: "123456",
  first_name: "KinKa",
  last_name: "Tse",
  city: "New York City",
  about: "I like anime",
  country: "United States"
})
profilepic3 = open("https://rem32-seeds.s3.amazonaws.com/chibi8.webp")
user3.profilepic.attach(io: profilepic3, filename: 'chibi8.webp')
user3.save!

coverpic4 = open("https://rem32-seeds.s3.amazonaws.com/4263867.jpg")
user3.coverpic.attach(io: coverpic4, filename: '4263867.jpg')
user3.save!

user4 = User.create!({
  username: "Spence",
  password: "123456",
  first_name: "Spencer",
  last_name: "Iascone",
  city: "Boulder",
  about: "I am a programmer consumed by nature and music.",
  country: "United States",
  website: "http://spenceriascone.com/"
})
profilepic4 = open("https://rem32-seeds.s3.amazonaws.com/chibi7.jpg")
user4.profilepic.attach(io: profilepic4 , filename: 'chibi7.jpg')
user4.save!

coverpic5 = open("https://rem32-seeds.s3.amazonaws.com/4264146.jpg")
user4.coverpic.attach(io: coverpic5, filename: '4264146.jpg')
user4.save!

user5 = User.create!({
  username: "Ayce in Space",
  password: "123456",
  first_name: "Ayce",
  last_name: "LaCap",
  city: "San Francisco",
  about: "I appreciate how drastically technology has improved the quality of life.",
  country: "United States",
})
profilepic5 = open("https://rem32-seeds.s3.amazonaws.com/chibi6.jpeg")
user5.profilepic.attach(io: profilepic5 , filename: 'chibi6.jpg')
user5.save!

coverpic6 = open("https://rem32-seeds.s3.amazonaws.com/4264075.jpg")
user5.coverpic.attach(io: coverpic6, filename: '4264075.jpg')
user5.save!

user6 = User.create!({
  username: "JWong",
  password: "123456",
  first_name: "Jonathan",
  last_name: "Wong",
  city: "Union",
  about: "Hi! My name is Jonathan Wong, and I am a Full-Stack developer.",
  country: "United States"
})
profilepic6 = open("https://rem32-seeds.s3.amazonaws.com/chibi3.jpeg")
user6.profilepic.attach(io: profilepic6 , filename: 'chibi3.jpg')
user6.save!

coverpic7 = open("https://rem32-seeds.s3.amazonaws.com/4264069.jpg")
user6.coverpic.attach(io: coverpic7, filename: '4264069.jpg')
user6.save!

user7 = User.create!({
  username: "VH",
  password: "123456",
  first_name: "Victor",
  last_name: "He",
  city: "New York City",
  about: "I'm incredibly passionate about powerlifting.",
  country: "United States",
  website: "https://victorhedev.github.io/portfolio/"
})
profilepic7 = open("https://rem32-seeds.s3.amazonaws.com/chibi4.jpeg")
user7.profilepic.attach(io: profilepic7 , filename: 'chibi4.jpeg')
user7.save!

coverpic8 = open("https://rem32-seeds.s3.amazonaws.com/4263932.jpg")
user7.coverpic.attach(io: coverpic8, filename: '4263932.jpg')
user7.save!

user8 = User.create!({
  username: "cumbersomecete",
  password: "123456",
  first_name: "Ken",
  city: "Oakland",
  country: "United States",
  facebook: "www.facebook.com/ken"
})
profilepic8 = open("https://rem32-seeds.s3.amazonaws.com/chibi5.png")
user8.profilepic.attach(io: profilepic8 , filename: 'chibi5.png')
user8.save!

coverpic9 = open("https://rem32-seeds.s3.amazonaws.com/4263949.jpg")
user8.coverpic.attach(io: coverpic9 , filename: '4263949.jpg')
user8.save!

user9 = User.create({
  username: "boxerssubmit",
  password: "123456",
  first_name: "James",
  about: "I do not know what to say",
  country: "Italy",
})
profilepic9 = open("https://rem32-seeds.s3.amazonaws.com/chibi10.webp")
user9.profilepic.attach(io: profilepic9, filename: 'chibi9.webp')
user9.save!

coverpic9 = open("https://rem32-seeds.s3.amazonaws.com/4263900.jpg")
user9.coverpic.attach(io: coverpic9, filename: '4263900.jpg')
user9.save!

user10 = User.create({
  username: "terrorriband",
  password: "123456",
  first_name: "Chynna",
  last_name: "Varhe",
  country: "Germany",
  about: "I like taking pictures"
})
profilepic10 = open('https://rem32-seeds.s3.amazonaws.com/chibi9.webp')
user10.profilepic.attach(io: profilepic10, filename: 'chibi10.webp')
user10.save!

coverpic10 = open('https://rem32-seeds.s3.amazonaws.com/4263924.jpg')
user10.coverpic.attach(io: coverpic10, filename: '4263924.jpg')
user10.save!

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
image25 = open("https://rem32-seeds.s3.amazonaws.com/mountain-sunset-new-zealand.jpg")
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

#36
imagepost36 = Image.create({
  title: "Siberian Huskie",
  description: "Cute Siberian Huskie Dog near a fence",
  uploader_id: user5.id
})
image36 = open("https://rem32-seeds.s3.amazonaws.com/siberianhuskie.jpg")
imagepost36.image.attach(io: image36, filename: "siberianhuskie.jpg")
imagepost36.save!

#37
imagepost37 = Image.create({
  title: "Sphinx",
  description: "Sphinx has 9 lives",
  uploader_id: user6.id
})
image37 = open("https://rem32-seeds.s3.amazonaws.com/sphinx.jpg")
imagepost37.image.attach(io: image37, filename: "sphinx.jpg")
imagepost37.save!

#38
imagepost38 = Image.create({
  title: "Surfs up!",
  description: "Surfing image in waves on black and white",
  uploader_id: user7.id
})
image38 = open("https://rem32-seeds.s3.amazonaws.com/surfing.jpg")
imagepost38.image.attach(io: image38, filename: "surfing.jpg")
imagepost38.save!

#39
imagepost39 = Image.create({
  title: "Pisa",
  description: "In them mean streets of Pisa!",
  uploader_id: user8.id
})
image39 = open("https://rem32-seeds.s3.amazonaws.com/pisa.jpg")
imagepost39.image.attach(io: image39, filename: "pisa.jpg")
imagepost39.save!

#40
imagepost40 = Image.create({
  title: "Rome",
  description: "When in Rome ... Do as the Romans do ...",
  uploader_id: user9.id
})
image40 = open("https://rem32-seeds.s3.amazonaws.com/rome.jpg")
imagepost40.image.attach(io: image40, filename: "rome.jpg")
imagepost40.save!

#41
imagepost41 = Image.create({
  title: "Deer",
  description: "Deer, dare, dear, there, they're, their?",
  uploader_id: user1.id
})
image41 = open("https://rem32-seeds.s3.amazonaws.com/deer.jpg")
imagepost41.image.attach(io: image41, filename: "deer.jpg")
imagepost41.save!

#42
imagepost42 = Image.create({
  title: "Gecko",
  description: "Gecko can camo?",
  uploader_id: user2.id
})
image42 = open("https://rem32-seeds.s3.amazonaws.com/gecko.jpg")
imagepost42.image.attach(io: image42, filename: "gecko.jpg")
imagepost42.save!

#43
imagepost43 = Image.create({
  title: "Boats",
  description: "Lots of boats by the harbor today",
  uploader_id: user3.id
})
image43 = open("https://rem32-seeds.s3.amazonaws.com/million_boats.jpg")
imagepost43.image.attach(io: image43, filename: "million_boats.jpg")
imagepost43.save!

#44
imagepost44 = Image.create({
  title: "Bridge",
  description: "Bridge towering over a measly lake",
  uploader_id: user4.id
})
image44 = open("https://rem32-seeds.s3.amazonaws.com/bridge_lake.jpg")
imagepost44.image.attach(io: image44, filename: "bridge_lake.jpg")
imagepost44.save!

#45
imagepost45 = Image.create({
  title: "Camera",
  description: "Camera goes click",
  uploader_id: user5.id
})
image45 = open("https://rem32-seeds.s3.amazonaws.com/camera.jpg")
imagepost45.image.attach(io: image45, filename: "camera.jpg")
imagepost45.save!

#46
imagepost46 = Image.create({
  title: "Liquor",
  description: "Bar filled with liquor",
  uploader_id: user6.id
})
image46 = open("https://rem32-seeds.s3.amazonaws.com/bar-filled-with-liquor.jpg")
imagepost46.image.attach(io: image46, filename: "bar-filled-with-liquor.jpg")
imagepost46.save!

#47
imagepost47 = Image.create({
  title: "Camera Lens",
  description: "Camera lens photo taking",
  uploader_id: user7.id
})
image47 = open("https://rem32-seeds.s3.amazonaws.com/camera-lens-photo-taking.jpg")
imagepost47.image.attach(io: image47, filename: "camera-les-photo-taking.jpg")
imagepost47.save!

#48
imagepost48 = Image.create({
  title: "Cameraseption",
  description: "Cameraseption at it's finest",
  uploader_id: user8.id
})
image48 = open("https://rem32-seeds.s3.amazonaws.com/cameraseption-by-lake.jpg")
imagepost48.image.attach(io: image48, filename: "cameraseption-by-lake.jpg")
imagepost48.save!

#49
imagepost49 = Image.create({
  title: "Chapel",
  description: "A great city view",
  uploader_id: user9.id
})
image49 = open("https://rem32-seeds.s3.amazonaws.com/chapel-trees-nature.jpg")
imagepost49.image.attach(io: image49, filename: "chapel-trees-nature.jpg")
imagepost49.save!

#50
imagepost50 = Image.create({
  title: "Patterns",
  description: "Cool blue textures and patterns",
  uploader_id: user10.id
})
image50 = open("https://rem32-seeds.s3.amazonaws.com/cool-blue-texture-patterns.jpg")
imagepost50.image.attach(io: image50, filename: "cool-blue-texture-patterns.jpg")
imagepost50.save!

#51
imagepost51 = Image.create({
  title: "Cubes",
  description: "Cool design cubes",
  uploader_id: user1.id
})
image51 = open("https://rem32-seeds.s3.amazonaws.com/cool-design-cubes.jpg")
imagepost51.image.attach(io: image51, filename: "cool-design-cubes.jpg")
imagepost51.save!

#52
imagepost52 = Image.create({
  title: "Cubeseption",
  description: "cubes over bigger cubes",
  uploader_id: user2.id
})
image52 = open("https://rem32-seeds.s3.amazonaws.com/cubes-bigger-cube.jpg")
imagepost52.image.attach(io: image52, filename: "cubes-bigger-cube.jpg")
imagepost52.save!

#53
imagepost53 = Image.create({
  title: "Chibi",
  description: "Cute chibi drawing",
  uploader_id: user3.id
})
image53 = open("https://rem32-seeds.s3.amazonaws.com/cute-chibi-drawing.jpg")
imagepost53.image.attach(io: image53, filename: "cute-chibi-drawing.jpg")
imagepost53.save!

#54
imagepost54 = Image.create({
  title: "Shapes",
  description: "different shapes and sizes",
  uploader_id: user4.id
})
image54 = open("https://rem32-seeds.s3.amazonaws.com/different-shapes-sizes.jpg")
imagepost54.image.attach(io: image54, filename: "different-shapes-sizes.jpg")
imagepost54.save!

#55
imagepost55 = Image.create({
  title: "Not!",
  description: "Getting work done",
  uploader_id: user5.id
})
image55 = open("https://rem32-seeds.s3.amazonaws.com/getting-work-done.jpg")
imagepost55.image.attach(io: image55, filename: "getting-work-done.jpg")
imagepost55.save!

#56
imagepost56 = Image.create({
  title: "King Street",
  description: "King Street, East Toronto, Canada",
  uploader_id: user6.id
})
image56 = open("https://rem32-seeds.s3.amazonaws.com/king-street-east-toronto-canada.jpg")
imagepost56.image.attach(io: image56, filename: "king-street-east-toronto-canada.jpg")
imagepost56.save!

#57
imagepost57 = Image.create({
  title: "Lionesses",
  description: "Flockings of lionesses",
  uploader_id: user7.id
})
image57 = open("https://rem32-seeds.s3.amazonaws.com/lionesses-flocking-together.jpg")
imagepost57.image.attach(io: image57, filename: "lionesses-flocking-together.jpg")
imagepost57.save!

#58
imagepost58 = Image.create({
  title: "Mic Check",
  description: "Can you hear me?",
  uploader_id: user8.id
})
image58 = open("https://rem32-seeds.s3.amazonaws.com/mic-check.jpg")
imagepost58.image.attach(io: image58, filename: "mic-check.jpg")
imagepost58.save!

#59
imagepost59 = Image.create({
  title: "Nishiasakusa",
  description: "Nishiasakusa, Taitocity, Tokyo, Japan",
  uploader_id: user9.id
})
image59 = open("https://rem32-seeds.s3.amazonaws.com/nishiasakusa-taitocity-tokyo-japan.jpg")
imagepost59.image.attach(io: image59, filename: "nishiasakusa-taitocity-tokyo-japan.jpg")
imagepost59.save!

#60
imagepost60 = Image.create({
  title: "Picnic Bag",
  description: "Out for a picnic today",
  uploader_id: user10.id
})
image60 = open("https://rem32-seeds.s3.amazonaws.com/picnic-bag-bicycle.jpg")
imagepost60.image.attach(io: image60, filename: "picnic-bag-bicycle.jpg")
imagepost60.save!

#61
imagepost61 = Image.create({
  title: "Love not hate",
  description: "Love not hate!",
  uploader_id: user1.id
})
image61 = open("https://rem32-seeds.s3.amazonaws.com/pride-stop-hate.jpg")
imagepost61.image.attach(io: image61, filename: "pride-stop-hate.jpg")
imagepost61.save!

#62
imagepost62 = Image.create({
  title: "Shovels, and toys",
  description: "Game fair is today, let us win something!",
  uploader_id: user2.id
})
image62 = open("https://rem32-seeds.s3.amazonaws.com/shovels-toys-nets-game-fair.jpg")
imagepost62.image.attach(io: image62, filename: "shovels-toys-nets-game-fair.jpg")
imagepost62.save!

#63
imagepost63 = Image.create({
  title: "Osaka",
  description: "Streets of Osaka, Japan",
  uploader_id: user3.id
})
image63 = open("https://rem32-seeds.s3.amazonaws.com/streets-of-Osaka-Japan.jpg")
imagepost63.image.attach(io: image63, filename: "streets-of-Osaka-Japan.jpg")
imagepost63.save!

#64
imagepost64 = Image.create({
  title: "France",
  description: "Streets of Nice, France",
  uploader_id: user4.id
})
image64 = open("https://rem32-seeds.s3.amazonaws.com/streets-of-nice-france.jpg")
imagepost64.image.attach(io: image64, filename: "streets-of-nice-france.jpg")
imagepost64.save!

#65
imagepost65 = Image.create({
  title: "Summer House Slumbers",
  description: "Summer time is about having fun",
  uploader_id: user5.id
})
image65 = open("https://rem32-seeds.s3.amazonaws.com/summer-house-mount-shasta-ca.jpg")
imagepost65.image.attach(io: image65, filename: "summer-house-mount-shasta-ca.jpg")
imagepost65.save!

#66
imagepost66 = Image.create({
  title: "Vintage",
  description: "Can not believe I still have these things!",
  uploader_id: user6.id
})
image66 = open("https://rem32-seeds.s3.amazonaws.com/typewriter-telephone-desk.jpg")
imagepost66.image.attach(io: image66, filename: "typewriter-telephone-desk.jpg")
imagepost66.save!

# #67
# imagepost67 = Image.create({
#   title: "",
#   description: "",
#   uploader_id: user7.id
# })
# image67 = open("")
# imagepost67.image.attach(io: image67, filename: "")
# imagepost67.save!

# COMMENTS

comment1 = Comment.create({
  user_id: user1.id,
  image_id: imagepost1.id,
  body: "You are the shuckiest shuck faced shuck in the world!"
})

comment1.save!

comment2 = Comment.create({
  user_id: user2.id,
  image_id: imagepost2.id,
  body: "I'm unpredictable"
})

comment2.save!

comment3 = Comment.create({
  user_id: user3.id,
  image_id: imagepost3.id,
  body: "I never know where I'm going"
})

comment3.save!

comment4 = Comment.create({
  user_id: user4.id,
  image_id: imagepost4.id,
  body: "I'm so random"
})

comment4.save!

comment5 = Comment.create({
  user_id: user5.id,
  image_id: imagepost5.id,
  body: "I'm always growing, learning, changing"
})

comment5.save!

comment6 = Comment.create({
  user_id: user6.id,
  image_id: imagepost6.id,
  body: "I'm never the same person twice"
})

comment6.save!

comment7 = Comment.create({
  user_id: user7.id,
  image_id: imagepost7.id,
  body: "I will always do exactly what I want to do."
})

comment7.save!

comment8 = Comment.create({
  user_id: user8.id,
  image_id: imagepost8.id,
  body: "That proves you are unusual"
})

comment8.save!

comment9 = Comment.create({
  user_id: user9.id,
  image_id: imagepost9.id,
  body: "The only people worthy of consideration in this world are the unusual ones"
})

comment9.save!

comment10 = Comment.create({
  user_id: user10.id,
  image_id: imagepost10.id,
  body: "the common folks are like the leaves of a tree"
})

comment10.save!

comment11 = Comment.create({
  user_id: user1.id,
  image_id: imagepost11.id,
  body: "and live and die unnoticed"
})

comment11.save!

comment12 = Comment.create({
  user_id: user2.id,
  image_id: imagepost12.id,
  body: "But that was life"
})

comment12.save!

comment13 = Comment.create({
  user_id: user3.id,
  image_id: imagepost13.id,
  body: "Nobody got a guided tour to their own theme park"
})

comment13.save!

comment14 = Comment.create({
  user_id: user4.id,
  image_id: imagepost14.id,
  body: "You had to hop on the rides as they presented themselves"
})

comment14.save!

comment15 = Comment.create({
  user_id: user5.id,
  image_id: imagepost15.id,
  body: "never knowing whether you would like the one you were in line for"
})

comment15.save!

comment16 = Comment.create({
  user_id: user6.id,
  image_id: imagepost16.id,
  body: "the bastard was going to make you throw up your corn dog and your cotton candy all over the place"
})

comment16.save!

comment17 = Comment.create({
  user_id: user7.id,
  image_id: imagepost17.id,
  body: "Her name badge read"
})

comment17.save!

comment18 = Comment.create({
  user_id: user8.id,
  image_id: imagepost18.id,
  body: "Hello! My name is DIE, DEMIGOD SCUM!"
})

comment18.save!

comment19 = Comment.create({
  user_id: user9.id,
  image_id: imagepost19.id,
  body: "Insane"
})

comment19.save!

comment20 = Comment.create({
  user_id: user10.id,
  image_id: imagepost20.id,
  body: "fewer cameras!"
})

comment20.save!

comment21 = Comment.create({
  user_id: user1.id,
  image_id: imagepost21.id,
  body: "A musician must make music"
})

comment21.save!

comment22 = Comment.create({
  user_id: user2.id,
  image_id: imagepost22.id,
  body: "an artist must paint"
})

comment22.save!

comment23 = Comment.create({
  user_id: user3.id,
  image_id: imagepost23.id,
  body: "a poet must write"
})

comment23.save!

comment24 = Comment.create({
  user_id: user4.id,
  image_id: imagepost24.id,
  body: "if he is to be ultimately at peace with himself"
})

comment24.save!

comment25 = Comment.create({
  user_id: user5.id,
  image_id: imagepost25.id,
  body: "What a man can be, he must be"
})

comment25.save!

comment26 = Comment.create({
  user_id: user6.id,
  image_id: imagepost26.id,
  body: "Frankly, my dea, I don't give a damn"
})

comment26.save!

comment27 = Comment.create({
  user_id: user7.id,
  image_id: imagepost27.id,
  body: "I'm gonna make him an offer he can't refuse"
})

comment27.save!

comment28 = Comment.create({
  user_id: user8.id,
  image_id: imagepost28.id,
  body: "You don't understand! I coulda had class. I couda been a contender."
})

comment28.save!

comment29 = Comment.create({
  user_id: user9.id,
  image_id: imagepost29.id,
  body: "I could've been somebody, instead of a bum, which is what I am"
})

comment29.save!

comment30 = Comment.create({
  user_id: user10.id,
  image_id: imagepost30.id,
  body: "Toto, I've a feeling we're not in Kansas anymore"
})

comment30.save!

comment31 = Comment.create({
  user_id: user1.id,
  image_id: imagepost31.id,
  body: "Here's looking at you, kid."
})

comment31.save!

comment32 = Comment.create({
  user_id: user2.id,
  image_id: imagepost32.id,
  body: "Go ahead, make my day"
})

comment32.save!

comment33 = Comment.create({
  user_id: user3.id,
  image_id: imagepost33.id,
  body: "All right, Mr. DeMille, I'm ready for my close-up"
})

comment33.save!

comment34 = Comment.create({
  user_id: user10.id,
  image_id: imagepost34.id,
  body: "Fasten your seatbelts. It's going to be a dumpy night."
})

comment34.save!

comment35 = Comment.create({
  user_id: user4.id,
  image_id: imagepost35.id,
  body: "You talking to me?"
})

comment35.save!

comment36 = Comment.create({
  user_id: user5.id,
  image_id: imagepost36.id,
  body: "What we've got here is a failure to communicate"
})

comment36.save!

comment37 = Comment.create({
  user_id: user6.id,
  image_id: imagepost37.id,
  body: "I love the smell of napalm in the morning"
})

comment37.save!

comment38 = Comment.create({
  user_id: user7.id,
  image_id: imagepost38.id,
  body: "Love means never having to say you're sorry"
})

comment38.save!

comment39 = Comment.create({
  user_id: user8.id,
  image_id: imagepost39.id,
  body: "E.T.phone home"
})

comment39.save!

comment40 = Comment.create({
  user_id: user9.id,
  image_id: imagepost40.id,
  body: "They call me Mister Tibbs!"
})

comment40.save!

comment41 = Comment.create({
  user_id: user10.id,
  image_id: imagepost41.id,
  body: "Rosebud"
})

comment41.save!

comment42 = Comment.create({
  user_id: user1.id,
  image_id: imagepost42.id,
  body: "Made it, Ma! Top of the world!"
})

comment42.save!

comment43 = Comment.create({
  user_id: user1.id,
  image_id: imagepost43.id,
  body: "I'm as mad as hell, and I'm not going to take this anymore!"
})

comment43.save!

comment44 = Comment.create({
  user_id: user2.id,
  image_id: imagepost44.id,
  body: "Louis, I think this is the beginning of a beautiful friendship."
})

comment44.save!

comment45 = Comment.create({
  user_id: user3.id,
  image_id: imagepost45.id,
  body: "Bond. James Bond."
})

comment45.save!

comment46 = Comment.create({
  user_id: user4.id,
  image_id: imagepost46.id,
  body: "There's no place like home."
})

comment46.save!

comment47 = Comment.create({
  user_id: user5.id,
  image_id: imagepost47.id,
  body: "I am big! It's the pictures that got small."
})

comment47.save!

comment48 = Comment.create({
  user_id: user6.id,
  image_id: imagepost48.id,
  body: "Show me the money!"
})

comment48.save!

comment49 = Comment.create({
  user_id: user7.id,
  image_id: imagepost49.id,
  body: "Why don't you come up sometime and see me?"
})

comment49.save!

comment50 = Comment.create({
  user_id: user8.id,
  image_id: imagepost50.id,
  body: "I'm walking here! I'm walking here!"
})

comment50.save!

comment51 = Comment.create({
  user_id: user9.id,
  image_id: imagepost51.id,
  body: "Play it, Sam. Play 'As Time goes By.'"
})

comment51.save!

comment52 = Comment.create({
  user_id: user10.id,
  image_id: imagepost52.id,
  body: "You can't handle the truth!'"
})

comment52.save!

comment53 = Comment.create({
  user_id: user1.id,
  image_id: imagepost53.id,
  body: "I want to be alone"
})

comment53.save!

comment54 = Comment.create({
  user_id: user2.id,
  image_id: imagepost54.id,
  body: "After all, tomorrow is another day!"
})

comment54.save!

comment55 = Comment.create({
  user_id: user3.id,
  image_id: imagepost55.id,
  body: "Round up the usual suspects."
})

comment55.save!

comment56 = Comment.create({
  user_id: user4.id,
  image_id: imagepost56.id,
  body: "I'll have what she's having."
})

comment56.save!

comment57 = Comment.create({
  user_id: user5.id,
  image_id: imagepost57.id,
  body: "You know how to whistle, don't you Steve?"
})

comment57.save!

comment58 = Comment.create({
  user_id: user6.id,
  image_id: imagepost58.id,
  body: "Badges?"
})

comment58.save!

comment59 = Comment.create({
  user_id: user7.id,
  image_id: imagepost59.id,
  body: "We ain't got no badges!'"
})

comment59.save!

comment60 = Comment.create({
  user_id: user8.id,
  image_id: imagepost60.id,
  body: "We don't need no badges! I don't have to show you any stinking badges!"
})

comment60.save!

comment61 = Comment.create({
  user_id: user9.id,
  image_id: imagepost61.id,
  body: "I'll be back"
})

comment61.save!

comment62 = Comment.create({
  user_id: user10.id,
  image_id: imagepost62.id,
  body: "Today, I consider myself the luckiest man on the face of the earth."
})

comment62.save!

comment63 = Comment.create({
  user_id: user1.id,
  image_id: imagepost63.id,
  body: "If you build it, he will come."
})

comment63.save!

comment64 = Comment.create({
  user_id: user2.id,
  image_id: imagepost64.id,
  body: "We rob banks"
})

comment64.save!

comment65 = Comment.create({
  user_id: user3.id,
  image_id: imagepost65.id,
  body: "Plastics"
})

comment65.save!

comment66 = Comment.create({
  user_id: user4.id,
  image_id: imagepost66.id,
  body: "We'll always have Paris"
})

comment66.save!

like1 = Like.create({
  liker_id: 1,
  image_id: 55
})

like2 = Like.create({ 
  liker_id: 1, 
  image_id: 35 
})

like3 = Like.create({ 
  liker_id: 1, 
  image_id: 25
})

like4 = Like.create({ 
  liker_id: 1, 
  image_id: 1 
})

like5 = Like.create({ 
  liker_id: 1, 
  image_id: 2
})

like6 = Like.create({ 
  liker_id: 1, 
  image_id: 3
})

like7 = Like.create({ 
  liker_id: 1, 
  image_id: 4
})

like8 = Like.create({ 
  liker_id: 1, 
  image_id: 5
})

like9 = Like.create({ 
  liker_id: 1, 
  image_id: 6
})

like10 = Like.create({ 
  liker_id: 1, 
  image_id: 7
})

like11 = Like.create({ 
  liker_id: 1, 
  image_id: 11
})

like12 = Like.create({ 
  liker_id: 1, 
  image_id: 14
})

like13 = Like.create({ 
  liker_id: 1, 
  image_id: 32
})

like14 = Like.create({ 
  liker_id: 1, 
  image_id: 18
})

like15 = Like.create({ 
  liker_id: 1, 
  image_id: 19
})

like16 = Like.create({ 
  liker_id: 2, 
  image_id: 2
})

like17 = Like.create({ 
  liker_id: 2, 
  image_id: 4
})

like18 = Like.create({ 
  liker_id: 2, 
  image_id: 8
})

like19 = Like.create({ 
  liker_id: 2, 
  image_id: 11
})

like20 = Like.create({ 
  liker_id: 2, 
  image_id: 22
})

like21 = Like.create({ 
  liker_id: 2, 
  image_id: 29
})

like22 = Like.create({ 
  liker_id: 2, 
  image_id: 31
})

like23 = Like.create({ 
  liker_id: 2, 
  image_id: 33
})

like24 = Like.create({ 
  liker_id: 2, 
  image_id: 10
})

like25 = Like.create({ 
  liker_id: 2, 
  image_id: 37
})

like26 = Like.create({ 
  liker_id: 2, 
  image_id: 44
})

like27 = Like.create({ 
  liker_id: 2, 
  image_id: 51
})

like28 = Like.create({ 
  liker_id: 2, 
  image_id: 40
})

like29 = Like.create({ 
  liker_id: 2, 
  image_id: 41
})

like30 = Like.create({ 
  liker_id: 2, 
  image_id: 52
})

like31 = Like.create({ 
  liker_id: 3, 
  image_id: 1
})

like32 = Like.create({ 
  liker_id: 3, 
  image_id: 8
})

like33 = Like.create({ 
  liker_id: 3, 
  image_id: 9
})

like34 = Like.create({ 
  liker_id: 3, 
  image_id: 11
})

like35 = Like.create({ 
  liker_id: 3, 
  image_id: 16
})

like36 = Like.create({ 
  liker_id: 3, 
  image_id: 21
})

like37 = Like.create({ 
  liker_id: 3, 
  image_id: 25
})

like38 = Like.create({ 
  liker_id: 3, 
  image_id: 27
})

like39 = Like.create({ 
  liker_id: 3, 
  image_id: 29
})

like40 = Like.create({ 
  liker_id: 3, 
  image_id: 32
})

like41 = Like.create({ 
  liker_id: 3, 
  image_id: 36
})

like42 = Like.create({ 
  liker_id: 3, 
  image_id: 37
})

like43 = Like.create({ 
  liker_id: 3, 
  image_id: 39
})

like44 = Like.create({ 
  liker_id: 3, 
  image_id: 40
})

like45 = Like.create({ 
  liker_id: 3, 
  image_id: 52
})

like46 = Like.create({ 
  liker_id: 4, 
  image_id: 11
})

like47 = Like.create({ 
  liker_id: 4, 
  image_id: 19
})

like48 = Like.create({ 
  liker_id: 4, 
  image_id: 15
})

like49 = Like.create({ 
  liker_id: 4, 
  image_id: 22
})

like50 = Like.create({ 
  liker_id: 4, 
  image_id: 29
})

like51 = Like.create({ 
  liker_id: 5, 
  image_id: 12
})

like52 = Like.create({ 
  liker_id: 5, 
  image_id: 20
})

like53 = Like.create({ 
  liker_id: 5, 
  image_id: 16
})

like54 = Like.create({ 
  liker_id: 5, 
  image_id: 23
})

like55 = Like.create({ 
  liker_id: 5, 
  image_id: 30
})

like56 = Like.create({ 
  liker_id: 6, 
  image_id: 13
})

like57 = Like.create({ 
  liker_id: 6, 
  image_id: 21
})

like58 = Like.create({ 
  liker_id: 6, 
  image_id: 17
})

like59 = Like.create({ 
  liker_id: 6, 
  image_id: 24
})

like60 = Like.create({ 
  liker_id: 6, 
  image_id: 31
})

like61 = Like.create({ 
  liker_id: 7, 
  image_id: 15
})

like62 = Like.create({ 
  liker_id: 7, 
  image_id: 25
})

like63 = Like.create({ 
  liker_id: 7, 
  image_id: 36
})

like64 = Like.create({ 
  liker_id: 7, 
  image_id: 43
})

like65 = Like.create({ 
  liker_id: 7, 
  image_id: 50
})

like66 = Like.create({ 
  liker_id: 8, 
  image_id: 36
})

like67 = Like.create({ 
  liker_id: 9, 
  image_id: 43
})

like68 = Like.create({ 
  liker_id: 10, 
  image_id: 50
})

like69 = Like.create({ 
  liker_id: 11, 
  image_id: 50
})

like70 = Like.create({ 
  liker_id: 12, 
  image_id: 50
})

follow1 = Follow.create({
  follower_id: 1,
  followee_id: 2,
})

follow2 = Follow.create({
  follower_id: 1,
  followee_id: 3,
})

follow3 = Follow.create({
  follower_id: 1,
  followee_id: 4,
})

follow4 = Follow.create({
  follower_id: 1,
  followee_id: 5,
})

follow5 = Follow.create({
  follower_id: 1,
  followee_id: 6,
})

follow6 = Follow.create({
  follower_id: 1,
  followee_id: 7,
})

follow7 = Follow.create({
  follower_id: 1,
  followee_id: 8,
})

follow8 = Follow.create({
  follower_id: 1,
  followee_id: 9,
})

follow9 = Follow.create({
  follower_id: 1,
  followee_id: 10,
})

follow10 = Follow.create({
  follower_id: 2,
  followee_id: 3,
})

follow11 = Follow.create({
  follower_id: 2,
  followee_id: 5,
})

follow12 = Follow.create({
  follower_id: 2,
  followee_id: 6,
})

follow13 = Follow.create({
  follower_id: 3,
  followee_id: 4,
})

follow14 = Follow.create({
  follower_id: 3,
  followee_id: 6,
})

follow15 = Follow.create({
  follower_id: 3,
  followee_id: 7,
})

follow16 = Follow.create({
  follower_id: 4,
  followee_id: 5,
})

follow17 = Follow.create({
  follower_id: 4,
  followee_id: 7,
})

follow18 = Follow.create({
  follower_id: 4,
  followee_id: 8,
})

follow19 = Follow.create({
  follower_id: 5,
  followee_id: 11,
})

follow20 = Follow.create({
  follower_id: 5,
  followee_id: 8,
})

follow21 = Follow.create({
  follower_id: 5,
  followee_id: 9,
})

follow22 = Follow.create({
  follower_id: 6,
  followee_id: 1,
})

follow23 = Follow.create({
  follower_id: 6,
  followee_id: 2,
})

follow24 = Follow.create({
  follower_id: 6,
  followee_id: 3,
})

follow25 = Follow.create({
  follower_id: 7,
  followee_id: 4,
})

follow26 = Follow.create({
  follower_id: 7,
  followee_id: 6,
})

follow27 = Follow.create({
  follower_id: 7,
  followee_id: 7,
})

follow28 = Follow.create({
  follower_id: 8,
  followee_id: 4,
})

follow29 = Follow.create({
  follower_id: 9,
  followee_id: 6,
})

follow30 = Follow.create({
  follower_id: 10,
  followee_id: 7,
})

follow31 = Follow.create({
  follower_id: 11,
  followee_id: 4,
})

follow32 = Follow.create({
  follower_id: 11,
  followee_id: 6,
})

follow33 = Follow.create({
  follower_id: 11,
  followee_id: 7,
})

follow34 = Follow.create({
  follower_id: 11,
  followee_id: 8,
})

follow34 = Follow.create({
  follower_id: 11,
  followee_id: 1,
})