import React from 'react';
import { Link } from 'react-router-dom';

export default ({user, usersList, findUser}) =>  (
  <div>
    <div className="row mt-5 justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
        {usersList.length ?
        <div>
          <section>
            <ul id="favs" className="list-unstyled">
             <li>
                <h4 className="text-warning">Users Found: </h4>
                <ul>
                  {usersList.map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                          <label onClick={()=>findUser(user)}>{user.name}</label>
                        </Link>
                      </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          </section> 
        </div>
        :
        <div> Use the Finder </div>
        }
      </div>
    </div>
  </div>
   )

