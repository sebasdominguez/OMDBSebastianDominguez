import React from "react";
import {
  Form,
  FormControl,
  Button,
  Navbar,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({
  user,
  handleMoviesInput,
  movieQuery,
  handleSubmit,
  showModal,
  toggleModal,
  modalUserOpen,
  logOut,
  toUsers,
  linkFavs
}) => (
  <div id="finder">
    <Navbar fixed="top" bg="dark" variant="dark">
      <Row
        md={12}
        className="justify-space-around align-items-center w-100 margin0"
      >
        {user.id ?
          <div className='displayRow'>
            <Col className="d-md-none colExit" xs={2} onClick={logOut}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill" fill="#be43d8" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
              </svg>
              <div className='exit'>exit</div>
            </Col>
            <Col className="d-md-none colExit" xs={2} onClick={toUsers}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-file-earmark-person" fill="#e18b49" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z"/>
              </svg>
              <div className='users'>USERs</div>
            </Col>
            <Col className="d-md-none colExit" xs={2} onClick={linkFavs}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-hand-thumbs-up" fill="#e18b49" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
              </svg>
              <div className='favs'>FAVs</div>
            </Col>
          </div>
          :
          <Col className="d-md-none colEnter" xs={2} onClick={modalUserOpen}>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="#46fffb" xmlns="http://www.w3.org/2000/svg" >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
            </svg>
            <div className='enter'>enter</div>
          </Col>
        }
        <Col xs={8} md={3} className="textQuery ml-xs-2">
          <Navbar.Brand href="/">
            SD MOVIE FINDER
          </Navbar.Brand>
        </Col>
        <Col xs={2} md={1} className="text-right lupa" onClick={toggleModal}>
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="white" xmlns="http://www.w3.org/2000/svg" >
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </Col>
      </Row>
      <Row className="justify-content-xs-center w-100 d-none margin0">
        <Modal
          show={showModal}
          onHide={toggleModal}
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="special_modal"
        >
          <Form inline onSubmit={handleSubmit}>
            <Row className="justify-content-xs-center margin0 w-100 m-4">
              <Col xs={8} className="text-left">
                <FormControl
                  type="text"
                  value={movieQuery}
                  placeholder="Type a Movie/Serie"
                  onChange={handleMoviesInput}
                  className="mr-sm-2"
                />
              </Col>
              <Col xs={4} className="text-right">
                <Button
                  type="submit"
                  variant="dark"
                  onClick={toggleModal}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Row>
    </Navbar>
  </div>
);
