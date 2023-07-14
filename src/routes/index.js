import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Error from '../Components/Error';
import Navbar from '../layouts/Navbar';

function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
