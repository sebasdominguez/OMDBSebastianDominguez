import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Login from '../components/Login';
import { logUSer } from '../store/actions/login';
import history from "../utils/history"


const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    error: state.login.error,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    loggedUser: (user) => dispatch(logUSer(user))
  };
};


const LoginContainer = ({loggedUser, user, error}) => {

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [errorLog, setErrorLog] = useState(false)

  const handleMailInput = (mail) => {
    setMail(mail)
  }

  const handlePasswordInput = (pass) => {
    setPass(pass)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loggedUser({email: mail, password: pass})
  }

  useEffect(() => {
      if(user && user.id) history.push("/")
    }, [user])

  useEffect(() => {
      if(error==true) {
        setErrorLog(true)
      } else (setErrorLog(false))
    }, [error])

  return <Login
      setMail={handleMailInput}
      setPass={handlePasswordInput}
      mailQuery={mail}
      passQuery={pass}
      handleSubmit={handleSubmit}
      errorLog={errorLog}
    />
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))

