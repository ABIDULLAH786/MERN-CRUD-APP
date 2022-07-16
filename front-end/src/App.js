import React from 'react';
import { Routes } from 'react-router-dom';
import Form from './componenets/form';
import NavBar from './componenets/NavBar/NavBar';

function App() {
  return(
    <div className='container mt-3'>
      <NavBar />

      <Routes>

      </Routes>
      <Form />

    </div>
  );
}

export default App;
