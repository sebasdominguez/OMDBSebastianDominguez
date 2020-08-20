import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import favoritesReducer from './favsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  movies: moviesReducer,
  register: registerReducer,
  login: loginReducer,
  favorites: favoritesReducer,
  users: usersReducer
});

