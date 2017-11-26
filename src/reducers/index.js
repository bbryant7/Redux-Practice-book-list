import { combineReducers } from 'redux';
import BookListReducer from './bookListReducer';
import SelectBookReducer from './selectBookReducer'

const rootReducer = combineReducers({
  books: BookListReducer,
  selected: SelectBookReducer

});

export default rootReducer;


// value for piece of state labeled "books" is what is returned from the BookListReducer function
// value for piece of state labeled "selected" is what is returned from the SelectedBookReducer function
