import React from 'react'
import Button from '../Buttons/Button'
import './Nav.css'
import { MdOutlinePostAdd } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { BsFillAlarmFill } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import logo from './logo.png'


const Nav = ( {showFunc, showNav, taskLength} ) => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <img src={logo} alt="logo img"/>
            <h3>Task <span>Tracker</span></h3>
        </div>
        <div className='nav-link'>
            <MdOutlinePostAdd className='icon'/>
            <Button color="red" text="Add New Task" className="nav-button" clickFunc={showFunc}/>
        </div>
        <div className='nav-link'>
            <AiFillStar className='icon'/>
            <Button color="green" text="Favorite Tasks" className="nav-button"/>
            <p className='num'>{taskLength}</p>
        </div>
        <div className='nav-link'>
            <BsFillAlarmFill className='icon'/>
            <Button color="blue" text="Reminders" className="nav-button"/>
        </div>
        <div className='nav-footer'>
            <a href="https://twitter.com/_amos_kyalo"><SiTwitter className='footer-icon'/></a>
        </div>
    </div>
  )
}

export default Nav