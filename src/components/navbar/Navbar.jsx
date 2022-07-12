import React from 'react';
import { RiMenu3Line, RiClosedLine } from 'react-icons/ri';
import logo from '../../assets/icon.png';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='liambo__navbar'>
      <div className='liambo__navbar-links'>
        <div className='liambo__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='liambo__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#cv'>Curriculum Vitae</a></p>
          <p><a href='#projects'>Projects</a></p>
          <p><a href='https://github.com/Liambo'>Github</a></p>
          <p><a href='#contact'>Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar