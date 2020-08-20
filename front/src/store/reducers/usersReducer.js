import { FETCH_USERS, SET_USER_SELECTED } from '../constants';

const initialState = {
	listUsers: [],
	userSelected: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
    	return { ...state, listUsers: action.users };
    case SET_USER_SELECTED:
    	return { ...state, userSelected: action.user };
    default:
      return state;
  }
}

