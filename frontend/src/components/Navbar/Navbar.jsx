
import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowSignup, userName, setUserName }) => {
  const [menu, setMenu] = useState('menu');
  const { cartItems } = useContext(StoreContext);


  // Count total cart items
  const cartItemCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const handleLogout = () => {
    setUserName('');
    localStorage.removeItem('auth-token');
    alert('You have been logged out!');
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart" className="cart-link">
            <img src={assets.basket_icon} alt="cart" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </div>

        {userName ? (
          <div className="navbar-user">
            <span className="navbar-welcome">👋 {userName}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="sign-in-btn" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
