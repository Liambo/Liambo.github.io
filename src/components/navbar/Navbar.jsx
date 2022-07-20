import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/icon.png';

import './navbar.css';

const Menu = () => (
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cv'>Curriculum Vitae</NavLink></li>
    <li><NavLink to='/projects'>Projects</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
  </ul>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='liambo__navbar'>
      <div className='liambo__navbar-links'>
        <div className='liambo__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='liambo__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='liambo__navbar-menu'>
        <div className='liambo__navbar-menu_symbol'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
        </div>
        {toggleMenu && (
          <div className='liambo__navbar-menu_container scale-up-center'>
            <div className='liambo__navber-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar