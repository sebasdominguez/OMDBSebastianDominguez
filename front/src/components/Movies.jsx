import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default ({ movies, byTitle}) => {

    return (
        <div className="mt-5">
      <h3 className="pt-4 text-center text-white">MOVIES LIST BY YOUR SEARCH:</h3>
      <Table responsive striped hover size="xl" variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          { movies && movies.map( movie => 
            <tr key={movie.Title}>
              <td> 
                <Link className="thumbnail" to={`/movies/${movie.Title}`} onClick={() => byTitle(movie.Title)}>{movie.Title}
                </Link>
              </td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
    )
}