import React from 'react'
import './Counter.css'

const Counter = ( {favTasks} ) => {
  return (
    <div className='count'>
        <h2>Favorite Tasks</h2>
        {favTasks.map( (favTask) => (
            <ul>
                <li key={favTask.id}>{favTask.text}</li>
            </ul>
        ))}
    </div>
  )
}

export default Counter