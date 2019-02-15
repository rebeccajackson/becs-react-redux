import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";

// Mapping of our state with combineReducers
export default combineReducers({
  books: BooksReducer
});
