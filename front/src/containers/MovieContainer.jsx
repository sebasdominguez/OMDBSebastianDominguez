import React  from 'react';
import { connect } from "react-redux";
import Movie from '../components/Movie';
import { agregarFavs } from '../store/actions/favs';

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    movie: state.movies.selected,
    addedFav: state.movies.inFavs,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    addFav: (forDispatch) => dispatch(agregarFavs(forDispatch)),
  };
};

class MovieContainer extends React.Component {

  render() {
    return (
       this.props.user ? 
        <Movie user={this.props.user} addToFavs={this.props.addFav} fav={this.props.addedFav} movie={this.props.movie}/>
        : 
        <Movie movie={this.props.movie}/>
       
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);