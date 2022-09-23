import React from 'react'
import Task from '../Task/Task'

const Tasks = ( {tasks, onDelete, setReminder, addCart}) => {
  return (
    <>
        {tasks.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDelete} setReminder={setReminder} 
            addCart={addCart}/>
        ))}
    </>
  )
}

export default Tasks