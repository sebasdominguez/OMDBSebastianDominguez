import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Login from '../components/Login';
import { logUSer } from '../store/actions/login';

const mapDispatchToProps = function(dispatch) {
  return {
    loggedUser: (user) => dispatch(logUSer(user))
  };
};

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password:''
    },
    this.handleMailInput = this.handleMailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMailInput(mail) {
    this.setState({email: mail});
  }

  handlePasswordInput(pass) {
    this.setState({password: pass});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loggedUser(this.state);
    this.props.history.push("/");
  }

  render() {
    return <Login
      setMail={this.handleMailInput}
      setPass={this.handlePasswordInput}
      mailQuery={this.state.email}
      passQuery={this.state.password}
      handleSubmit={this.handleSubmit}
    />
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer))

