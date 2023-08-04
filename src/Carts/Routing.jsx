import React from 'react'
import Product from './Product'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/checkout' element={<Cart/>}/>
    </Routes>
    
  )
}

export default Routing