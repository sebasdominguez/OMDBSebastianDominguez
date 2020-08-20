import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../utils/style.css'

export default ({ user, favs, byTitle, deleteFav }) => (
    <div>
    <div className="row justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
        <div>
          <h3 className="pt-5 text-center text-white">{user.name} Favorites</h3>
            <Table responsive striped hover size="xl" variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                 { favs.map(fav => {
                  return (
                  <tr key={fav.id} className='listFav'>
                    <td className="tdNoBorder"><Link className="thumbnail" to={`/movies/${fav.title}`} onClick={() => byTitle(fav.title, user.id)}> {fav.title}</Link></td>
                    <td className="tdNoBorder"><Button type="submit" variant="warning" onClick={() => deleteFav(fav.id)}>Delete</Button></td>
                  </tr>
                  )
                  }
                )}
              </tbody>
            </Table>
        </div>
      </div>
    </div>
  </div>
)