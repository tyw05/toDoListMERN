import { useState } from "react"
import userService from "../services/users"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState('')
    const navigate = useNavigate()

    const createUser = async (event) => {
        event.preventDefault()
        if (password !== verify){
            alert('Password verification failed!')
            setPassword('')
            setVerify('')
            return
        }
        await userService.createUser({name, username, password})
        navigate('/')
        setName('')
        setUserName('')
        setPassword('')
        setVerify('')
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <form className="space-y-6" onSubmit={createUser}>
                <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2">
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"  />
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="mt-2">
                    <input value={username} onChange={(e)=>setUserName(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" />
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"  />
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Verify Your Password</label>
                <div className="mt-2">
                    <input value={verify} onChange={(e)=>setVerify(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"  />
                </div>
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Register