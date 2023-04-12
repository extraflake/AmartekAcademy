// import css nya
import "./index.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function Navbar() {
	// state buat bikin sticky navbar ketika di scroll
	const [stickyClass, setStickyClass] = useState("");

	// state untuk toggle hamburger menu navbar versi mobile phone
	const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

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
								to="/"
								className={({ isActive }) => (isActive ? "active" : "inactive")}
							>
								Cari Lowongan
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
					<div className="nav-button">
						<NavLink to="/">Masuk</NavLink>
						<NavLink to="/">Daftar</NavLink>
					</div>
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
			<div className={`mobile-nav ${toggleHamburgerMenu ? "show-mobile-nav" : ""}`}>
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
