import React from 'react'
import { Button } from "@/components/ui/button"
const Contact = () => {
  return (
    <section className='py-16 px-6 bg-gray-50' >
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

        <div>
            <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
            <p className='text-gray-700 mb-6'>
                Have a question or want to reserve a table? Fill out the form and we'll get back
                to you shortly.
            </p>

            <form className='space-y-4'>
                <input type="text" 
                placeholder='Your Name'
                className='w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600'
                />
                <input type="email" 
                placeholder='Your Email'
                className='w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600'
                />
                <textarea rows="10" placeholder='Your Message' 
                className='w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600'
                ></textarea>
                <Button className='bg-red-600 hover:bg-red-700 text-white'>
                    Send Message
                </Button>
            </form>
        </div>

        <div className='rounded-2xl overflow-hidden shadow-lg'>
            <iframe src="/src/assets/google map.jpg" title='Resturant Location'
            width="100%"
            height="350"
            allowFullScreen=''
            loading='lazy'
            ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
