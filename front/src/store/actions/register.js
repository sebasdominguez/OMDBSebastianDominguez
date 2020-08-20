import axios from 'axios';
import { REGISTER_USER } from '../constants';
import history from "../../utils/history"

export const newUser = (user) => dispatch => {
  console.log("USER: ", user)
  axios.post('/api/users', user)
    .then(() => history.push('/login'))
};
