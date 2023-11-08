import { useState } from "react"
import TaskForm from "./components/TaskForm"
import Task from "./components/Tasks"

const App = () => {
  const [tasksList, setTasksList] = useState([])

  return (
    <div className="md:mb-20 transform scale-90 md:scale-100">
      <h2 className="font-serif mt-2 mb-6 md:mt-20 md:mb-12 uppercase text-center text-4xl md:text-5xl md:transform md:scale-105 font-bold" >Task List</h2>
      <TaskForm setTasksList={setTasksList} tasksList={tasksList} />
      {tasksList.length === 0 && <p>No tasks</p>}
      {tasksList.length > 0 &&
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          {
            tasksList.map(task => (
              <Task className="px-4 py-1"key={task.id} task={task} tasksList={tasksList} setTasksList={setTasksList} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default App
