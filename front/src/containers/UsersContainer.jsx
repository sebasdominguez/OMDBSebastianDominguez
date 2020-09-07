import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import {withRouter, Redirect} from "react-router-dom"
import Users from '../components/Users';
import { findOneUser } from '../store/actions/users';
import { fetchUsers } from "../store/actions/users";

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


const UsersContainer = ({user, usersList, setUserFinded, findUsers}) => {

  const [userQuery, setUserQuery] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    userQuery != '' ? findUsers({ name: event.target.value }) : setUsuarios([])
  }, [userQuery]);

  useEffect(() => {
    setUsuarios(usersList)
  }, [usersList]);

  const findUser = (data) => setUserFinded(data)
  
  const handleChangeUsers = (event) => {
    setUserQuery(event.target.value) 
  };

	{ return user.email ? 
	  	<Users usersList={usuarios} findUser={findUser} userQuery={userQuery} handleUsers={handleChangeUsers}/>
	  	:
	  	<Redirect to={'/'}/>
	}
	
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))


