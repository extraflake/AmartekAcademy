import "./index.css";
import { NavLink } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { BsTelephone, BsLink45Deg } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer() {
	return (
		<div className="wrap-foot">
			<section className="footer">
				{/* image footer */}
				<div className="foot-img">
					<img src="/amartek-logo.png" alt="Logo App" />
				</div>
				<div className="flex-foot-info">
					{/* grouping footer info */}
					<div className="foot-info">
						{/* alamat */}
						<div className="alamat">
							<FaRegAddressBook size={22} color="#707B8E" />
							<p>
								Chase Plaza, Jl. Jenderal Sudirman No.Kav. 21, Kuningan, Karet, Kecamatan
								Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
							</p>
						</div>

						{/* nomor telepon */}
						<div className="no-telp">
							<BsTelephone color="#707B8E" />
							<p>021-25989780</p>
						</div>

						{/* email */}
						<div className="email">
							<BsLink45Deg color="#707B8E" size={18} />
							<NavLink to="https://www.amartek.id/" target="_blank">
								https://www.amartek.id/
							</NavLink>
						</div>
					</div>

					{/* footer navbar section */}
					<div className="foot-nav">
						<ul>
							<li>
								<NavLink to="/">Cari Lowongan</NavLink>
							</li>
							<li>
								<NavLink to="/tentang">Tentang</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/* footer social media section */}
				<div className="social-media">
					<NavLink
						to="https://www.instagram.com/amartha.teknologi/"
						target="_blank"
						className="instagram"
					>
						<AiOutlineInstagram size={20} />
					</NavLink>
					<NavLink
						to="https://www.linkedin.com/company/amartek/"
						target="_blank"
						className="linkedin"
					>
						<AiFillLinkedin size={20} />
					</NavLink>
				</div>

				{/* copyright text */}
				<p className="copyright">&copy; Created by AMARTEK GDP Bootcamp-21 ✨</p>
			</section>
		</div>
	);
}

export default Footer;
