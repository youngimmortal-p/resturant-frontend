import About from '@/About/About'
import Hero from '@/Components/Hero/Hero'
import Menu from '@/Components/Menu/Menu'
import Navbar from '@/Components/Navbar/Navbar'
import Contact from '@/Contact/Contact'
import Footer from '@/Footer/Footer'
import React from 'react'

const Home = ({ isAuth, onLogout}) => {
  return (
    <div>
      <Navbar  isAuth={isAuth} onLogout={onLogout}/>
     <div id='hero'><Hero /></div> 
      <div id='menu'><Menu /></div>
      <div id='about'><About /></div>
      <div id='contact'><Contact /></div>
      <div id='footer'><Footer /></div>
    </div>
  )
}

export default Home
