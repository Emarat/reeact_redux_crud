import { createStore } from 'redux';
import crudReducer from './services/reducers/crudReducer';

const store = createStore(crudReducer);

export default store;
