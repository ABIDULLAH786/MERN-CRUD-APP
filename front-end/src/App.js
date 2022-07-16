import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './componenets/form';
import Home from './componenets/Home/Home';
import NavBar from './componenets/NavBar/NavBar';
import Products from './componenets/Products/Products';
import AddProduct from './componenets/AddProduct/AddProduct';
import SearchProduct from './componenets/SearchProduct/SearchProduct';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new" element={<AddProduct />} />
        <Route path="/search" element={<SearchProduct />} />
        
      </Routes>
      {/* <Form /> */}

    </div>
  );
}

export default App;
