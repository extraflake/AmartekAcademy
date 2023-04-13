import "bootstrap";
import { Modal, Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; //Import CSS untuk styling
import Swal from "sweetalert2";
import {login} from './../../../../features/auth/authSlice'
import DataContext from "../../../../DataContext/DataContext";

export function LoginModal({
  show,
  hide,
  bioById,
  methodreqBioModal,
  httpstatus,
}) {
  const { loginHandleChange, loginHandleSubmit} = useContext(DataContext);
 
  const [closeModalAfterLoginModal, setCloseModalAfterLoginModal] =
    useState(true);
  return (
    <>
      <Modal
        show={closeModalAfterLoginModal ? show : closeModalAfterLoginModal}
        onHide={hide}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginHandleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="johndoe@gmail.com" onChange={loginHandleChange}  name={"email"} id="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="**********" onChange={loginHandleChange} name={"password"} id="password"/>
            </Form.Group>
            <Button variant="success" type="submit">
            Login
          </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={hide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
