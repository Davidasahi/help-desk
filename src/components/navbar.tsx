import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
