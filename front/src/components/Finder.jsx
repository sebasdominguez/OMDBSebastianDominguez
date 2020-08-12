import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Form, FormControl, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MoviesContainer from '../containers/MoviesContainer.jsx';
import MovieContainer from '../containers/MovieContainer.jsx';

export default function (props) {

  const movieChange = e => {
    props.setMovie(e.target.value);
  };

  return (
    <div id="finder">
      <Navbar fixed="top" expand="none" bg="dark" variant="dark">
        <Navbar.Brand href="/">SD OMDB</Navbar.Brand>
        <Form inline onSubmit={props.handleSubmit}>
            <FormControl type="text" value={props.movieQuery} placeholder="Type Here..." onChange={movieChange} className="mr-sm-2" />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
      </Navbar>
    </div>
  );
}




