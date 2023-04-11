import "./index.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";

function TemplateCardLowongan() {
	return (
		<div className="card">
			{/* container card info */}
			<div className="card-info">
				{/* container card image */}
				<div className="img-card">
					<img src="/dummyimg-card.jpg" alt="Gambar Lowongan Pekerjan" />
				</div>

				{/* container card judul */}
				<div className="judul-card">
					<NavLink to="/">Lowongan AMARTEK GDP Batch 22</NavLink>
				</div>

				{/* container deskripsi card */}
				<div className="desc-card">
					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus amet esse
						sit ad sapiente quisquam eos natus nemo autem? Provident!
					</span>
				</div>

				{/* container tanggal card */}
				<div className="tanggal-card">
					<MdAccessTimeFilled />
					<p>Kamis, 23 Maret 2023</p>
				</div>
			</div>

			{/* container button card */}
			<div className="button-card">
				<NavLink to="/">daftar</NavLink>
			</div>
		</div>
	);
}

export default TemplateCardLowongan;
