import React from 'react'
import { Button } from "@/components/ui/button"
const Hero = () => {
  return (
    <section className='relative h-[80vh] flex items-center justify-center bg-[url("/src/assets/bg2.jpg")] bg-cover bg-center'>
      <div className='absolute inset-0 bg-black/15'/>

      <div className='relative z-10 text-center text-white max-w-2xl px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>Delicious Meals, Delivered Fresh</h1>

        <p className='text-lg md:text-xl mb-8'>
          Explore our menu and order your favourite dish online
        </p>

        <Button size="lg" className ="bg-red-600 hover:bg-red-700 cursor-pointer">
          Explore Menu
        </Button>
      </div>
    </section>
  )
}

export default Hero
