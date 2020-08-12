import axios from 'axios';
import { REGISTER_USER } from '../constants';

export const newUser = (user) => dispatch => {
  console.log("USER: ", user)
  axios.post('/api/users', user)
    .then(res => {
      res.data;
      })
};
