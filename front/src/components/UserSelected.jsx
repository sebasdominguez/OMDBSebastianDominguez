import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ({userSelected, byTitle, userLoged}) =>  (

  <Card style={{ width: '18rem' }} className='justify-content-center cardUser text-white' bg='dark'>
    <Card.Body>
        <Card.Title>Name: {userSelected.name}</Card.Title>
        <Card.Text>
        <div>Email: {userSelected.email}</div>
        <div>Since: {moment(userSelected.since).format("MMM Do YY")}</div>
        <div>Favs: </div>
        <ul>
            {userSelected.favs && userSelected.favs.length ?
              <div>
              {userSelected.favs.map((fav)=>{
                return (
                  <li key={fav.id}><Link className="thumbnail" to={`/movies/${fav.title}`} onClick={() => byTitle(fav.title, userLoged)}>{fav.title}</Link></li>
                )
               })
              }
              </div>
              :
              <div>Nothing yet...</div>
            }
        </ul>
        </Card.Text>
    </Card.Body>
  </Card>  
)

