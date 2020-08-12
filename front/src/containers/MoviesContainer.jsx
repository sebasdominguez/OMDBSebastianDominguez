import React from 'react';
import { connect } from "react-redux";
import { fetchPeliByTitle } from '../store/actions/movies';
import Movies from '../components/Movies';

const mapStateToProps = function(state) {
  return {
    moviesList: state.movies.list,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMovie: (title) => dispatch(fetchPeliByTitle(title)),
  };
};


class MoviesContainer extends React.Component {
  
  render () {
    return  (
          <Movies byTitle={this.props.fetchMovie} movies={this.props.moviesList} />
          );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
