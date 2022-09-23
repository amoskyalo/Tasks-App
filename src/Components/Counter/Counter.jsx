import React from 'react'
import './Counter.css'

const Counter = ( {count} ) => {
  return (
    <div className='count'>
        <h2>Important:</h2>
        <p>{count}</p>
    </div>
  )
}

export default Counter