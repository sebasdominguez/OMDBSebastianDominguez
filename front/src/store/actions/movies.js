import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../constants';
import { apiKey } from '../../utils/utils.js';

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies,
}); 

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie,
}); 

export const fetchMovies = (name) => dispatch => {
 axios.get(`https://www.omdbapi.com/?${apiKey}&s=${name}`)
	.then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies.Search)));
}

export const fetchPeliByTitle = (title) => dispatch => {
 axios.get(`https://www.omdbapi.com/?${apiKey}&t=${title}`)
	.then(res => res.data)
    .then(movie => {
    	dispatch(receiveMovie(movie))
    		}	
    	);
}
