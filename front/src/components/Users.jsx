import React from 'react';

export default ({user}) =>  (
  <div>
    <div className="row justify-content-center">
      <div className="mt-5 mb-4 mb-3 col-12">
          <h3 className="pt-5 text-center text-white">Hombres Trabajando...</h3>
        {/*<div>
          <h3 className="pt-5 text-center text-white">{user.user.email}</h3>
          <section>
            <ul id="favs" className="list-unstyled">
             <li>
              <input type="checkbox" name="list" id="nivel1-1"/>
                <label for="nivel1-1"><h4 className="text-muted">Your Favourites: </h4></label>
                <ul class="interior">
                  
                  {user.favorites.map(favorite => {
                    return (
                      <li key={favorite.id}>
                        <input type="checkbox" name="list" id="nivel2-1"/>
                       
                        <Link to={`/movies/${favorite.title}`}>
                          <label for="nivel2-1">{favorite.name}</label>
                        </Link>
                      </li>
                      )
                    })
                  }

                </ul>
              </li>
            </ul>
          </section> 
        </div> */}
      </div>
    </div>
  </div>
   )

