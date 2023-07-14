import {
  addBook,
  deleteBook,
  editBook,
  viewBook,
} from '../constants/crudConstants';

const initialBooks = {
  books: [
    {
      id: 1,
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
    },
    {
      id: 2,
      title: "Alice's Adventures in Wonderland and its sequel",
      author: 'Lewis Carroll',
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
  ],
};

const crudReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case addBook:
      return;

    case viewBook:
      return;

    case deleteBook:
      return;

    case editBook:
      return;

    default:
      return state;
  }
};

export default crudReducer;
