import React from 'react';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';

export default ({handleMailInput, handlePasswordInput, handleSubmit, mailQuery, passQuery, errorLog, showModal, closeModal}) => {

  return (
    <Modal
    show={showModal}
    onHide={closeModal}
    keyboard={false}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="modalLogin col-12 text-center"
    >
      <h4 className="login mt-3">Login</h4>
      <Form onSubmit={handleSubmit} className="mb-3 mr-2 ml-2 justify-content-center">
        <FormControl size="md" type="text" value={mailQuery} placeholder="Your Mail" onChange={handleMailInput} className="mr-sm-2 mt-1" required={true} />
        <FormControl size="md" type="password" value={passQuery} placeholder="Your Password" onChange={handlePasswordInput} className="mr-sm-2 mt-1 mb-1" required={true} />
        {errorLog==true ? <Button type="submit" variant="danger">Try Again!</Button> : <Button type="submit" variant="dark">Go!</Button> }
      </Form>
    </Modal>

  );
}




