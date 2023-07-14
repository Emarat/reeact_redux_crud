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
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case viewBook:
      return;

    case deleteBook:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload)],
      };

    case editBook:
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (state.books.length > 0 && bookIndex !== -1) {
        // Update the title and author of the book at the index
        state.books[bookIndex].title = action.payload.title;
        state.books[bookIndex].author = action.payload.author;
      }

    default:
      return state;
  }
};

export default crudReducer;
