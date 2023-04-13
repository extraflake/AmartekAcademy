import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./index.css";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { LoginModal } from "../../../molecule/modal/loginmodal";
import { RegisterModal } from "../../../molecule/modal/registermodal";

function TemplateRegister() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <div>
      <Navbar
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <LoginModal show={showLoginModal} hide={() => setShowLoginModal(false)} />
      <RegisterModal
        show={showRegisterModal}
        hide={() => setShowRegisterModal(false)}
      />
      <div className="wrap-register">
        <div className="cards">
          <h1 className="registtitle">Daftar Akun Baru</h1>
          <Form className="mt-5">
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Row className="mt-3">
              <Col>
                <Form.Group>
                  <Form.Label>No. Telp</Form.Label>
                  <Form.Control type="number" placeholder="Nomor HP" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan Tanggal Lahir Tahun-Bulan-Tanggal"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan Password"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan Konfirmasi Password"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group>
                  <Form.Label>Universitas</Form.Label>
                  <Form.Control type="text" placeholder="Masukan Universitas" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Jurusan</Form.Label>
                  <Form.Control type="text" placeholder="Masukan Jurusan" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mt-3">
              <Form.Text>
                Password harus memiliki panjang minimal 8 karakter
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Text> Password harus mengandung minimal 1 angka</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Text>
                Password harus mengandung minimal 1 huruf kapital
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Text>Password harus mengandung minimal 1 simbol</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Saya ingin menerima email subscribtion"
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Dengan mendaftar Anda dianggap telah membaca dan menyetujui Aturan Penggunaan dan kebijakan yang berlaku"
              />
            </Form.Group>
            <div className="hshshs ">
              <button
                type="submit"
                style={{ width: "100px" }}
                className="btn btn-blue btn-primary d-flex align-items-center justify-content-center btn btn-primary"
              >
                Daftar
              </button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TemplateRegister;
