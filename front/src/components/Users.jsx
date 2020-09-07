import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Form, FormControl, Row, Col, Button } from 'react-bootstrap';
import Sky from 'react-sky';
import img2 from './img/onePop.png';

export default ({ usersList, findUser, userQuery, handleUsers}) =>  (
    <div className="userFinder margin0 mt-5 justify-content-center">
      <Sky
        images={{ 0: img2 }}
        how={30}
        time={40}
        size={'80px'}
      />
      <h3 className="text-center text-white">USE THE FINDER TO LOOK FOR AN USER</h3>

      <Form inline >
        <Row className="margin0 w-100 m-4">
          <Col xs={6} md={7}  className="text-right">
            <FormControl
              type="text"
              value={userQuery}
              placeholder="User Name"
              onChange={handleUsers}
              className="mr-sm-2"
            />
          </Col>
          <Col xs={4} md={3} className="text-left">
            <Button
              type="submit"
              variant="dark"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
          

      <div className="text-center text-white">The finder looks for all the possibilities from the first letter</div>
      <div className="mt-5 mb-4 mb-3 col-11 col-md-8 tableUsers">
        {usersList.length ?
          <Table responsive striped hover size="xl" variant="dark">
            <thead>
              <tr>
                <th>Users List:</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map(user => {
                return (
                  <tr key={user.id}>
                    <td className="tdNoBorder">
                      <Link className="thumbnail" to={`/users/${user.id}`} onClick={()=>findUser(user)}>
                        {user.name}
                      </Link>
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </Table>
          : null
        }
      </div>
    </div>
  )


