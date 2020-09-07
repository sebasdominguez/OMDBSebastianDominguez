import React from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { logOut } from '../store/actions/login';
import { listFavs } from '../store/actions/favs';
import { setModalStatus } from "../store/actions/modal";

const mapStateToProps = function(state) {
  return {
    user: state.login.userLog,
    loginAsked: state.modal.open
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    logout: () => dispatch(logOut()),
    toFavs: (user) => dispatch(listFavs(user)),
    setModal: (boolean, type) => dispatch(setModalStatus(boolean, type)),
  };
};

class SidebarContainer extends React.Component {

  constructor(props){
    super()
    this.modalStatus = this.modalStatus.bind(this) 
  }
  
  modalStatus(boolean, type){
    boolean === false ?  this.props.logout() : 
      type === 'login' ? this.props.setModal(true, "login") : this.props.setModal(true, "register")
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loginAsked !== this.props.loginAsked) {
      const status = this.props.loginAsked;
      this.setState({modalUser : status})
    }
  }

  render() {
    const { toFavs, user } = this.props;
    return (
      <Sidebar modalStatus={this.modalStatus} toFavs={toFavs} user={user}/>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SidebarContainer))
