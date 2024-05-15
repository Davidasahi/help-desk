import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">Admin</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
