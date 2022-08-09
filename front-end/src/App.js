import { Route, Routes } from 'react-router-dom';

import Home from './componenets/Home/Home';
import NavBar from './componenets/NavBar/NavBar';
import Products from './componenets/Products/Products';
import TableView from './componenets/TableView/TableView';
import AddProduct from './componenets/AddProduct/AddProduct';
import SearchProduct from './componenets/SearchProduct/SearchProduct';
import DeleteProduct from './componenets/DeleteProduct/DeleteProduct';
import UpdateProduct from './componenets/UpdateProduct/UpdateProduct';
import Signup from './componenets/Signup/Signup';
import Signin from './componenets/Signin/Signin';
import ProtectedRoute from './componenets/Services/ProtectedRoutes';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/productTableView" element={<TableView />} />
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
