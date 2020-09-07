import { MODAL_REGISTER, MODAL_LOGIN } from "../constants";
import history from "../../utils/history"

const login = (boolean) => ({
  type: MODAL_LOGIN,
  boolean,
});

const register = (boolean) => ({
  type: MODAL_REGISTER,
  boolean,
});

export const setModalStatus = (boolean, type) => (dispatch) => {
  type === 'login' ? (dispatch(login(boolean)),history.push('/login')) : (dispatch(register(boolean)),history.push('/register'))
  boolean === false ? history.push('/') : null
};
