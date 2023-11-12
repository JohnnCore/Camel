import React from 'react';

import { Routes, Route } from "react-router-dom";

import HomePage from './pages/main/HomePage';
import ListUsers from './pages/users/ListUsers';
import ListProducts from './pages/products/ListProducts';
import Cart from './pages/cart/Cart';
import ProductList from './pages/products/ProductList';
import ProductDetails from './pages/products/ProductDetails';

import Dashboard from './pages/admin/Dashboard';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/home' element={<ProductList/>}></Route>
      <Route path='/users/list' element={<ListUsers/>}></Route>       {/* to move to dashboard */}
      <Route path='/products/list' element={<ListProducts/>}></Route> {/* to remove */}
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/:id' element={<ProductDetails/>}></Route>

      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>
    </>
  )
}
export default App
