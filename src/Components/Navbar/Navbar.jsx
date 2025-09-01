import React from 'react'
import { Button } from "../ui/button"
import { useState } from 'react'
import { Menu, X} from "lucide-react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ isAuth, onLogout}) => {
  const [isopen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    onLogout()
    navigate("/login")
  }
  return (
    <nav className='bg-white shadow-md fixed w-full top-0 left-0 z-50'>
      <div className='flex items-center justify-between px-6 py-4'>
      <h1 className='text-2xl font-bold text-red-600'>Foodie</h1>

      <ul className='hidden md:flex gap-6 font-medium text-gray-700'>
        <li className='hover:text-red-600 cursor-pointer'><a href="#hero">Home</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#menu">Menu</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#about">About</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#contact">Contact</a></li>
        {isAuth && <li><Link to="/dashboard" className='hover:text-red-600 cursor-pointer'>Dashboard</Link></li>}
      </ul>

      <div className='hidden md:block'>
        {isAuth ? (
          <Button onClick={handleLogoutClick} className='bg-red-600 hover:bg-red-700 text-white cursor-pointer mr-4'>
            Logout
          </Button>
        ) : <Button onClick = {() => navigate("/login")} className='bg-red-600 hover:bg-red-700 text-white cursor-pointer mr-4'>
          Login
          </Button>}
      <Button className = 'bg-red-600 hover:bg-red-700 text-white cursor-pointer'>
        Order Now
      </Button>
      </div>
      

      <div className='md:hidden'>
        <button className='cursor-pointer' onClick={() => setIsOpen(!isopen)}>
          {isopen ? <X size={28} /> : <Menu size={28} /> }
        </button>
      </div>
      </div>
      {isopen &&(
        <div className='md:hidden bg-white shadow-md'>
          <ul className='flex flex-col items-center gap-4 py-6 font-medium text-gray-700'>
        <li className='hover:text-red-600 cursor-pointer'><a href="#hero">Home</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#menu">Menu</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#about">About</a></li>
        <li className='hover:text-red-600 cursor-pointer'><a href="#contact">Contact</a></li>
        {isAuth && <li><Link to='/dashboard' className='hover:text-red-600 cursor-pointer' onClick={() => setIsOpen(false)}>Dashboard</Link></li>}
      </ul>

      <div className='flex justify-center pb-6'>
        {isAuth ? (
          <Button onClick={() => {handleLogoutClick(); setIsOpen(false)}} className='bg-red-600 hover:bg-red-700 text-white cursor-pointer mr-4'>
            Logout
          </Button>
        ) : <Button onClick={() => {navigate("/login"); setIsOpen(false)}} className='bg-red-600 hover:bg-red-700 text-white cursor-pointer mr-4'>
          Login
          </Button>}
        <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
          Order Now
        </Button>
      </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
