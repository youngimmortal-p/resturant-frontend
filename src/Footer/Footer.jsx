import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-600 text-white py-6 text-center'>
      <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      <div className='flex justify-center gap-6'>
        <a href="#" className='hover:underline'>Facebook</a>
        <a href="#" className='hover:underline'>Instagram</a>
        <a href="#" className='hover:underline'>Twitter</a>
      </div>
    </footer>
  )
}

export default Footer
