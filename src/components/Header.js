import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="container-wrapper">
      <h1 className="header__title">List of VGS employees</h1>
    </div>
  </header>
);

export default Header;


// <NavLink to="/" activeClassName="is-active" exact={true}>Main</NavLink>