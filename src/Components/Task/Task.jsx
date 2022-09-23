import React from 'react'
import './Task.css'
import Button from '../Buttons/Button'
import {MdDelete} from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

const Task = ( {task, onDelete, setReminder, addCart} ) => {
  return (
    <div className={`task ${task.reminder ? `reminder` : " "}`}>
        <h2 className='header'>{task.text} <MdDelete className='delete' onClick={() => onDelete(task.id)} /></h2>
        <p>{task.day}</p>
        {!task.reminder ? <Button className ="btn" color="green" text="Add reminder" clickFunc={()=>setReminder(task.id)} /> :
        <Button  className="btn" color="green" text="Remove reminder" clickFunc={()=>setReminder(task.id)} />}
        <AiFillStar onClick={addCart} className ="cart"/>
    </div>
  )
}

export default Task