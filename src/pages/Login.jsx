import React from 'react'
import { Input } from '../Components/ui/input'
import { Button } from '../Components/ui/button'
import { Card, CardHeader, CardTitle, CardContent} from "../Components/ui/card"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(username === "admin" && password === "password"){
            localStorage.setItem("auth", "true")
            navigate("/dashboard")
            onLogin()
        }else{
            setError("Invalid username or password")
        }
    }
   
  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-50'>
       
        <Card className='w-full max-w-sm p-6'>
            <CardHeader>
                <CardTitle>Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <Input 
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                   {error && <p className='text-red-600 text-sm'>{error}</p>}
                   <Button type='submit' className='w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer'>
                    Login
                   </Button>
                </form>
            </CardContent>
        </Card>
      
    </section>
  )
}

export default Login
