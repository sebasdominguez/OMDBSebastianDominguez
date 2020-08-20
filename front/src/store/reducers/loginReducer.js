import { LOGIN_USER, LOGIN_ERROR } from '../constants';

const initialState = {
	userLog: {},
	error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state,  userLog: action.userLogged };
    case LOGIN_ERROR:
      return { ...state,  error: action.boolean };
    default:
      return state;
  }
}

