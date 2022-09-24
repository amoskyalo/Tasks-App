import React from 'react'
import Task from '../Task/Task'
import './Tasks.css'

const Tasks = ( {tasks, onDelete, setReminder, addFavTask}) => {
  return (
    <div className='body'>
        {tasks.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDelete} setReminder={setReminder}
            addFavTask={addFavTask}/>
        ))}
    </div>
  )
}

export default Tasks