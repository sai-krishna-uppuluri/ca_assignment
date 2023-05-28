import React from 'react'

import global from '../app/globals.css'

import navstyles from '../styles/navstyles.css'


function Navbar() {
  return (
    <nav className='uni-padding nav-con'>
      <div className='logo-con'>
        <h1> Praksh & raja garu</h1>
        <p> Charted accountants </p>
      </div>
      <ul className='menu-list'>
        <li> About Us </li>
        <li>our Team </li>
        <li className='service-dropdown'> 
          <a>Services</a>
          <div className='sub-menu-list'>
            <ul>
              <li> consulting </li>
              <li>Accounting </li>
              <li> Assurance</li>
              <li> tax</li>
            </ul>
          </div>
        </li> 
        <li>Work with us </li>
        <li> Contact Us </li>
        </ul>
    </nav>

  )
}

export default Navbar
