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
            dispatch(addFavs(res.data))
            alert("Movie added to your favs")
        })
        .catch((err)=>console.log(err))
        
};

export const listFavs = (userId) => dispatch => {
    axios.get(`/api/users/${userId}/favorites`)
        .then(res => dispatch(receiveFavs(res.data))
        .catch((err)=>console.log(err))
)};

export const removeFav = (objRemoveFav) => dispatch => {
    axios.post('/api/favs/remove', objRemoveFav)
        .then(res => res.data)
        .then(movies => {
            dispatch(receiveFavs(movies));
            alert("Movie removed from your favs")
        })
        .catch((err)=>console.log(err))
}