import React, {useEffect} from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SidebarContainer from "../containers/SidebarContainer";
import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";
import HomeContainer from "../containers/HomeContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import FooterContainer from "../containers/FooterContainer";
import FinderContainer from "../containers/FinderContainer";
import FavsContainer from "../containers/FavsContainer";
import UsersContainer from "../containers/UsersContainer";
import UserSelectedContainer from "../containers/UserSelectedContainer";
import {persistencia} from '../store/actions/login'

const mapDispatchToProps = function(dispatch) {
  return {
    persistencia: () => dispatch(persistencia())
  };
};


const Main = ({persistencia}) => {

    useEffect(() => {
        persistencia();
    }, [])

    return (
      <div id="main" className="container-fluid">
        <div className="row">
            <div>
                <FinderContainer />
            </div>
        </div>
            <div className="row">
                <div className="col-2">
                <SidebarContainer />
                </div>
                <div className="col-9">
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/movies" component={MoviesContainer} />
                        <Route path="/movies/:movieTitle" component={MovieContainer} />
                        <Route path="/login" component={LoginContainer} />
                        <Route path="/register" component={RegisterContainer} />
                        <Route path="/favs" component={FavsContainer} />
                        <Route exact path="/users" component={UsersContainer} />
                        <Route path="/users/:id" component={UserSelectedContainer} />
                    </Switch>
                </div>
            </div>
        <div className="row">
            <div>
                <FooterContainer />
            </div>
        </div>
      </div>
)}

export default connect(null, mapDispatchToProps)(Main)