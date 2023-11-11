import axios from 'axios'
const baseUrl = 'http://localhost:10000/api/users'

const createUser = async (user) => {
    const response = await axios.post(baseUrl ,user)
    return response.data
}

export default { createUser }