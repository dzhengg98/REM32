import React from 'react';
import { Switch, Route } from 'react-router';
import NavBarContainer from './header/nav_bar_container';
import Footer from './footer/footer';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from './splash/splash_page';
import Home from './splash/home_page';
import ErrorPage from './404/404_page';
import image_create_form_container from './Images/image_create_form_container';
import image_show_container from './Images/image_show_container';
import image_update_form_container from './Images/image_update_form_container';
import user_show_container from './users/user_show_container';
import user_update_form_container from './users/user_update_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/" exact component={Splash} />
      <ProtectedRoute path="/home" component={Home} />
      <AuthRoute path="/login" component={login_form_container} />
      <AuthRoute path="/signup" component={signup_form_container} />
      <ProtectedRoute path="/images/new" exact component={image_create_form_container} />
      <ProtectedRoute path="/images/:imageId" exact component={image_show_container} />
      <ProtectedRoute path="/images/:imageId/edit" component={image_update_form_container} />
      <ProtectedRoute path="/users/:userId" exact component={user_show_container} />
      <ProtectedRoute path="/users/:userId/edit" component={user_update_form_container} />
      <ErrorPage />
    </Switch>
    <Footer />
  </div>
)

export default App;