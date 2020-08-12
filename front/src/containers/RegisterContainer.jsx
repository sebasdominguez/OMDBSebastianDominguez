import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Register from '../components/Register';
import { newUser } from '../store/actions/register';

const mapDispatchToProps = function(dispatch) {
  return {
    createUser: (user) => dispatch(newUser(user))
  };
};

class RegisterContainer extends React.Component {
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
    this.setState({email:mail});
  }

  handlePasswordInput(pass) {
    this.setState({password:pass});
  }

  handleSubmit(event) {
    event.preventDefault();
      this.props.createUser(this.state);
  }

  render() {
    return <Register
      setMail={this.handleMailInput}
      setPass={this.handlePasswordInput}
      mailQuery={this.state.email}
      passQuery={this.state.password}
      handleSubmit={this.handleSubmit}
    />
  }
}

export default withRouter(connect(null, mapDispatchToProps)(RegisterContainer))

