import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../services/actions/crudActions';

const ViewBook = () => {
  const books = useSelector((state) => state.books);
  // console.log(typeof books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(Delete(id));
  };
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBook;
