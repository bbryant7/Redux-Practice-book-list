import { combineReducers } from 'redux';
import BookListReducer from './bookListReducer';

const rootReducer = combineReducers({
  books: BookListReducer
});

export default rootReducer;


// value for piece of state labeled "books" is what is returned from the BookListReducer function
