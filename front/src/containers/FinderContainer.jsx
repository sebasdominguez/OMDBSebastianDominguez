import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Finder from "../components/Finder";
import { fetchMovies } from "../store/actions/movies";
import { setModalStatus } from "../store/actions/modal";
import { listFavs } from '../store/actions/favs';
import { logOut } from "../store/actions/login";
import history from "../utils/history";

const mapStateToProps = function (state) {
  return {
    user: state.login.userLog,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchPelis: (name) => dispatch(fetchMovies(name)),
    setModal: (boolean, type) => dispatch(setModalStatus(boolean, type)),
    logout: () => dispatch(logOut()),
    toFavs: (user) => dispatch(listFavs(user)),
  };
};

const FinderContainer = ({
  fetchPelis,
  history,
  user,
  setModal,
  logout,
  toFavs
}) => {
  const [movieQuery, setMovieQuery] = useState("");
  const [path, setPath] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleMoviesInput = (event) => {
    setMovieQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movieQuery) {
      fetchPelis(movieQuery);
      setModal(false, "movies")
      history.push("/movies");
    }
  };

  const logOut = () => {
    logout()
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const modalUserOpen = () => {
    history.push('/access')
  };

  const toUsers = () => {
    history.push('/users')
  }

  const linkFavs = () => {
    toFavs(user.id)
    history.push('/favs')
  }

  useEffect(() => {
    if (history.location.pathname == "/favs") setPath("/favs");
    if (history.location.pathname == "/users") setPath("/users");
  }, [history.location]);
  
  return (
    <Finder
      user={user}
      handleMoviesInput={handleMoviesInput}
      movieQuery={movieQuery}
      handleSubmit={handleSubmit}
      path={path}
      toggleModal={toggleModal}
      showModal={showModal}
      modalUserOpen={modalUserOpen}
      logOut={logOut}
      toUsers={toUsers}
      linkFavs={linkFavs}
    />
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FinderContainer)
);
