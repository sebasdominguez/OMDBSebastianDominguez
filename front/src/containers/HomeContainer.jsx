import React  from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import Home from '../components/Home';


const mapStateToProps = function(state) {
  return {
    user: state.login.userLog
  };
};


class MovieContainer extends React.Component {
  render() {
    return (
      <Home user={this.props.user}/>
    )
  }
}

export default withRouter(connect(mapStateToProps)(MovieContainer))
