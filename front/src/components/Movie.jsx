import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import ParallaxCard from "react-parallax-card";

export default ({ movie, fav, user, handleFavs }) => {

  return (
    <React.Fragment>
      <h3 className="pt-4 pb-4 text-center text-white">"{movie.Title}"</h3>
      <div className="row align-items-center justify-content-center text-center margin0 pb-4 mt-2">
        <div className="col-12 col-md-5">
          <ParallaxCard className="parallaxMovie">
            <img
              src={movie.Poster}
              style={{ width: "100%", height: "100%" }}
            />

            <div />
            <div />
            <div />
          </ParallaxCard>
        </div>
        <div className="col-12 col-md-7 text-left">
          <Table borderless size="sm">
            <tbody>
              <tr>
                <td>RELEASED:</td>
                <td>{movie.Released}</td>
              </tr>
              <tr>
                <td>RUNTIME:</td>
                <td>{movie.Runtime}</td>
              </tr>
              <tr>
                <td>GENRE:</td>
                <td>{movie.Genre}</td>
              </tr>
              <tr>
                <td>DIRECTOR:</td>
                <td>{movie.Director}</td>
              </tr>
              <tr>
                <td>WRITER:</td>
                <td>{movie.Writer}</td>
              </tr>
              <tr>
                <td>ACTORS:</td>
                <td>{movie.Actors}</td>
              </tr>
              <tr>
                <td>AWARDS:</td>
                <td>{movie.Awards}</td>
              </tr>
              <tr>
                <td># VOTES:</td>
                <td>{movie.imdbVotes}</td>
              </tr>
              <tr>
                <td>RATING:</td>
                <td>{movie.imdbRating}</td>
              </tr>
              <tr>
                <td>TYPE:</td>
                <td>{movie.Type}</td>
              </tr>
              <tr>
                <td>DVD:</td>
                <td>{movie.DVD}</td>
              </tr>
              <tr>
                <td>BOX OFFICE:</td>
                <td>{movie.BoxOffice}</td>
              </tr>
              <tr>
                <td>PRODUCTION:</td>
                <td>{movie.Production}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {user.email ? 
          fav == false ?
            <Button variant="info" size="small" onClick={()=>handleFavs(true)}>ADD TO FAVs</Button> 
            :
            <Button variant="info" size="small" onClick={()=>handleFavs(false)}>ALREADY IN FAVs</Button> 
          : null
        }
      </div>
    </React.Fragment>
  );
};
