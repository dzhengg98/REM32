<h1>README</h1>

Welcome to the REM32!, an <a href="https://www.500px.com/" target="_blank" rel="noopener noreferrer">500px</a> inspired Full-Stack single-page website where you can browse photos, user profiles and add comments.

<a href="https://rem32.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">Live Link</a>

![](./app/assets/images/readme-main.gif)

<h2 id="table-of-contents">Table of Contents</h2>

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Future Plans](#future-plans)

<h2 id="features">Features</h2>

### User Authentication

New Users can sign up with a new account or try the demo user, returning users can log in.

![](./app/assets/images/user-auth.gif)

### Image Uploading

Logged in Users can upload images to the site where the images are hosted through AWS. They can give the images a title and description and on the Image Show page they can view the image along with additional contents.

![](./app/assets/images/Image-Uploading.gif)

### Comments/Likes

Logged in Users can leave comments and likes on Images they like/see. Comments can be edited and deleted quickly while Likes can be removed/readded.

![](./app/assets/images/Comments-Likes.gif)

### User Profile & Followers/Followings

Users can view other users profile pages where they have access to images other user uploads, additionally they can follow/unfollow the user as well as viewing the user's followers and followings.

![](./app/assets/images/User-Profile.gif)

<h2 id="technologies-used">Technologies used</h2>

- Front End: React, Redux

- Back End: Postgresql, Ruby on Rails

- Other: Amazon AWS S3, JavaScript

- Hosting: Heroku

<h2 id="future-plans">Future plans</h2>

- Implement tags to help make images unique and more informative.
- Implement search functionality to enable users to search images via title, and tags.
