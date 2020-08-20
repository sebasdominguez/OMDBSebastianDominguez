import React from 'react';
//import { Link } from 'react-router-dom';

export default ({userSelected}) =>  (
  <div>
    <div className="row mt-5 justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
        <div>
          <section>
            <h3 className="text-warning">Your Search: </h3>
            <div>Name: {userSelected.name}</div>
            <div>Email: {userSelected.email}</div>
            <div>Since. {userSelected.since}</div>
            <div>Favs: </div>
            <ul>
            {userSelected.favs && userSelected.favs.length ?
              <div>
              {userSelected.favs.map((fav)=>{
                return (
                  <li key={fav.id}> 
                    {fav.title}
                  </li>
                )
               })
              }
              </div>
              :
              <div>Nothing yet...</div>
            }
            </ul>
          </section> 
        </div>
      </div>
    </div>
  </div>
)

