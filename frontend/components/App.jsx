import React from 'react';
import { Switch, Route } from 'react-router';
import NavBarContainer from './header/nav_bar_container';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from './splash/splash_page';
import Home from './splash/home_page';
import ErrorPage from './404/404_page';
import image_form_container from './Images/image_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/" exact component={Splash} />
      <ProtectedRoute path="/home" component={Home} />
      <AuthRoute path="/login" component={login_form_container} />
      <AuthRoute path="/signup" component={signup_form_container} />
      <ProtectedRoute path="/images/new" component={image_form_container} />
      <ErrorPage />
    </Switch>
  </div>
)

export default App;