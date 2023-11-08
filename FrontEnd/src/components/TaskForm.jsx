import { useState } from "react"
import PropTypes from 'prop-types'

const TaskForm = ({ setTasksList, tasksList }) => {
    const [newTask, setNewTask] = useState('')

    const addTask = (event) => {
        event.preventDefault()
        setTasksList(tasksList.concat({ content: newTask, id: tasksList.length + 1 }))
        setNewTask('')
    }
    
    const handleKey= (event) => {
        if (event.keyCode === 13){
            addTask(event)
        }
    }
    
    return (
        <div>
            <form onSubmit={addTask}>
                <label className="mb-3 flex items-center bg-white rounded-xl overflow-hidden shadow-2xl">
                    <input className="outline-none pl-7 pr-4 py-3 flex-grow md:text-lg tracking-wide md:tracking-wider border-none focus:ring-0 placeholder-gray-400" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => handleKey(e)} autoFocus></input>
                    <button className="mr-1 w-11 h-11 text-3xl text-white bg-gray-800 rounded-xl focus:outline-none" type="submit">+</button>
                </label>
            </form>
        </div>
    )



}

TaskForm.propTypes = {
    setTasksList: PropTypes.func,
    tasksList: PropTypes.array
}

export default TaskForm