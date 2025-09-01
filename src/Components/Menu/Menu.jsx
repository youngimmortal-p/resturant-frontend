import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from "../ui/button"
import { useState } from 'react'
import { useEffect } from 'react'
import margheritaPizza from '@/assets/Margherita pizza.jpg'
import cheeseburger from '@/assets/cheeseburger.jpg'
import caesarSalad from '@/assets/caesar salad.jpg'
import pepperoniPizza from '@/assets/pepperoni pizza.jpg'
import veggieBurger from '@/assets/veggi burger.jpg'
import greekSalad from '@/assets/greek salad.jpg'

const foodItems = [
  {id: 1, name: "Margherita Pizza", category: "Pizza", price: "$12", image: margheritaPizza },
  {id: 2, name: "Cheeseburger", category: "Burgers", price: "$10", image: cheeseburger },
  {id: 3, name: "Caesar Salad", category: "Salads", price: "$8", image: caesarSalad},
  {id: 4, name: "Pepperoni Pizza", category: "Pizza", price: "$14", image: pepperoniPizza},
  {id: 5, name: "Veggie Burger", category: "Burgers", price: "$9", image: veggieBurger},
  {id: 6, name: "Greek Salad", category: "Salads", price: "$7", image: greekSalad},
]

const categories = ["All", "Pizza", "Burgers", "Salads"]
const Menu = () => {
    const [selectedCategory, isSelectedCategory] = useState("All");
    const filteredItems = selectedCategory === "All" ? foodItems : foodItems.filter((item) => item.category === selectedCategory)

    useEffect(() => {
      const raw = localStorage.getItem("STORAGE_KEY")
      if(raw){
        try{
          const parsed = JSON.parse(raw)
          if(Array.isArray(parsed)){
            
          }
        } catch {}
      }
    },[])
  return (
    <section className='py-16 px-6 bg-gray-50'>
      <h2 className='text-3xl font-bold text-center mb-8'>Our Menu</h2>

      <div className='flex justify-center gap-4 mb-10 flex-wrap'>
        {categories.map((category) => (
            <Button key={category} 
            variant={selectedCategory === category ? "default" : "outline"} 
            onClick={() => isSelectedCategory(category)}
            className='cursor-pointer'
            >
                {category}
            </Button>
        ))}
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {filteredItems.map((item) => (
            <Card key={item.id} className='overflow-hidden shadow-md'>
                <img src={item.image}
                alt={item.name}
                className='h-48 w-full object-cover'
                />
                <CardHeader>
                    <CardTitle className='flex justify-between items-center'>
                        <span>{item.name}</span>
                        <span className='text-red-600'>{item.price}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Button className='w-full bg-red-600 hover:bg-red-700 text-white'>
                        Add to cart
                    </Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  )
}

export default Menu
