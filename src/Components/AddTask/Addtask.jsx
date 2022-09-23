import React from 'react'
import './AddTask.css'
import { useState } from 'react'

const Addtask = ( {onAdd, removeForm} ) => {
    const [text, setTask] = useState("")
    const [day, setDay] = useState("")
    const [time, setTime] = useState("00:00")
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
      e.preventDefault()

      if(!text || !day || !time){
        alert("Please add day and task")
        return
      }

      onAdd({text, day, reminder, time})

      setTask("");
      setDay("");
      setTime("00:00")
      setReminder(false);
      removeForm()
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Task <span>*</span></label>
        <input type="text" placeholder="Add task" value={text}
        onChange ={(e)=> setTask(e.target.value)}/>

        <label>Day and Time <span>*</span></label>
        <div className='time-date'>
        <input type="date" placeholder="Add day and time" value={day}
        onChange={(e)=> setDay(e.target.value)}/>
        <input type="time" value={time} onChange={(e)=> setTime(e.target.value)}/>
        </div>

        <label>Set reminder</label>
        <input type="checkbox" value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}/>

        <input type="submit" value="Save Task"/>
    </form>
  )
}

export default Addtask