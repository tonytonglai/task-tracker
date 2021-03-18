// import PropTypes from 'prop-types' 
// not sure what this is used for, but apparently it's useful?

// JSX Java Syntactical Sugar can only have ONE parent element (the div, generally)
// also, for and class are KEYWORDS in JavaScript. Hence the use of
//  HTMLfor and className instead.

// States get passed down, actions get passed up

import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  
  useEffect(() => {
    const getTasks = async () => {
      const TasksFromServer = await fetchTasks()
      setTask(TasksFromServer)
    }
    getTasks()
  }, []) // just in case nothing shows up....

  // utilizing a RESTful API
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data

  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data

  }

  // TO delete task...
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTask(tasks.filter(task => task.id !== id))
  }

  // toggle reminder...
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...tasks, taskToToggle, reminder: !taskToToggle.reminder}
    // console.log(id)

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(updTask)
      
    })
    const data = await res.json()
    setTask(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // adds tasks...
  const addTask = async (task) => { // probably want to create some object that will insert the task into tasks...
    const res = await fetch("http://localhost:5000/tasks",{
      method: "POST",
      headers: {
        'Content-type' : "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTask([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task}
    // setTask([...tasks, newTask])
  }

  // toggles add button
  const toggleAdd = () => {
    setShowAdd(!showAdd)
  }

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTask] = useState([])

  return (
    <div className="container">
      <Header toggleAdd={toggleAdd} showAdd={showAdd}/>
      {showAdd && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}
        /> : 'No tasks to show'
      }
    </div>
  );
}

export default App;
