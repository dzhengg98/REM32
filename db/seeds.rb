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

user3 = User.create!({
  username: "king da ka",
  password: "123456",
  first_name: "KinKa",
  last_name: "Tse",
  city: "New York City",
  about: "I like anime",
  country: "United States"
})

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

user5 = User.create!({
  username: "Ayce in Space",
  password: "123456",
  first_name: "Ayce",
  last_name: "LaCap",
  city: "San Francisco",
  about: "I appreciate how drastically technology has improved the quality of life.",
  country: "United States",
})

user6 = User.create!({
  username: "JWong",
  password: "123456",
  first_name: "Jonathan",
  last_name: "Wong",
  city: "Union",
  about: "Hi! My name is Jonathan Wong, and I am a Full-Stack developer.",
  country: "United States"
})

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

user8 = User.create!({
  username: "cumbersomecete",
  password: "123456",
  first_name: "Ken",
  city: "Oakland",
  country: "United States",
  facebook: "www.facebook.com/ken"
})

user9 = User.create!({
  username: "boxerssubmit",
  password: "123456",
  first_name: "James",
  about: "I do not know what to say",
  country: "Italy",
})

user10 = User.create!({
  username: "terrorriband",
  password: "123456",
  first_name: "Chynna",
  last_name: "Varhe",
  country: "Germany",
  about: "I like taking pictures"
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