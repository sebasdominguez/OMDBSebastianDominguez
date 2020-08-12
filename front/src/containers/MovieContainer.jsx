import React  from 'react';
import { connect } from "react-redux";
import Movie from '../components/Movie';
import { fetchPeliByTitle } from '../store/actions/movies';
import { agregarFavs } from '../store/actions/favs';

const mapStateToProps = function(state) {
  let obj = {}
  state.login.userLog.user ? 
  obj = {
    movie: state.movies.selected,
    user: state.login.userLog.user.id,
  }
  :
  obj= {
    movie: state.movies.selected,
  };
  return obj
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMovie: (title) => dispatch(fetchPeliByTitle(title)),
    addFav: (forDispatch) => dispatch(agregarFavs(forDispatch)),
  };
};

class MovieContainer extends React.Component {

  render() {
    return (
       this.props.user ? 
        <Movie user={this.props.user} addToFavs={this.props.addFav} movie={this.props.movie}/>
        : 
        <Movie movie={this.props.movie}/>
       
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
