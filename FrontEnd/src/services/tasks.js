import axios from 'axios'
const baseUrl = 'http://localhost:10000/api/tasks'

let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
  }

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async  (newTask) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newTask, config)
    return response.data
}

const remove = async  (id) => {
    const config = {
        headers: { Authorization: token },
    }
    try {
        const response = await axios.delete(`${baseUrl}/${id}`, config)
        return response.data
      }
      catch (exception) {
        console.log('Cannnot remove',exception)
      }
}

const update = async (id, newTask) => {
    const config = {
        headers: { Authorization: token },
    }
    try {
        console.log('current',id)
        const response = await axios.put(`${baseUrl}/${id}`, newTask, config)
        return response.data
      }
      catch (exception) {
        console.log('Cannot update', exception)
      }
}

export default { setToken, getAll, create, update, remove }
