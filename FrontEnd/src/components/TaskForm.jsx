import { useState } from "react"
import taskService from '../services/tasks'
import PropTypes from 'prop-types'

const TaskForm = ({ setTasksList, user }) => {
    const [newTask, setNewTask] = useState('')

    const addTask = async (event) => {
        event.preventDefault()
        if(newTask === ""){
            alert("Task cannot be empty")
            return
        }
        await taskService.create({ content: newTask, finished: false })
        const newTasksList = await taskService.getAll()
        setTasksList(newTasksList.filter(task => task.user.username === user.username))
        setNewTask('')
    }

    const handleKey = (event) => {
        if (event.keyCode === 13) {
            addTask(event)
        }
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <label className="mb-3 flex items-center bg-white rounded-xl overflow-hidden shadow-2xl">
                    <input placeholder="add new task here" className="outline-none pl-7 pr-4 py-3 flex-grow md:text-lg tracking-wide md:tracking-wider border-none focus:ring-0 placeholder-gray-400" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => handleKey(e)} autoFocus></input>
                    <button className="mr-1 w-11 h-11 text-3xl text-white bg-gray-800 rounded-xl focus:outline-none" type="submit">+</button>
                </label>
            </form>
        </div>
    )



}

TaskForm.propTypes = {
    setTasksList: PropTypes.func,
    user: PropTypes.object
}

export default TaskForm