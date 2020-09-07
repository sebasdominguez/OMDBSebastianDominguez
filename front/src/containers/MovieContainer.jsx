import React  from 'react';
import { connect } from "react-redux";
import Movie from '../components/Movie';
import { agregarFavs, listFavs } from '../store/actions/favs';
import history from "../utils/history";

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
    toFavs: (user) => dispatch(listFavs(user)),
  };
};

class MovieContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      toFavs : {
        movieId: null,
        titleMovie: "",
        userId: null,
      },
      isFav: this.props.addedFav
    }
    this.handleFavs = this.handleFavs.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.movie !== this.props.movie) {
    let obj = {
      movieId: this.props.movie.imdbID,
      titleMovie: this.props.movie.Title,
      userId: this.props.user.id,
      }
    this.setState({toFavs : obj})
    }
    if (prevProps.addedFav !== this.props.addedFav) {
      this.setState({isFav : this.props.addedFav})
    }
  }

  handleFavs(boolean){
    boolean === false ? 
      (this.props.toFavs(this.props.user.id), history.push('/favs')) 
      : 
      (this.props.addFav(this.state.toFavs), this.setState({isFav:true}))
  } 

  render() {
    return (
       this.props.user ? 
        <Movie user={this.props.user} fav={this.state.isFav} handleFavs={this.handleFavs} movie={this.props.movie}/>
        : 
        <Movie movie={this.props.movie}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);