import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "../components/Home";
import { fetchPeliByTitle } from "../store/actions/movies";
import axios from "axios";
import { apiKey } from "../utils/utils.js";

const mapStateToProps = function (state) {
  return {
    user: state.login.userLog,
    moviesHome: state.movies.homeMovies,
    modal: state.modal,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovie: (title, user) => dispatch(fetchPeliByTitle(title, user)),
  };
};

class MovieContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get(`https://www.omdbapi.com/?${apiKey}&s=batman`).then((res) => {
      this.setState({ movies: res.data.Search });
    });
  }

  render() {
    return (
      <Home
        user={this.props.user}
        movies={this.state.movies}
        byTitle={this.props.fetchMovie}
      />
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
);
