import React from 'react'
import Button from '../Buttons/Button'
import './Header.css'

const Header = ( {showFunc} ) => {
  return (
    <header>
        <h2>Task Tracker</h2>
        <Button color="red" text="Add event" clickFunc={showFunc} />
    </header>
  )
}

export default Header