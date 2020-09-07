import React from 'react';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';

export default ({setMail, setName, setPass, handleSubmit, mailQuery, passQuery, nameQuery, closeModal, showModal}) => {

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
      <h4 className="login mt-3">Create Your Account in One Step</h4>
      <Form onSubmit={handleSubmit} className="mb-3 mr-2 ml-2 justify-content-center">
          <FormControl type="email" value={mailQuery} placeholder="Your Mail" onChange={setMail} className="mr-sm-2" required="true"/>
          <FormControl type="text" value={nameQuery} placeholder="Your Name" onChange={setName} className="mr-sm-2" required="true"/>
          <FormControl type="password" value={passQuery} placeholder="Your Password" onChange={setPass} className="mr-sm-2" required="true"/>
          <Button type="submit" variant="dark">Register</Button>
      </Form>
    </Modal>
  );
}