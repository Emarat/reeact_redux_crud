import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Create } from '../services/actions/crudActions';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numOfBooks = useSelector((state) => state.books.length);
  // console.log(numOfBooks.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id:  numOfBooks + 1, title, author };
    dispatch(Create(book));
    navigate("/show-books", {replace: true})
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          {/* <label htmlFor='title'>Title: </label> */}
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder='Title'
          />
        </div>
        <div className='form-field'>
          {/* <label htmlFor='author'>Author: </label> */}
          <input
            type='text'
            id='author'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder='Author'
          />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
