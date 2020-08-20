import React from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { logOut } from '../store/actions/login';
import { listFavs } from '../store/actions/favs';


const mapStateToProps = function(state) {
  return {
    user: state.login.userLog
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    logout: () => dispatch(logOut()),
    toFavs: (user) => dispatch(listFavs(user))
  };
};

class SidebarContainer extends React.Component {

  render() {
    return (
      <Sidebar toFavs={this.props.toFavs} logout={this.props.logout} user={this.props.user}/>
    );
  }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SidebarContainer))
