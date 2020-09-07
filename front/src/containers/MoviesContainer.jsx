import React from "react";
import { connect } from "react-redux";
import { fetchPeliByTitle } from "../store/actions/movies";
import Movies from "../components/Movies";

const mapStateToProps = function (state) {
  return {
    moviesList: state.movies.list,
    user: state.login.userLog,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovie: (title, user) => dispatch(fetchPeliByTitle(title, user)),
  };
};

class MoviesContainer extends React.Component {

  render() {
    return (
      <Movies
        byTitle={this.props.fetchMovie}
        movies={this.props.moviesList}
        user={this.props.user}
      />
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
