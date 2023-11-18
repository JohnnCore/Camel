import React from 'react';

import { Routes, Route } from "react-router-dom";

import HomePage from './pages/main/HomePage';
import ListProducts from './pages/products/ListProducts';
import Cart from './pages/cart/Cart';
import ProductList from './pages/products/ProductList';
import ProductDetails from './pages/products/ProductDetails';

import Dashboard from './pages/admin/Dashboard';
import AdminProductsList from './pages/admin/products/AdminProductsList';
import AdminListUsers from './pages/admin/products/AdminListUsers';

import Profile from './pages/profile/Profile';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/home' element={<ProductList/>}></Route>
      <Route path='/products/list' element={<ListProducts/>}></Route> {/* to remove */}
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/:id' element={<ProductDetails/>}></Route>

      <Route path='/profile' element={<Profile/>}></Route>

      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dashboard/products' element={<AdminProductsList/>}></Route>
      <Route path='/dashboard/users' element={<AdminListUsers/>}></Route>      
    </Routes>
    </>
  )
}
export default App
