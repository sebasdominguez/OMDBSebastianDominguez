import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Login from '../components/Login';
import { logUSer } from '../store/actions/login';
import { setModalStatus } from "../store/actions/modal";

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    error: state.login.error,
    loginAsked: state.modal.login
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    loggedUser: (user) => dispatch(logUSer(user)),
    setModal: (boolean, type) => dispatch(setModalStatus(boolean, type)),
  };
};


const LoginContainer = ({loggedUser, user, error, loginAsked, setModal}) => {

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [errorLog, setErrorLog] = useState(false)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(loginAsked);
  }, [loginAsked]);

  useEffect(() => {
      if(error==true) {
        setErrorLog(true)
      } else (setErrorLog(false))
    }, [error])

  const handleMailInput = (event) => {
    setMail(event.target.value)
  }

  const handlePasswordInput = (event) => {
    setPass(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loggedUser({email: mail, password: pass})
  }

  const closeModal = () => {
    setModal(false, "login")
  };

  return <Login
      handleMailInput={handleMailInput}
      handlePasswordInput={handlePasswordInput}
      mailQuery={mail}
      passQuery={pass}
      handleSubmit={handleSubmit}
      errorLog={errorLog}
      showModal={showModal}
      closeModal={closeModal}
    />
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))

