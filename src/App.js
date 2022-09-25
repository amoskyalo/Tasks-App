import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Tasks from './Components/Tasks/Tasks';
import Addtask from './Components/AddTask/Addtask';
import Landing from './Components/Loading/Landing';
import Counter from './Components/Counter/Counter';


function App() {
  //setting up the Nav
  const [showNav, setNav] = useState(false)
  let [taskLength, setTaskLength] = useState(0)

  //setting state fo the events
  const [tasks, setTasks] = useState([])

  //setting up favorite tasks
  const [favTask, setFavTask] = useState([]);
  const addFavTask = (id) =>{
    tasks.map( (task) => !favTask.includes(task) && task.id === id ? 
    setFavTask([...favTask,task]) : "") 
  }

  // counter for fav tasks
  const taskLengthFunc = () =>{
    setTaskLength( taskLength = favTask.length)
  }

  //setting state for fav
  const [favShow, setFav] = useState(false);
  const showFavFunc = () =>{
    setFav(!favShow)
  }
  favShow ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
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

  //cancel nav bar
  const removeBar = () =>{
    setNav(!showNav)
  }

 
  return (
    <div className='app'>
      <Header  showNav={()=> setNav(!showNav)}/>

      {showNav ? <Nav showFunc={()=> setForm(!showForm) & setNav(!showNav) }
      taskLength={taskLengthFunc} removeBar={removeBar} taskCounter ={taskLength}
      showFav={showFavFunc}/> : ""}

      {favShow ? <Counter favTasks={favTask} deleteFav={deleteFav} cancel={showFavFunc}/> : ""}

      {showForm ? <Addtask onAdd={addNewEvent} removeForm={()=> setForm(!showForm)}/> : ''}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} setReminder={setReminder}
      addFavTask={addFavTask} favTask={favTask}/> : <Landing />}
    </div>
  );
}

export default App;
