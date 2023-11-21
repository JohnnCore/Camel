import React from 'react';

import { Routes, Route } from "react-router-dom";

import HomePage from './pages/main/HomePage';
import ListProducts from './pages/products/ListProducts';
import Cart from './pages/cart/Cart';
import ProductList from './pages/products/ProductList';
import ProductDetails from './pages/products/ProductDetails';

import Dashboard from './pages/admin/Dashboard';

// Products
import AdminProductsList from './pages/admin/products/List/AdminProductsList';
import AdminProductCreate from './pages/admin/products/Create/AdminProductCreate';
import AdminProductEdit from './pages/admin/products/Edit/AdminProductEdit';

import AdminListUsers from './pages/admin/users/List/AdminListUsers';


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
      {/* Products */}
      <Route path='/dashboard/products' element={<AdminProductsList/>}></Route>
      <Route path='/dashboard/products/create' element={<AdminProductCreate/>}></Route>
      <Route path='/dashboard/products/:id' element={<AdminProductEdit/>}></Route>

      <Route path='/dashboard/users' element={<AdminListUsers/>}></Route>      
    </Routes>
    </>
  )
}
export default App
