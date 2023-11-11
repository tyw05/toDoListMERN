import { useState, useEffect } from "react"
import Edit from "../assets/Edit"
import Save from "../assets/Save"
import Remove from "../assets/Remove"
import PropTypes from 'prop-types'
import taskService from '../services/tasks'
const Task = ({ task, tasksList, setTasksList }) => {
    const [disable, setDisableButton] = useState(true)
    const [taskContent, setTaskContent] = useState(task.content)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (task.finished === true) {
            setChecked(true)
        }
    }, [])

    const saveTask = () => {
        const updatedTasksList = tasksList.map(t => t.id == task.id ? { ...t, content: taskContent } : t)
        taskService.update(task.id, {content: taskContent })
        setDisableButton(true)
        setTasksList(updatedTasksList)
    }

    const editTask = () => {
        if (!disable) {
            setDisableButton(true)
        }
        else {
            setDisableButton(false)
        }
    }

    const removeTask = () => {
        if (window.confirm(`Remove Task ${taskContent} ?`)) {
            const filteredList = tasksList.filter(t => t.id !== task.id)
            taskService.remove(task.id)
            setTasksList(filteredList)
        }
    }

    const checkTask = () => {
        if (!checked) {
            setChecked(true)
            const updatedTasksList = tasksList.map(t => {
                const result = t.id === task.id
                    ? { ...t, finished: true }
                    : t
                return result
            })
            taskService.update(task.id, {finished: true })
            console.log(updatedTasksList)
            setTasksList(updatedTasksList)
        }
        else {
            setChecked(false)
            const updatedTasksList = tasksList.map(t => {
                const result = t.id === task.id
                    ? { ...t, finished: false }
                    : t
                return result
            })
            taskService.update(task.id, {finished: false })
            console.log(updatedTasksList)
            setTasksList(updatedTasksList)
        }
    }

    return (
        <div className="flex">
            <label className="flex-grow-0 px-3 py-4 cursor-pointer">
                <input checked={checked} className="-mt-1 " type="checkbox" onChange={checkTask} />
            </label>
            <input className={`${checked ? 'line-through ' : ' '}flex-grow disabled:bg-white bg-gray-100`} value={taskContent} disabled={disable} onChange={(e) => setTaskContent(e.target.value)} ></input>
            <div className="flex-grow">
                {disable && <Edit editTask={editTask} />}
                {!disable && <Save saveTask={saveTask} />}
                <Remove removeTask={removeTask} />
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object,
    tasksList: PropTypes.array,
    setTasksList: PropTypes.func
}

export default Task