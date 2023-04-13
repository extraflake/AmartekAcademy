import "bootstrap";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS untuk styling
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export function RegisterModal({
  show,
  hide,
  bioById,
  methodreqBioModal,
  httpstatus,
}) {
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
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Anda akan dialihkan ke halaman pendaftaran akun <b>Amartek Academy</b>, Silahkan mendaftar akun di <b>Amartek Academy</b>, kemudian kembali ke Login dan mendaftar lowongan.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={hide}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            <NavLink
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register
            </NavLink>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
