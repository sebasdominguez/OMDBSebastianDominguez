import React  from 'react';
import { connect } from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import UserSelected from '../components/UserSelected';
import { fetchPeliByTitle } from '../store/actions/movies';

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    userSelected: state.users.userSelected
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
	fetchMovie: (title, user) => dispatch(fetchPeliByTitle(title, user)),
  }
}

const UserSelectedContainer = ({user, userSelected, fetchMovie}) => {

	{ return user.email ? 
	  	<UserSelected userSelected={userSelected} byTitle={fetchMovie} userLoged={user}/>
	  	:
	  	<Redirect to={'/'}/>
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSelectedContainer))

