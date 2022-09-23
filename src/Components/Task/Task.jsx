import React from 'react'
import './Task.css'
import Button from '../Buttons/Button'
import {MdDelete} from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

const Task = ( {task, onDelete, setReminder, addFavTask} ) => {
  return (
    <div className={`task ${task.reminder ? `reminder` : " "}`}>
        <h2 className='header'>{task.text} <MdDelete className='delete' onClick={() => onDelete(task.id)} /></h2>
        <p>{task.day} at {task.time}</p>
        {!task.reminder ? <Button className ="button" color="green" text="Add reminder" clickFunc={()=>setReminder(task.id)} /> :
        <Button  className="button" color="green" text="Remove reminder" clickFunc={()=>setReminder(task.id)} />}
        <AiFillStar onClick={()=>addFavTask(task.id)} className ="cart"/>
    </div>
  )
}

export default Task