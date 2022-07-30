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

![](./app/assets/images/user-auth.gif)

New Users can sign up with a new account or try the demo user, returning users can log in. The Demo User Sign in uses a set timeout function to visualize a user login and displays both the user and password signup as if a user was actually signning in.

<details>
  <summary>Check out the User Authentication Code </summary>

```javascript
const demoLogin = (e) => {
  e.preventDefault();
  displayUsername();
};

const displayUsername = () => {
  let i = 0;
  const demousername = "demoUser";

  const username = setInterval(() => {
    setState({ username: demousername.slice(0, i + 1) });

    if (i >= demousername.length - 1) {
      clearInterval(username);
      displayPassword();
    }
    i++;
  }, 100);
};

const displayPassword = () => {
  let j = 0;
  const demopassword = "demouser";

  const password = setInterval(() => {
    setState({ password: demopassword.slice(0, j + 1) });

    if (j >= demopassword.length - 1) {
      clearInterval(password);
      demoUserLogin({ username: "demoUser", password: "demouser" }).then(() => {
        setState({ username: "", password: "" });
      });
    }
    j++;
  }, 100);
};

const renderDemoLogin = () => {
  return (
    <input
      type="submit"
      className="button"
      onClick={demoLogin}
      value="Demo User"
    />
  );
};
```

</details>

</br>
</br>

### Image Uploading

![](./app/assets/images/Image-Uploading.gif)

Logged in Users can upload images to the site where the images are hosted through AWS. They can give the images a title and description and on the Image Show page they can view the image along with additional contents. The images are also filtered and organized to ensure the lastest upload appears first on the home page.

<details>
  <summary>Checkout the image uploading code</summary>

```javascript
const handleFile = (e) => {
  e.preventDefault();
  const fileReader = new FileReader();
  const file = e.currentTarget.files[0];

  fileReader.onloadend = () => {
    setState((prevState) => {
      return { ...prevState, imageFile: file };
    });
    setState((prevState) => {
      return { ...prevState, imageUrl: fileReader.result };
    });
  };

  if (file) {
    fileReader.readAsDataURL(file);
  } else {
    setState({ ...state }, { imageFile: null });
    setState({ ...state }, { imageUrl: null });
  }
};

const handleImageSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  if (state.imageFile) {
    formData.append("image[title]", state.title);
    formData.append("image[description]", state.description);
    formData.append("image[image]", state.imageFile);
  }
  createImage(formData).then(() => {
    history.push(`/`);
  });
};
```

</details>

</br>
</br>

### Comments/Likes

Logged in Users can leave comments and likes on Images they like/see. Comments can be edited and deleted quickly while Likes can be removed/readded.

![](./app/assets/images/Comments-Likes.gif)

### User Profile & Followers/Followings

Users can view other users profile pages where they have access to images other user uploads, additionally they can follow/unfollow the user as well as viewing the user's followers and followings. Case statement method was implemented through the user navigation bar for a quick and fast time(Best: O(1) Worst: O(n)) and the state was changed based on which was clicked.

![](./app/assets/images/User-Profile.gif)

<h2 id="future-plans">Future plans</h2>

- Implement tags to help make images unique and more informative.
- Implement search functionality to enable users to search images via title, and tags.
