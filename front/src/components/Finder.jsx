import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MoviesContainer from '../containers/MoviesContainer.jsx';
import MovieContainer from '../containers/MovieContainer.jsx';

export default ({ user, path, handleMoviesInput, movieQuery, userQuery, handleSubmit, handleUsers, handleSubmitUser }) => (
  <div id="finder">
    <Navbar fixed="top" expand="none" bg="dark" variant="dark">
      <Navbar.Brand href="/">SD OMDB</Navbar.Brand>
      { user.email && path === '/users' ? 
      <Form inline onSubmit={handleSubmitUser}>
        <FormControl type="text" value={userQuery} placeholder="Find an User" onChange={handleUsers} className="mr-sm-2" />
      </Form>
      :
      <Form inline onSubmit={handleSubmit}>
        <FormControl type="text" value={movieQuery} placeholder="Type Movie/Serie" onChange={handleMoviesInput} className="mr-sm-2" />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      }
    </Navbar>
  </div>
);





