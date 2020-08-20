import React  from 'react';
import { connect } from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import Users from '../components/Users';
import { findOneUser } from '../store/actions/users';


const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    usersList: state.users.listUsers
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    setUserFinded: (data) => dispatch(findOneUser(data)),
    findUsers: (user) => dispatch(fetchUsers(user))
  };
};


const UsersContainer = ({user, usersList, setUserFinded}) => {

	const findUser = (data) => {
        setUserFinded(data);
    }
	
	{ return user.email ? 
	  	<Users user={user} usersList={usersList} findUser={findUser}/>
	  	:
	  	<Redirect to={'/'}/>
	}
	
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))


