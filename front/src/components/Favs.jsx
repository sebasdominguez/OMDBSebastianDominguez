import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default ({ user, favs, byTitle, deleteFav }) => (
    <div>
    <div className="row justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
          <div>
          <h3 className="pt-5 text-center text-white">{user.user.email}</h3>

                  <Table responsive striped hover size="xl" variant="dark">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
           { favs && favs.map( favorite => 
            <tr key={favorite.id}>
              <Link className="thumbnail" to={`/movies/${favorite.title}`} onClick={() => byTitle(favorite.title)}><td>{favorite.title}</td>
                </Link>
                <Button type="submit" variant="warning" onClick={() => deleteFav(user.user.id, favorite.id)}>Delete</Button>
            </tr>
          )}
        </tbody>
      </Table>

        </div>
      </div>
    </div>
  </div>
)