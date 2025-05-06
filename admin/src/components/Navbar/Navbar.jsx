import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-section'>
        <img className='logo' src={assets.logo} alt="Logo" />
        <p className='admin-label'>Admin Panel</p>
      </div>
      <img className='profile' src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar
