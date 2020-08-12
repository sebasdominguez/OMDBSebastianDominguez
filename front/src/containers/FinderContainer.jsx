import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Finder from '../components/Finder';
import { fetchMovies } from '../store/actions/movies';

const mapDispatchToProps = function(dispatch) {
  return {
    fetchPelis: (name) => dispatch(fetchMovies(name))
  };
};

class FinderContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      movieQuery: '',
    },
    this.handleMoviesInput = this.handleMoviesInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMoviesInput(movies) {
    this.setState({ movieQuery: movies });
    // this.props.fetchPelis(this.state.movieQuery);
    // this.props.history.push("/movies");
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.movieQuery) {
      this.props.fetchPelis(this.state.movieQuery);
      this.props.history.push("/movies");

    }
  }

  render() {
    return <Finder
      setMovie={this.handleMoviesInput}
      movieQuery={this.state.movieQuery}
      handleSubmit={this.handleSubmit}
    />
  }
}


export default withRouter(connect(null, mapDispatchToProps)(FinderContainer))

//export default connect(null, mapDispatchToProps)(FinderContainer);
