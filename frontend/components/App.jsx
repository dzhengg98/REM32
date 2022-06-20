import React from 'react';
import { Route } from 'react-router';
import Logo from './header/logo';
import HeaderContainer from './header/header_container';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <Logo />
      <HeaderContainer />
    </header>

    <AuthRoute path="/login" component={login_form_container} />
    <AuthRoute path="/signup" component={signup_form_container} />
  </div>
)

export default App;