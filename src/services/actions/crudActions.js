import {
  addBook,
  deleteBook,
  editBook,
  viewBook,
} from '../constants/crudConstants';

const Create = (data) => {
  return {
    type: addBook,
    payload: data,
  };
};
const Read = () => {
  return {
    type: viewBook,
  };
};
const Update = (UpdatedValue) => {
  return {
    type: editBook,
    payload: UpdatedValue,
  };
};
const Delete = (value) => {
  return {
    type: deleteBook,
    payload: value,
  };
};

export { Create, Read, Update, Delete };
