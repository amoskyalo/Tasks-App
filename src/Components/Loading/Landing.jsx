import React from 'react'
import './Loading.css'
import { ImSpinner9 } from 'react-icons/im'

const Landing = () => {
  return (
    <div className='load'>
        <p>No tasks to show. Click Add Event to add new event</p>
        <div className='spin'>
            <ImSpinner9 className='spinner'/>
        </div>
    </div>
  )
}

export default Landing