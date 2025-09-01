import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("auth") === "true"){
      setIsAuth(true)
    }
  }, [])

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    setIsAuth(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("auth")
    setIsAuth(false)
  }
  return (
    
     <Routes>
      
      <Route path='/' element={<Home isAuth={isAuth} onLogout={handleLogout}/>}/>
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to="/login" />}/>
      <Route path='/login' element={<Login onLogin={handleLogin} />}/>
     </Routes>
  )
}

export default App
