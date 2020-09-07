import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Register from '../components/Register';
import { newUser } from '../store/actions/register';
import { setModalStatus } from "../store/actions/modal";

const mapStateToProps = function(state) {
  return {
    loginAsked: state.modal.register
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    createUser: (user) => dispatch(newUser(user)),
    setModal: (boolean, type) => dispatch(setModalStatus(boolean, type)),
  };
};

class RegisterContainer extends React.Component {

  constructor(props) {
    super();
    this.state = {
        email: '',
        password:'',
        name: '',
        showModal: false
    },
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({showModal : this.props.loginAsked})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loginAsked !== this.props.loginAsked) {
      const status = this.props.loginAsked;
      this.setState({showModal : status})
    }
  }

  handleMailInput(event) {
    this.setState({email : event.target.value});
  }

  handlePasswordInput(event) {
    this.setState({password : event.target.value});
  }

  handleNameInput(event) {
    this.setState({name : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = new Object();
    obj.email = this.state.email;
    obj.password = this.state.password;
    obj.name = this.state.name
    this.props.createUser(obj);
  }

  closeModal() {
    this.props.setModal(false, "register")
  };

  render() {

    const {handleMailInput, handleNameInput, handlePasswordInput, handleSubmit, closeModal} = this
    const {email, name, password, showModal} = this.state

    return <Register
            setMail={handleMailInput}
            setName={handleNameInput}
            setPass={handlePasswordInput}
            mailQuery={email}
            nameQuery={name}
            passQuery={password}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
            showModal={showModal}
          />
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))

