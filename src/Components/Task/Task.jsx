import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Task.css'
import Button from '../Buttons/Button'

const Task = ( {task, onDelete, setReminder} ) => {
  return (
    <div className={`task ${task.reminder ? `reminder` : " "}`}>
        <h2 className='header'>{task.text} <FaTimes className='delete' onClick={() => onDelete(task.id)} /></h2>
        <p>{task.day}</p>
        {!task.reminder ? <Button color="green" text="Add reminder" clickFunc={()=>setReminder(task.id)} /> :
        <Button color="green" text="Remove reminder" clickFunc={()=>setReminder(task.id)} />}
    </div>
  )
}

export default Task