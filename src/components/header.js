import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className='header-wrap'>
        <NavLink to='/' className='nav-button'>HOME</NavLink>
        <NavLink to='/about' className='nav-button'>ABOUT</NavLink>
        <NavLink to='/projects' className='nav-button'>PROJECTS</NavLink>
        <NavLink to='/contact' className='nav-button'>CONTACT</NavLink>
    </div>
  )
}
