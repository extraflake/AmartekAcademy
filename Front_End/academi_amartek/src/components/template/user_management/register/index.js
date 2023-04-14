import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./index.css";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { LoginModal } from "../../../molecule/modal/loginmodal";
import { RegisterModal } from "../../../molecule/modal/registermodal";
import { useContext } from "react";
import DataContext from "../../../../DataContext/DataContext";
import { useEffect } from "react";
import APICV from "../../../../services/curriculumvitae";

function TemplateRegister() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { registerHandleChange, registerHandleSubmit } = useContext(DataContext);
  const [univ, setDataUniv] = useState(null);
  const [major, setDataMajor] = useState(null);

  useEffect(() => {
    APICV.getUniv().then((res) => {
      setDataUniv(res?.data)
    }).catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    APICV.getMajor().then((res) => {
      setDataMajor(res?.data)
    }).catch((err) => console.log(err))
  }, [])

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
          <Form className="mt-5" onSubmit={registerHandleSubmit}>
            <Form.Group>
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" onChange={registerHandleChange} name={"fullname"} id={"fullname"} />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={registerHandleChange} name={"email"} id={"email"} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Row className="mt-3">
              <Col>
                <Form.Group>
                  <Form.Label>No. Telp</Form.Label>
                  <Form.Control type="number" placeholder="Nomor HP" onChange={registerHandleChange} name={"noTelp"} id={"noTelp"} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Masukan Tanggal Lahir Tahun-Bulan-Tanggal"
                    onChange={registerHandleChange}
                    name={"birthdate"} id={"birthdate"}
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
                    onChange={registerHandleChange}
                    name={"password"} id={"password"}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan Konfirmasi Password"
                    onChange={registerHandleChange}
                    name={"reTypePassword"} id={"reTypePassword"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Label>Universitas</Form.Label>
                <Form.Select  onChange={registerHandleChange} name={"univ"} id={"univ"}>
                  {/* <Form.Control type="dropdown" placeholder="Masukan Universitas" onChange={registerHandleChange} name={"univ"} id={"univ"}/>
                   */}
                   <option selected disabled hidden>Choose Here</option>
                  {univ?.data?.map((item, index) => (
                    <option value={item.id} key={index + 1}>{item.univ_name}</option>

                  ))}

                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Jurusan</Form.Label>
                <Form.Select  onChange={registerHandleChange} name={"major"}  id={"major"} >
                <option selected disabled hidden>Choose Here</option>

                  {major?.data?.map((item, index) => (
                    <option value={item.id} key={index +1}>{item.major_name}</option>
                  ))}
                </Form.Select>
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
            <div className="hshshs">
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
