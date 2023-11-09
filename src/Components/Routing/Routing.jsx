import React from 'react' 
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import ProductsPage from '../Products/ProductsPage'
import SingleProductPage from '../Products/Single Product/SingleProductPage';
import Cartpage from '../CartPage/Cartpage'
import Myorderpage from '../Myorder/Myorderpage'
import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'; 
import iphone from '../../assets/iphone.jpg'
const Routing = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage />} /> 
    <Route path='/products' element={<ProductsPage />} /> 
    <Route path='/products/1' element={<SingleProductPage image={iphone}/> } /> 
    <Route path='/signup' element={<SignupPage />} /> 
    <Route path='/login' element={<LoginPage />} /> 
    <Route path='/cart' element={<Cartpage />} /> 
    <Route path='/order' element={<Myorderpage />} /> 
  </Routes>
  )
}

export default Routing
