import React from 'react'
import './AddTask.css'
import { useState } from 'react'

const Addtask = ( {onAdd, removeForm} ) => {
    const [text, setTask] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
      e.preventDefault()

      if(!text || !day){
        alert("Please add day and task")
        return
      }

      onAdd({text, day, reminder})

      setTask("");
      setDay("")
      setReminder(false);

      removeForm()
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Task</label>
        <input type="text" placeholder="Add task" value={text}
        onChange ={(e)=> setTask(e.target.value)}/>

        <label>Day and Time</label>
        <input type="date" placeholder="Add day and time" value={day}
        onChange={(e)=> setDay(e.target.value)}/>

        <label>Set reminder</label>
        <input type="checkbox" value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}/>

        <input type="submit" value="Save Task"/>
    </form>
  )
}

export default Addtask