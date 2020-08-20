import axios from 'axios';
import { FETCH_USERS, SET_USER_SELECTED } from '../constants';

const listUsers = (users) => ({
	type: FETCH_USERS,
	users
})

const userSelected = (user) => ({
	type: SET_USER_SELECTED,
	user
})

export const fetchUsers = (name) => dispatch => {
  axios.post('/api/users/name', name)
    .then((users) => dispatch(listUsers(users.data)))
}

export const findOneUser = (data) => dispatch => {
	console.log("data del user selected", data)
	var user = new Object;
	user.name= data.name;
	user.email= data.email;
	user.since= data.createdAt;
	const userId = data.id
  axios.get(`/api/users/${userId}/favorites`)
    .then((userFavs) => {
    	user.favs = userFavs.data
    	dispatch(userSelected(user))
    })
}
