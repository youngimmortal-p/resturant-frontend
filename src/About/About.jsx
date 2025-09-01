import React from 'react'
import interior from '@/assets/resturant interior.jpg'
const About = () => {
  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        <img src={interior} alt='Resturant Interior'
        className='rounded-2xl shadow-lg'
        />

        <div>
            <h2 className='text-3xl font-bold mb-6'>About Us</h2>
            <p className='text-gray-700 mb-4 leading-relaxed'>
                At <span className='text-red-600 font-semibold'>Foodie</span>, we believe every meal should be a memorable experience.
                From fresh ingredients to skilled chefs, we serve dishes made with love and passion.
            </p>
            <p className='text-gray-700 leading-relaxed'>
                Whether you're dining in, picking up, ordering online, our goal is to deliver
                quality food and excellent service every single time.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About
