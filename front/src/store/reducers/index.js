import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import loginReducer from "./loginReducer";
import favoritesReducer from "./favsReducer";
import usersReducer from "./usersReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  movies: moviesReducer,
  login: loginReducer,
  favorites: favoritesReducer,
  users: usersReducer,
  modal: modalReducer,
});
