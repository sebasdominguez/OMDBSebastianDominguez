import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Sky from 'react-sky';
import img2 from './img/onePop.png';
import '../utils/style.css'

export default ({ user, favs, byTitle, deleteFav }) => (
    <div className="row margin0 justify-content-center">
      <Sky
        images={{ 0: img2 }}
        how={30} /* Pass the number of images Sky will render chosing randomly */
        time={40} /* time of animation */
        size={'80px'} /* size of the rendered images */
        />
      <div className="mt-5 mb-4 mb-3 col-11  col-md-8">
        <div>
          <h3 className="pt-5 text-center text-white">{user.name} Favorites</h3>
            <Table responsive striped hover size="xl" variant="dark">
              <thead className="text-center">
                <tr>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                 { favs && favs.length ? 
                 
                  favs.map(fav => {
                    return (
                    <tr key={fav.id} className='listFav'>
                      <td className="tdNoBorder"><Link className="thumbnail" to={`/movies/${fav.title}`} onClick={() => byTitle(fav.title, user.id)}> {fav.title}</Link></td>
                      <td className="tdNoBorder"><Button type="submit" variant="warning" onClick={() => deleteFav(fav.id)}>Delete</Button></td>
                    </tr>
                    )
                  })
                  :
                  <tr className="text-center"> <td>Nothing yet...</td> </tr>
                }
              </tbody>
            </Table>
        </div>
      </div>
    </div>
)