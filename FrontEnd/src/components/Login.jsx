import { useState } from "react"
import { useNavigate } from "react-router-dom"
import loginService from '../services/login'
import taskService from '../services/tasks'
import PropTypes from 'prop-types'

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username, password
            })
            window.localStorage.setItem(
                'loggedinUser', JSON.stringify(user)
            )
            taskService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        }
        catch (exception) {
            alert('Wrong username or password')
            setUsername('')
            setPassword('')
        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <form className="space-y-6" onSubmit={handleLogin}>
                <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="mt-2">
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                    <input type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="inline-block w-1/2 justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Sign in</button>
                <button type="button" className="inline-block w-1/2 justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600" onClick={() => navigate('/register')}>Sign Up</button>

            </form>
        </div>
    )
}

Login.propTypes = {
    setUser: PropTypes.func
}

export default Login