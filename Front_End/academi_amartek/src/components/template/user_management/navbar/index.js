// import css nya
import "bootstrap";

import "./index.css";
import jwtDecode from "jwt-decode"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

function Navbar({ setShowLoginModal, setShowRegisterModal }) {
  let navigate = useNavigate();
  // state buat bikin sticky navbar ketika di scroll
  const [stickyClass, setStickyClass] = useState("");

  // state untuk toggle hamburger menu navbar versi mobile phone
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const [dataUser, setDataUSer] = useState(null)

  const handleShowLogin = () => {
    setShowLoginModal(true);
  };
  const handleShowRegister = () => {
    setShowRegisterModal(true);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("isLoggedIn")
    // window.location.reload()
    navigate(`/`);
  } 

  //ambil id dr token(session)
  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if(token){
      const decodedValue = jwtDecode(token)
      // console.log(decodedValue)
      setDataUSer(decodedValue)
    }

    
  }, [])

  useEffect(() => {
    // untuk menambahkan event scroll
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      // atur ukuran layar pada saat scroll
      let windowHeight = window.scrollY;
      windowHeight > 250 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  console.log(dataUser)

  return (
    <div className={`wrap-nav ${stickyClass}`}>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/amartek-logo.png" alt="Logo App" />
        </div>
        <div className="nav-link">
          {/* navlink untuk menggunakan class active nav ketika aplikasi atau link tersebut */}
          {/* di akses */}
          <ul>
            <li>
              <NavLink
                to="/find-job"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Cari Lowongan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Curriculum Vitae
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tentang"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Tentang
              </NavLink>
            </li>
          </ul>

          {!dataUser?.id ?
            (<div className="nav-button">
              <NavLink onClick={handleShowLogin}>Masuk</NavLink>
              <NavLink onClick={handleShowRegister}>Daftar</NavLink>
            </div>) :
            (<>
              <p>Welcome ! <br />{dataUser?.email}</p>
              <button onClick={handleLogOut} className="btn btn-primary">Logout </button>
            </>
            )}


        </div>

        {/* navbar hamburger menu */}
        <div
          className="nav-hamburger"
          onClick={() => {
            setToggleHamburgerMenu(!toggleHamburgerMenu);
          }}
        >
          {toggleHamburgerMenu ? (
            <GrClose size="22px" className="close-mobile-nav" />
          ) : (
            <>
              <div></div>
              <div></div>
              <div></div>
            </>
          )}
        </div>
      </nav>

      {/* html navbar versi mobile phone */}
      <div
        className={`mobile-nav ${toggleHamburgerMenu ? "show-mobile-nav" : ""}`}
      >
        <div className="mobile-nav-link">
          <NavLink to="/">Cari Lowongan</NavLink>
          <NavLink to="/tentang">Tentang</NavLink>
        </div>
        <div className="mobile-nav-btn">
          <NavLink to="/">Masuk</NavLink>
          <NavLink to="/">Daftar</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
