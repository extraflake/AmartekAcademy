import "bootstrap";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; //Import CSS untuk styling
import Swal from "sweetalert2";

export function LoginModal({
  show,
  hide,
  bioById,
  methodreqBioModal,
  httpstatus,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="johndoe@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="**********" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={hide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
