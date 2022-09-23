import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tasks from './Components/Tasks/Tasks';
import Addtask from './Components/AddTask/Addtask';
import Landing from './Components/Loading/Landing';
import Counter from './Components/Counter/Counter';


function App() {
  //setting state fo the events
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "Cooking",
    //   day: "Monday 26th 2022",
    //   reminder: false,
    //   like: false
    // },
    // {
    //   id: 2,
    //   text: "Video gaming",
    //   day: "Monday 26th 2022",
    //   reminder: false,
    //   like: false
    // },
    // {
    //   id: 4,
    //   text: "Running",
    //   day: "Monday 26th 2022",
    //   reminder: false,
    //   like: false
    // }
  ]);

  //setting up favorite tasks
  const [favTask, setFavTask] = useState([]);

  const addFavTask = (id) =>{
    tasks.map( (task) => !favTask.includes(task) && task.id === id ? 
    setFavTask([...favTask,task]) : "") 
  }

  //clearing up favorite tasks
  const deleteFav = (id) =>{
    setFavTask(favTask.filter( (fav) => fav.id !== id))
  }


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
      <Header  showFunc={()=> setForm(!showForm)}/>
      {favTask.length > 0 ? <Counter favTasks={favTask} deleteFav={deleteFav}/> : ""}
      {showForm ? <Addtask onAdd={addNewEvent} removeForm={()=> setForm(!showForm)}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} setReminder={setReminder}
      addFavTask={addFavTask} favTask={favTask}/> : <Landing />}
    </div>
  );
}

export default App;
