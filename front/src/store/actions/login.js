import axios from "axios";
import { LOGIN_USER, LOGIN_ERROR } from "../constants";
import { setModalStatus } from "./modal";
import history from "../../utils/history"

const login = (userLogged) => ({
  type: LOGIN_USER,
  userLogged,
});

const loginError = (boolean) => ({
  type: LOGIN_ERROR,
  boolean,
});

export const logUSer = (user) => (dispatch) => {
  axios
    .post("/api/login", user)
    .then((res) => {
      dispatch(login(res.data));
      dispatch(loginError(false));
      dispatch(setModalStatus(false, "login"))
      history.push('/')
    })
    .catch(() => dispatch(loginError(true)));
};

export const logOut = () => (dispatch) => {
  axios
    .post("/api/logout")
    .then((user) => {
      dispatch(login({}));
    })
    .catch((err) => console.log("logut err ", err));
};

export const persistencia = () => (dispatch) => {
  axios.get("/api/persist").then((res) => dispatch(login(res.data)));
};
