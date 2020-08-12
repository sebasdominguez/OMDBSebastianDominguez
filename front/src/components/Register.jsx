import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function (props) {
  const { setMail, setPass, handleSubmit, mailQuery, passQuery } = props;

  const movieMailChange = e => {
    setMail(e.target.value);
  };

  const moviePassChange = e => {
    setPass(e.target.value);
  };

  return (

    <div className="row mt-5">
      <div className="col-12 pt-5 text-center">
          <Link to="/" ><h3>SD.OMDB - Your Movie Finder</h3></Link>
          <h4>Create Your Account in One Step</h4>
          <div>
            <Form onSubmit={handleSubmit}>
                <FormControl type="text" value={mailQuery} placeholder="Your Mail" onChange={movieMailChange} className="mr-sm-2" />
                <FormControl type="text" value={passQuery} placeholder="Your Password" onChange={moviePassChange} className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Register</Button>
            </Form>
          </div> 
      </div>
    </div>

  );
}




