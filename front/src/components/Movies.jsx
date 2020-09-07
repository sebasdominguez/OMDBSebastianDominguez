import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ParallaxCard from "react-parallax-card";

export default ({ movies, byTitle, user }) => {
  return (
    <div className="row text-center margin0 text-white">
        <div className="col-12">
          <div className="col-12 p-4">
            MOVIES LIST BY YOUR SEARCH:
          </div>
          <div className="contMovies ">
            {movies === undefined ?
              <div className='mt-5'>There are no matches with your search. Please try another...</div>
              :
              movies.map((mov) => (
              <div key={mov.imdbID}>
                <Link
                  className="thumbnail"
                  to={`/movies/${mov.Title}`}
                  onClick={() => byTitle(mov.Title, user)}
                >
                  <ParallaxCard className="parallax">
                    <img
                      src={mov.Poster}
                      style={{ width: "300px", height: "400px" }}
                    />

                    <div />
                    <div />
                    <div />

                    <p
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        padding: "3rem",
                        lineHeight: "30px",
                      }}
                    >
                      {mov.Title}
                    </p>
                  </ParallaxCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
