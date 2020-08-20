import React  from 'react';
import { connect } from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import UserSelected from '../components/UserSelected';

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    userSelected: state.users.userSelected
  }
};

const UserSelectedContainer = ({user, userSelected}) => {

  

	{ return user.email ? 
	  	<UserSelected userSelected={userSelected}/>
	  	:
	  	<Redirect to={'/'}/>
	}
}

export default withRouter(connect(mapStateToProps)(UserSelectedContainer))

