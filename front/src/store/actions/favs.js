import axios from 'axios';
import { RECEIVE_USER_FAVS, ADD_USER_FAVS, DELETE_USER_FAV } from '../constants';

const addFavs = movieFav => ({
    type: ADD_USER_FAVS,
    movieFav,
});

const receiveFavs = moviesFavsList => ({
    type: RECEIVE_USER_FAVS,
    moviesFavsList,
});

const deleteFav = deleteFav => ({
    type: DELETE_USER_FAV,
    deleteFav,
});

export const agregarFavs = (movieYuser) => dispatch => {
    axios.post('/api/favs/add', movieYuser)
        .then(res => {
            return res.data;
        })
        .then(movieOk => {
            dispatch(addFavs(movieOk))
        })
};

export const listFavs = (userId) => dispatch => {
    axios.get(`/api/users/${userId}/favorites`)
        .then(res => {
            return res.data;
        })
        .then(favs => {
            dispatch(receiveFavs(favs))
        })
};

export const removeFav = (objRemoveFav) => dispatch => {
    console.log("entre al action de Remove")
    console.log("objRemoveFav  :", objRemoveFav)
    axios.post('/api/favs/remove', objRemoveFav)
        .then(res => res.data)
        .then(movies => {
            dispatch(receiveFavs(movies));
        });
}