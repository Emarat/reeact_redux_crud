import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/' className=''>
        Home
      </Link>
      <Link to='/add-book' className=''>
        Add Book
      </Link>
      <Link to='/show-books' className=''>
        Show Books
      </Link>
    </div>
  );
};

export default Navbar;
