import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import AddBook from '../Components/AddBook';
import ViewBook from '../Components/ViewBook';
import EditBook from '../Components/EditBook';
import Error from '../Components/Error';
import Navbar from '../layouts/Navbar';

function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/show-books' element={<ViewBook />} />
          <Route path='/edit-book' element={<EditBook />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Index;
