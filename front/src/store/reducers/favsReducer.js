import { RECEIVE_USER_FAVS, ADD_USER_FAVS, DELETE_USER_FAV } from '../constants';

const initialState = {
  moviesFavs: [],
  addToFav: {},
  deleteFav: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER_FAVS:
      return Object.assign({}, state, { addToFav: action.movieFav });
    case RECEIVE_USER_FAVS:
      return Object.assign({}, state, { moviesFavs: action.moviesFavsList });
    case DELETE_USER_FAV:
      return Object.assign({}, state, { deleteFav: action.deleteFav });
    default:
      return state;
  }
}