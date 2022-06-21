import React from 'react';
import { Switch, Route } from 'react-router';
import Logo from './header/logo';
import HeaderContainer from './header/header_container';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from './splash_page';

const App = () => (
  <div>
    <header>
      <Logo />
      <HeaderContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute path="/login" component={login_form_container} />
      <AuthRoute path="/signup" component={signup_form_container} />
    </Switch>
  </div>
)

export default App;