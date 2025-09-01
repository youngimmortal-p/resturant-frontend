import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../Components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "../Components/ui/dialog"
import { Label } from '../Components/ui/label'
import { Input } from '../Components/ui/input'
import { useState } from 'react'
import { useEffect } from 'react'

const STORAGE_KEY = "foodie_menu"
const Dashboard = () => {

  const [menu, setMenu] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "", 
    image: ""
  })

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    image: ""
  })

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      try{
        const parsed = JSON.parse(raw)
        if(Array.isArray(parsed)) 
        setMenu(parsed)
      } catch{}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu))
  }, [menu])

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const addItem = (e) => {
    e.preventDefault();
    const {name, category, price, image } = formData;
    if(!name || !category || !price) return
    const newItem = {
      id: Date.now(),
      name,
      category,
      price,
      image: image || "/src/assets/Margherita pizza.jpg"
    }
    setMenu((m) => [newItem, ...m])
    setFormData({name: "", category: "", price: "", image: ""})
  }

  const deleteItem = (id) => {
    setMenu((m) => m.filter((item) => item.id !== id))
  }

  const openEdit = (item) => {
    setEditData(item)
    setIsEditOpen(true)
  }

  const handleEditChange = (e) => {
    setEditData({...editData, [e.target.name]: e.target.value})
  }

  const saveEdit = () => {
    if(!editData.name || !editData.category || !editData.price) return
    setMenu((m) => m.map((item) => (item.id === editData.id ? editData :item)))
    setIsEditOpen(false)
  }
  return (
    <section className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Add Menu Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addItem} className='grid gap-4 md:grid-cols-4'>
            <div>
              <Label htmlFor="name" className='mb-3'>Name</Label>
              <Input type="text" 
              id='name'
              name='name'
              placeholder='e.g., Pepperoni Pizza'
              value={formData.name}
              onChange={handleInput}
              />
            </div>

            <div>
              <Label htmlFor="category" className='mb-3'>Category</Label>
              <Input type="text" 
              id='category'
              name='category'
              placeholder='e.g., Pizza'
              value={formData.category}
              onChange={handleInput}
              />
            </div>

            <div>
              <Label htmlFor="price" className='mb-3'>Price (numbers only)</Label>
              <Input type="number" 
              id='price'
              name='price'
              min="0"
              step="0.01"
              placeholder='e.g., 14'
              value={formData.price}
              onChange={handleInput}
              />
            </div>

            <div>
              <Label htmlFor="image" className='mb-3'>Image Url</Label>
              <Input 
              id='image'
              name='image'
              placeholder='http://...'
              value={formData.image}
              onChange={handleInput}
              />
            </div>
            <Button type='submit' className='bg-red-600 hover:bg-red-700 text-white md:col-span-4'>
              Add Items
            </Button>
          </form>
        </CardContent>
      </Card>

      <h2 className='text-2xl font-bold mb-4'>Menu Items</h2>
      {menu.length === 0 ? (
        <p className='text-gray-600'>No items yet. Add your first dish above.</p>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {menu.map((item) => (
            <Card key={item.id} className='overflow-hidden'>
              {item.image ? (
                <img src={item.image} alt={item.name} 
                className='h-44 w-full object-cover'
                />
              ) : null}
              <CardHeader>
                <CardTitle className='flex justify-between items-center'>
                  <span>{item.name}</span>
                  <span className='text-red-600 font-semibold'>
                    ${Number(item.price).toFixed(2)}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className='flex justify-between items-center gap-3'>
                <span className='text-sm text-gray-600'>{item.category}</span>
                <div className='flex gap-2'>
                  <Button variant="outline" onClick= {() => openEdit(item)} className='cursor-pointer'>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => deleteItem(item.id)} className='cursor-pointer'>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className='sm:max-w-[600px]'>
          <DialogHeader>
            <DialogTitle>Edit Menu Items</DialogTitle>
          </DialogHeader>

          <div className='grid gap-4 md:grid-cols-2 '>
            <div className='md:col-span-2'>
              <Label htmlFor="edit-name" className='mb-3'>Name</Label>
              <Input 
              id='edit-name'
              name='name'
              value={editData.name}
              onChange={handleEditChange}
              />
            </div>

            <div>
              <Label htmlFor="edit-category" className='mb-3'>Category</Label>
              <Input 
              id='edit-category'
              name='category'
              value={editData.category}
              onChange={handleEditChange}
              />
            </div>

            <div>
              <Label htmlFor="edit-price" className='mb-3'>Price</Label>
              <Input type="number" 
              id='edit-price'
              name='price'
              min="0"
              step="0.01"
              value={editData.price}
              onChange={handleEditChange}
              />
            </div>

            <div>
              <Label htmlFor="edit-image" className='mb-3'>Image Url</Label>
              <Input 
              id='image'
              name='image'
              value={editData.image}
              onChange={handleEditChange}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" className='cursor-pointer' onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEdit} className='bg-red-600 hover:bg-red-700 text-white cursor-pointer'>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Dashboard
