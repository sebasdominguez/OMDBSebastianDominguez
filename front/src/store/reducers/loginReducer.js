import { LOGIN_USER } from '../constants';

const initialState = {
	userLog: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
      	...state, 
      	userLog: action.userLogged 
      };
    default:
      return state;
  }
}

