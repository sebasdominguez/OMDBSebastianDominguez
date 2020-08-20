import { RECEIVE_MOVIE, RECEIVE_MOVIES } from '../constants';

const initialState = {
  list: [],
  selected: {},
  inFavs: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { selected: action.obj.data, inFavs: action.obj.fav});
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { list: action.movies });
    default:
      return state;
  }
}