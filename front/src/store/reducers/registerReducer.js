import { REGISTER_USER } from '../constants';

export default (state = {}, action) => {
  switch(action.type) {
    case REGISTER_USER:
      return action.newUser;
    default:
      return state;
  }
}

