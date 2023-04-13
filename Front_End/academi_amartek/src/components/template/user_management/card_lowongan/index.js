import "./index.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { NavLink } from "react-router-dom";
import JobVacancy from "../job-vacancy";
import React from "react";

function TemplateCardLowongan({data}) {
	return (
		<div className="card">
			{/* container card info */}
			<div className="card-info">
				{/* container card image */}
				<div className="img-card">				
					<img src="https://i.ibb.co/MZn1w9s/image0.jpg" alt="Gambar Lowongan Pekerjan" />
				</div>
				
				{/* container card judul */}
				<div className="judul-card">
					<NavLink to="/">{data.titleJob}</NavLink>
				</div>

				{/* container deskripsi card */}
				<div className="desc-card">
					<span>
						{data.jobDesc}
					</span>
				</div>

				{/* container tanggal card */}
				<div className="tanggal-card">
					<MdAccessTimeFilled />
					<p>{data.openDate}</p>
				</div>

				{/* container button card */}
				<div className="button-card">
					{/* <NavLink to="/user_management/job-vacancy">daftar</NavLink> */}
					<NavLink to={`/user_management/job-vacancy/${data.id}`}>Lihat</NavLink>
				</div>
			</div>			
		</div>
	);
}

export default TemplateCardLowongan;
