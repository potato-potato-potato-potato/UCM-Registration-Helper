import React from 'react';
import './Navbar.css';
import LogoButton from '../logoButton.js'

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <LogoButton />
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/"></a>
      </li>
      <li>
        <a href="/Calendar">Calendar</a>
      </li>
      <li>
        <a href="/"></a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count"></span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
);
};

export default Navbar;