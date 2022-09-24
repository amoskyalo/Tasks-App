import React from 'react'
import './Counter.css'
import { TiCancel } from 'react-icons/ti'
import { ImCancelCircle } from 'react-icons/im'

const Counter = ( {favTasks, deleteFav, cancel} ) => {
  return (
    <div className='count'>
      <ImCancelCircle className='count-cancel' onClick={cancel}/>
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