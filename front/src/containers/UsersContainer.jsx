import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Users from '../components/Users';


const mapStateToProps = function(state) {
  return {
    user: state.login.userLog
  };
};


class UsersContainer extends React.Component {
  render() {
    return (
      <Users user={this.props.user}/>
    )
  }
}

export default withRouter(connect(mapStateToProps)(UsersContainer))


