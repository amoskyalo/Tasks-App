import React from 'react'
import './Counter.css'
import { TiCancel } from 'react-icons/ti'

const Counter = ( {favTasks, deleteFav} ) => {
  return (
    <div className='count'>
        <h2>Favorite Tasks</h2>
        {favTasks.map( (favTask) => (
            <ul>
               <li className='fav' key={favTask.id}>{favTask.text} 
               <TiCancel onClick={()=> deleteFav(favTask.id)} className='cancel'/></li>
            </ul>
        ))}
    </div>
  )
}

export default Counter