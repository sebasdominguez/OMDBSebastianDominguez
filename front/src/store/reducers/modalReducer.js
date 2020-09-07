import { MODAL_LOGIN, MODAL_REGISTER  } from "../constants";

const initialState = {
  login: false,
  register: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_LOGIN:
      return { ...state, login: action.boolean };
    case MODAL_REGISTER:
      return { ...state, register: action.boolean };
    default:
      return state;
  }
};
