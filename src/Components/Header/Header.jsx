import React from 'react'
import logo from './logo.png'
import { BiMenuAltLeft } from 'react-icons/bi'
import './Header.css'

const Header = ( {showNav} ) => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='header-icon'>
        <BiMenuAltLeft className='icons'onClick={showNav} />
        <h2>Task Tracker</h2>
      </div>
    </header>
  )
}

export default Header