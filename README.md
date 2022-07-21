<h1>README</h1>

Welcome to the REM32!, an <a href="https://www.500px.com/" target="_blank" rel="noopener noreferrer">500px</a> inspired Full-Stack single-page website where you can browse photos, user profiles and add comments.

<a href="https://rem32.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">Live Link</a>

![](./app/assets/images/readme-main.gif)

<h2 id="table-of-contents">Table of Contents</h2>

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Future Plans](#future-plans)

<h2 id="technologies-used">Technologies used</h2>

- Front End: React, Redux

  - Used to support front-end handling of images, user profiles, likes/comments and follows
  - Supports the persistence of state to `local storage` on uploading images to the site whether through user profile image, user cover image or a generic image post

- Back End: Postgresql, Ruby on Rails

  - Handles User Authentication via session tokens where the requests works in tandem with the front-end to log/sign the user in
  - Uses a PostgreSQL database and Ruby on Rails backend to give access to the back-end server to change the database whenever needed/

- Other: Amazon AWS S3, JavaScript

  - AWS S3 handles the image hosting to allow for a more dynamic and scalability of the application as well as reducing the server load.

- Hosting: Heroku
  - The project was hosted on heroku.

<h2 id="features">Features</h2>

### User Authentication

New Users can sign up with a new account or try the demo user, returning users can log in. The Demo User Sign in uses a set timeout function to visualize a user login and displays both the user and password signup as if a user was actually signning in.

![](./app/assets/images/user-auth.gif)

### Image Uploading

Logged in Users can upload images to the site where the images are hosted through AWS. They can give the images a title and description and on the Image Show page they can view the image along with additional contents. The images are also filtered and organized to ensure the lastest upload appears first on the home page.

![](./app/assets/images/Image-Uploading.gif)

### Comments/Likes

Logged in Users can leave comments and likes on Images they like/see. Comments can be edited and deleted quickly while Likes can be removed/readded.

![](./app/assets/images/Comments-Likes.gif)

### User Profile & Followers/Followings

Users can view other users profile pages where they have access to images other user uploads, additionally they can follow/unfollow the user as well as viewing the user's followers and followings. Case statement method was implemented through the user navigation bar for a quick and fast time(Best: O(1) Worst: O(n)) and the state was changed based on which was clicked.

![](./app/assets/images/User-Profile.gif)

<h2 id="future-plans">Future plans</h2>

- Implement tags to help make images unique and more informative.
- Implement search functionality to enable users to search images via title, and tags.
