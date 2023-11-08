import { useState } from "react"
import Edit from "../assets/Edit"
import Save from "../assets/Save"
import Remove from "../assets/Remove"
import PropTypes from 'prop-types'

const Task = ({ task, tasksList, setTasksList }) => {
    const [disable, setDisableButton] = useState(true)
    const [taskContent, setTaskContent] = useState(task.content)

    const editTask = () => {
        if (!disable) {
            setDisableButton(true)
        }
        else {
            setDisableButton(false)
        }
    }

    const removeTask = () => {
       const filteredList = tasksList.filter(t => t.id !== task.id)
       setTasksList(filteredList)
    }

    return (
        <div>
            <label className="px-3 py-4 cursor-pointer">
                <input className="-mt-1 " type="checkbox" />
            </label>
            <input className="disabled:bg-white bg-gray-100" value={taskContent} disabled={disable} onChange={(e) => setTaskContent(e.target.value)} ></input>
            {disable && <Edit editTask={editTask} />}
            {!disable && <Save editTask={editTask} />}
            <Remove removeTask={removeTask}/>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object,
    tasksList: PropTypes.array,
    setTasksList: PropTypes.func
}

export default Task