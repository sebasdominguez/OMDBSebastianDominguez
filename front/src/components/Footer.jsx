import React from 'react';
import { Navbar } from 'react-bootstrap';
import FooterContainer from '../containers/FooterContainer.jsx';

export default () =>  (
  <div id="footer" className="col-12">
      <Navbar className="p-0 navbar-center" fixed="bottom" bg="light">
        <span className="text-muted h-5"><small><em>SD-OMDB 2020</em></small></span>
      </Navbar>
    </div>
   )