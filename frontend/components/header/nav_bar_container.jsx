import React from 'react';
import Logo from './logo';
import HeaderContainer from './header_container';

const NavBarContainer = () => {
  return (
    <nav>
      <header>
        <Logo />
        <HeaderContainer />
      </header>
    </nav>
  )
}

export default NavBarContainer;