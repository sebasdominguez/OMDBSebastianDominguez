import React from 'react';
import { Card, Button } from 'react-bootstrap';
import img2 from './img/onePop.png';
import Sky from 'react-sky';

export default ({ modal }) => {
  
  return (
    <div className='contLoginMobile'>
        <Sky
        images={{ 0: img2 }}
        how={30} /* Pass the number of images Sky will render chosing randomly */
        time={40} /* time of animation */
        size={'80px'} /* size of the rendered images */
        />
        <Card style={{ width: '18rem' }} className='justify-content-center text-center cardRegister text-white' bg='dark'>
        <Card.Body>
            <Card.Title>Access</Card.Title>
            <Card.Text>
            Create a new account in only one step!<br />
            You will can hold your favourites and look for another users...
            </Card.Text>
            <Button variant="primary" className='mr-4' onClick={()=>modal(true, "login")}>Login</Button>
            <Button variant="secondary" onClick={()=>modal(true, "register")}>Register</Button>
        </Card.Body>
        </Card>  
    </div>
  )
}