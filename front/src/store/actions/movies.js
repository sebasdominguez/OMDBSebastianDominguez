import axios from "axios";
import { RECEIVE_MOVIES, RECEIVE_MOVIE, MOVIES_HOME } from "../constants";
import { apiKey } from "../../utils/utils.js";

const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

const receiveMovie = (obj) => ({
  type: RECEIVE_MOVIE,
  obj,
});

const moviesHome = (movies) => ({
  type: MOVIES_HOME,
  movies,
});

export const fetchMoviesHome = () => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?${apiKey}&t=batman`)
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovies(movies.Search)));
};

export const fetchMovies = (name) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?${apiKey}&s=${name}`)
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovies(movies.Search)));
};

export const fetchPeliByTitle = (title, userId) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?${apiKey}&t=${title}`).then((res) => {
    const theMovie = res.data;
    const movieId = res.data.imdbID;
    if (userId && userId.id) {
      axios.get(`/api/users/${userId.id}/favorite/${movieId}`).then((res) => {
        if (res.data == "alreadyAdded") {
          var boolean = true;
        } else {
          var boolean = false;
        }
        const obj = { data: theMovie, fav: boolean };
        dispatch(receiveMovie(obj));
      });
    } else {
      const obj = { data: theMovie, fav: true };
      dispatch(receiveMovie(obj));
    }
  });
};
