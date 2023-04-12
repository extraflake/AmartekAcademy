import "bootstrap";
import { useState } from "react";
import { LoginModal } from "../../../molecule/modal/loginmodal";
import { RegisterModal } from "../../../molecule/modal/registermodal";
import Footer from "../footer";
import Navbar from "../navbar";

function TemplateTentang() {
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
      {/* <h3>test</h3> */}
      <Footer />
    </div>
  );
}

export default TemplateTentang;
