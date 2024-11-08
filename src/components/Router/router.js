import React from 'react'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Faq from '../pages/Faq'
import Product from '../pages/Product'
import Register from '../pages/Register'
import ProductDetail from '../pages/ProductDetail'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Wallet } from 'lucide-react'
import WishList from '../pages/WishList'
import Basket from '../pages/Basket'



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
        <Route path='/wishlist' element={<WishList/>}  />
        <Route path='/basket' element={<Basket/>}  />
        <Route path='/product' element={<Product/>}  />
        <Route path='/product/:id' element={<ProductDetail/>}  />

        <Route path='*' element={<Error/>}  />
    </Routes>
    
    </>
  )
}

export default router