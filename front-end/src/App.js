import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';

import Form from './componenets/form';
import Home from './componenets/Home/Home';
import NavBar from './componenets/NavBar/NavBar';
import Products from './componenets/Products/Products';
import AddProduct from './componenets/AddProduct/AddProduct';
import SearchProduct from './componenets/SearchProduct/SearchProduct';
import DeleteProduct from './componenets/DeleteProduct/DeleteProduct';
import UpdateProduct from './componenets/UpdateProduct/UpdateProduct';
import Signup from './componenets/Signup/Signup';
import Signin from './componenets/Signin/Signin';
import ProtectedRoute from './componenets/Services/ProtectedRoutes';
import AuthService from './componenets/Services/auth.services';
function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/product/remove/:id" element={<DeleteProduct />} />
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
          <Route path="/new" element={<AddProduct />} />
          <Route path="/search" element={<SearchProduct />} />
        </Route>


        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


      </Routes>
      {/* <Form /> */}

    </div >
  );
}

export default App;
