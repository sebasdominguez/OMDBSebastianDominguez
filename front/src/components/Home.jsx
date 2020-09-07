import React from "react";
import ParallaxCard from "react-parallax-card";
import { Link } from "react-router-dom";

export default ({ user, movies, byTitle }) => {
  return (
    <div>
      <div className="row justify-content-center margin0">
        <div className="pb-4 pb-3 col-12">
          {user.id ? (
            <h3 className="pt-3 text-center text-white">
              Welcome Back {user.name}
            </h3>
          ) : (
            <h3 className="pt-3 text-center text-white">WELCOME</h3>
          )}
        </div>
      </div>
      <div className="row text-center margin0 text-white">
        <div className="col-12">
          <div className="col-12">
            Use the Search Icon to find your Movie / Serie
          </div>
          <div className="col-12 p-4">
            You can go through thousands of records. An Example? "Batman"
          </div>
          <div className="contMovies">
            {movies.map((mov) => (
              <div key={mov.imdbID}>
                <Link
                  className="thumbnail"
                  to={`/movies/${mov.Title}`}
                  onClick={() => byTitle(mov.Title, user)}
                >
                  <ParallaxCard className="parallax">
                    <img
                      src={mov.Poster}
                      style={{ width: "300px", height: "400px",}}
                      className='parallaxMobile'
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
    </div>
  );
};

