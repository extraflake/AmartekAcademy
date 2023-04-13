import TemplateCardLowongan from "../card_lowongan";
import Footer from "../footer";
import Navbar from "../navbar";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "../../../../services/jobVacancy";
import { useState, useEffect } from "react";

function TemplateCariLowongan() {

	const [allDataJob, setAllDataJob] = useState([{}]);
	const [httpStatus, setHttpStatus] = useState(null);

	useEffect(() => {
		API.getAllJob().then((response) => {
            setAllDataJob(response.data.data);
            // console.log(response.data.data);
        });		
		return () => {		
			setHttpStatus(null);
		}
		// document.title = "Daftar Lowongan Pekerjaan";
	}, [httpStatus]);

	// setingan untuk slider nya
	const settings = {
		dots: true,
		speed: 500,
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1155,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: "0",
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "0",
				},
			},
		],
	};

	return (
		<div className="cari-lowongan">
			<Navbar />

			{/* component card slider */}
			<Slider {...settings} className="wrap-card-lowongan">
				{allDataJob.map((item) => (
					<TemplateCardLowongan data={item} />
				))}												
			</Slider>

			<Footer />
		</div>
	);
}

export default TemplateCariLowongan;
