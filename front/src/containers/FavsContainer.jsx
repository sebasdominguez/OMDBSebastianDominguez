import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Favs from '../components/Favs';
import { fetchPeliByTitle } from '../store/actions/movies';
import { removeFav } from '../store/actions/favs';


const mapStateToProps = function(state) {
    return {
        user: state.login.userLog,
        favs: state.favorites.moviesFavs
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        fetchMovie: (title) => dispatch(fetchPeliByTitle(title)),
        deleteFav: (user, movie) => {
            let objRemoveFav = { user: user, movie: movie };
            dispatch(removeFav(objRemoveFav))
        }
    }
};

class FavsContainer extends React.Component {
    render() {
        return (
            <Favs deleteFav={this.props.deleteFav} byTitle={this.props.fetchMovie} user={this.props.user} favs={this.props.favs}/>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavsContainer))