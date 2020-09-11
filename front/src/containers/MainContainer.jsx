import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
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
import AccessMobileContainer from "../containers/AccessMobileContainer";
import { persistencia } from "../store/actions/login";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB9aTo2M8MfYlJNBqKGdvZpVmVhCYryYQE',
  authDomain: 'sd-movie-finder.firebaseapp.com',
  databaseURL: 'https://sd-movie-finder.firebaseio.com',
  projectId: 'sd-movie-finder',
  storageBucket: 'sd-movie-finder.appspot.com',
  messagingSenderId: '570906021537',
  appId: '1:570906021537:web:28f775f31cf651309b6ae0',
  measurementId: 'G-N0DPVFMMN4'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const mapDispatchToProps = function (dispatch) {
  return {
    persistencia: () => dispatch(persistencia()),
  };
};

const Main = ({ persistencia }) => {

  useEffect(() => {
    persistencia();
  }, []);

  return (
    <div id="main" className="containerGral">
      <FinderContainer />
      <div className="homeContainer">
        <div className="sideBarContainer">
          <SidebarContainer />
        </div>
        <div className="switchContainer backg">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/movies" component={MoviesContainer} />
            <Route path="/movies/:movieTitle" component={MovieContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/favs" component={FavsContainer} />
            <Route exact path="/users" component={UsersContainer} />
            <Route path="/access" component={AccessMobileContainer} />
            <Route path="/users/:id" component={UserSelectedContainer} />
          </Switch>
        </div>
        <FooterContainer />
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Main);
