import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tasks from './Components/Tasks/Tasks';
import Addtask from './Components/AddTask/Addtask';
import Landing from './Components/Loading/Landing';

function App() {
  //setting state fo the events
  const [tasks, setTasks] = useState([]);

  //setting the state of the form
  const [showForm, setForm] = useState(false);

  //Adding new Task
  const addNewEvent = (task) =>{
    const id = Math.floor(Math.random() * 100000);
    const newEvent = {id, ...task};
    setTasks([...tasks, newEvent])
  }


  //Deleting tasks
  const onDelete = (id) =>{
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  //Setting up reminders
  const setReminder = (id) =>{
    setTasks(tasks.map( (task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className='app'>
      <Header  showFunc={()=> setForm(!showForm)} />
      {showForm ? <Addtask onAdd={addNewEvent}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} setReminder={setReminder}/> : <Landing />}
    </div>
  );
}

export default App;
