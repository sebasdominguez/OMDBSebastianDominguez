import axios from 'axios';
import { LOGIN_USER } from '../constants';
import {withRouter} from "react-router-dom"

const login = userLogged => ({
  type: LOGIN_USER,
  userLogged,
}); 

export const logUSer = (user) => dispatch => {
  axios.post('/api/login', user)
    .then(res => {
      return res.data;
      })
    .then(userOk => {
      dispatch(login(userOk))
  })
};

export const logOut = (user) => dispatch => {
  axios.post('/api/logout', user)
    .then(res => {
      return res.data;
      })
    .then(userOk => {
      dispatch(login(userOk))
  })
};
