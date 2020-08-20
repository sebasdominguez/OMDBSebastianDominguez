import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from 'react-spring'
import { Table } from 'react-bootstrap';
import { render } from 'react-dom';
import "./css/style.css"


export default ({movie, addToFavs, fav, user}) => {
  
  function Card() {

      const [flipped, set] = useState(false)
      const [added, setAdded] = useState(false)
      const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

      { return added == true ?
          null
          :
          fav == true? 
            null
            :
            (<div className="col-12 listFav" onClick={() => 
              {
              set(state => !state);
              let toDispatch ={movieId:movie.imdbID , titleMovie:movie.Title, userId:user.id}
              addToFavs(toDispatch)
              setAdded(true)
              }
            }>
            <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><button className="addFav">Add to Favs</button></a.div>
            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} ><button className="okFav">Done!</button> </a.div>
            </div>)
      }
  }

  return (
    <div className="row justify-content-center align-items-center">
      <div className="mt-5 mb-3 col-12">
        <h3 className="pt-4 text-center text-white">"{movie.Title}"</h3>
      </div>
      <div className="col-5">
        <img src={movie.Poster} className="img-thumbnail" />
      </div>
      <div className="col-7">
        <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>Released:</td>
                  <td>{movie.Released}</td>
                </tr>
                <tr>
                  <td>Runtime:</td>
                  <td>{movie.Runtime}</td>
                </tr>
                <tr>
                  <td>Genre:</td>
                  <td>{movie.Genre}</td>
                </tr>
                <tr>
                  <td>Director:</td>
                  <td>{movie.Director}</td>
                </tr>
                <tr>
                  <td>Writer:</td>
                  <td>{movie.Writer}</td>
                </tr>
                <tr>
                  <td>Actors:</td>
                  <td>{movie.Actors}</td>
                </tr>
                <tr>
                  <td>Awards:</td>
                  <td>{movie.Awards}</td>
                </tr>
                <tr>
                  <td># Votes:</td>
                  <td>{movie.imdbVotes}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td>{movie.imdbRating}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{movie.Type}</td>
                </tr>
                <tr>
                  <td>DVD:</td>
                  <td>{movie.DVD}</td>
                </tr>
                <tr>
                  <td>Box Office:</td>
                  <td>{movie.BoxOffice}</td>
                </tr>
                <tr>
                  <td>Production:</td>
                  <td>{movie.Production}</td>
                </tr>
              </tbody>
          </Table>
        </div>
        { user.email ? <Card /> : null }
      </div>
    )
}