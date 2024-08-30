import React from 'react'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Faq from '../pages/Faq'
import Product from '../pages/Product'
import Register from '../pages/Register'
import ProductDetail from '../pages/ProductDetail'
import Contact from '../pages/Contact'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'

const router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/blog' element={<Blog/>}  />
        <Route path='/faq' element={<Faq/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/product' element={<Product/>}  />
        <Route path='/product:id' element={<ProductDetail/>}  />
        <Route path='*' element={<Home/>}  />
    </Routes>
    
    </>
  )
}

export default router