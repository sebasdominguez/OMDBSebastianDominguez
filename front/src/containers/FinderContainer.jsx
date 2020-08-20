import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Finder from '../components/Finder';
import { fetchMovies } from '../store/actions/movies';
import { fetchUsers } from '../store/actions/users';
import history from "../utils/history"

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchPelis: (name) => dispatch(fetchMovies(name)),
    findUsers: (user) => dispatch(fetchUsers(user))
  };
};

const FinderContainer = ({fetchPelis, findUsers, history, user}) => {

    const [movieQuery, setMovieQuery] = useState('')
    const [userQuery, setUserQuery] = useState('')
    //const [users, setUsers] = useState({})
    const [path, setPath] = useState('')

    useEffect(() => {
        if(history.location.pathname == '/favs') setPath('/favs');
        if(history.location.pathname == '/users') setPath('/users');
    }, [history.location])

    const handleMoviesInput = (event) => {
        setMovieQuery(event.target.value);
    }

    const handleChangeUsers = (event) => {
        setUserQuery(event.target.value)
        findUsers({name: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (movieQuery) {
          fetchPelis(movieQuery);
          history.push("/movies");
        }
    }

    const handleSubmitUser = (event) => {
        event.preventDefault();
        findUsers(event.target.value);
    }

    return  <Finder user={user} handleUsers={handleChangeUsers} handleMoviesInput={handleMoviesInput} movieQuery={movieQuery} userQuery={userQuery} handleSubmit={handleSubmit} handleSubmitUser={handleSubmitUser} path={path}/>
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinderContainer))
