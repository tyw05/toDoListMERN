import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import Login from "./components/Login"
import Task from "./components/Tasks"
import Register from "./components/Register"
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom'
import taskService from './services/tasks'

const App = () => {
  const [tasksList, setTasksList] = useState([])
  const [selected, setSelected] = useState('All')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedinUser')
    if (loggedInUser) {
      const loggedUser = JSON.parse(loggedInUser)
      setUser(loggedUser)
      taskService.setToken(loggedUser.token)
    }
  }, [])

  useEffect(() => {
    if(user){
    taskService.getAll()
    .then(res => {
      setTasksList(res.filter(task => task.user.username === user.username))
    })
  }
  },[user])

  const showAll = () => {
    setSelected('All')
  }

  const showNotFinished = () => {
    setSelected('NotFinish')
  }

  const showFinished = () => {
    setSelected('Finished')
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedinUser')
    setUser(null)
  }
  const FilteredTasks = () => {

    if (selected == 'Finished') {
      const filteredList = tasksList.filter(task => task.finished)
      return (
        filteredList.map(task => (
          <Task className="px-4 py-1" key={task.id} task={task} tasksList={tasksList} setTasksList={setTasksList} />
        ))
      )
    }
    else if (selected == 'NotFinish') {
      const filteredList = tasksList.filter(task => !task.finished)
      return (
        filteredList.map(task => (
          <Task className="px-4 py-1" key={task.id} task={task} tasksList={tasksList} setTasksList={setTasksList} />
        ))
      )
    }
  }

  const AllTasks = () => {

    return (
      tasksList.map(task => (
        <Task className="px-4 py-1" key={task.id} task={task} tasksList={tasksList} setTasksList={setTasksList} />
      ))
    )
  }

  const TaskList = () => {
    return (
      <>
        <TaskForm setTasksList={setTasksList} user={user} />
        {tasksList.length === 0 && <p></p>}
        {tasksList.length > 0 &&
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <ul className="flex text-center font-bold">
              <li className={`${selected === 'All' ? 'text-black ' : 'text-gray-400'} py-4 flex-grow cursor-pointer filter-active transition duration-75`} onClick={showAll}>All</li>
              <li className={`${selected === 'NotFinish' ? 'text-black' : 'text-gray-400'} py-4 flex-grow cursor-pointer filter-active transition duration-75`} onClick={showNotFinished}>To Be Done</li>
              <li className={`${selected === 'Finished' ? 'text-black' : 'text-gray-400'} py-4 flex-grow cursor-pointer filter-active transition duration-75`} onClick={showFinished}>Finished</li>
            </ul>
            {selected === 'All' && AllTasks()}
            {(selected === 'Finished' || selected === 'NotFinish') && FilteredTasks()}
          </div>
        }
      </>
    )
  }

  return (
    <Router>
      {user !== null &&
        <div className="absolute right-6 top-5 font-bold">
          {user.name} logged in
          <button className="bg-yellow hover:text-white text-black font-bold py-2 px-4 rounded" onClick={handleLogout}>
            Sign Out
          </button>
        </div>}
      <div className="md:mb-20 transform scale-90 md:scale-100 w-96">
        <h2 className="font-bam mt-2 mb-6 md:mt-20 md:mb-12 uppercase text-center text-4xl md:text-5xl md:transform md:scale-105 font-bold" >TO-DO List</h2>
        {user === null &&
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        }
        {user !== null && <TaskList />}
      </div>
    </Router>
  )
}

export default App
