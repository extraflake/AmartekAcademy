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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            arcu nulla. Donec tellus nisl, sollicitudin in dui non, tincidunt
            pulvinar nibh. Sed quis molestie odio, non molestie ligula. Duis
            commodo suscipit elit eu eleifend. Vestibulum vel libero diam. In
            condimentum augue at tempus maximus. Aenean quis purus a lectus
            fermentum interdum quis et augue. Donec viverra nulla lorem, ac
            vestibulum orci dapibus quis. Donec at molestie neque, at pretium
            ipsum. Vestibulum laoreet in nisl pulvinar aliquam. Donec dignissim
            erat mauris, quis auctor lectus ultricies eget. Integer blandit nunc
            ex,
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
