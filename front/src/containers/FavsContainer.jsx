import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Favs from '../components/Favs';
import { fetchPeliByTitle } from '../store/actions/movies';
import { removeFav } from '../store/actions/favs';

const mapStateToProps = function(state) {
    return {
        user: state.login.userLog,
        favs: state.favorites.moviesFavs,
        userSelected: state.users.userSelected
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        fetchMovie: (title, user) => dispatch(fetchPeliByTitle(title, user)),
        removingFav: (obj) => dispatch(removeFav(obj))
        }
}

const FavsContainer = ({favs, user, fetchMovie, removingFav, userSelected}) => {

    const [listFavs, setListFavs] = useState([])

    const deleteFav = (movie) => {
        const objRemoveFav = { user: user.id, movie: movie }
        removingFav(objRemoveFav)
    }

    useEffect(() => {
        setListFavs(favs);
    }, [favs])

    { return user.email ? 
        <Favs deleteFav={deleteFav} byTitle={fetchMovie} user={user} favs={listFavs}/>
        :
        <Redirect to={'/'}/>
    }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavsContainer))