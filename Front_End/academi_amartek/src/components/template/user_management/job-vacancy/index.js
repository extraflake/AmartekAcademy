import Footer from "../footer";
import Navbar from "../navbar";
import "bootstrap";
import "./index.css";
import API from "../../../../services/jobVacancy";
import { useState, useEffect } from "react";
import { FaFontAwesome } from "react-icons/fa";
import React from "react";
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { Button } from "../../../atom/button";
import SendRecruitment from "../../../../services/recruitment";

function JobVacancy(props){
    // const id = props.match.params.id;
    const { id } = useParams();
    const userId = sessionStorage.getItem("userId");
    const [dataJobById, setDataJobById] = useState([]);
    const [httpStatus, setHttpStatus] = useState(null);
    console.log(id);
    useEffect(() => {
		API.getJobById(id).then((response) => {
            setDataJobById(response.data.data);
            // console.log(response.data.data.jobDesc);
        });		
		return () => {		
			setHttpStatus(null);
		}
	}, [httpStatus]);

    const applyNow = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You will not be able to recover this item!",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Yes, apply now!",
			cancelButtonText: "No, cancel",
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
		}).then((result) => {            
			if (result.isConfirmed) {
                console.log("masuk");
                SendRecruitment.saveRecruitment(userId, id).then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "You have successfully applied!!",
                    });                    
                    setHttpStatus(res.status);
                })				
			}
		});
	};

    return (          
        <div>      
            <Navbar />
        <div className="jobInfoVacancy">            
            <div className="imgVacancy">
                <img src="https://i.ibb.co/MZn1w9s/image0.jpg" alt="Gambar Lowongan Pekerjan" />                     
            </div>   

            <div className="detailJob">
                <h2>{dataJobById.titleJob}</h2>                
                <table className="job-info">
                    <tr>
                        <td><i className="fa fa-briefcase"></i>Position <span>: {dataJobById.titleJob}</span></td>
                        <td><i className="fa fa-map-marker"></i>Open Date <span>: {dataJobById.openDate}</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-calendar"></i>Location <span>: {dataJobById.location}</span></td>
                        <td><i className="fa fa-calendar"></i>Close Date <span>: {dataJobById.closeDate}</span></td>
                    </tr>                    
                </table>                                
                <p className="description">{dataJobById.jobDesc}</p>
                <h3>Requirement:</h3>
                <ul>
                    <li>{dataJobById.jobRequire}</li>
                </ul>
                <h3>Benefit:</h3>
                <ul>
                    <li>{dataJobById.jobBenefit}</li>
                </ul>                          
                <Button typeButton="danger" onclick={() => applyNow(id)}>
					Apply Now!
				</Button>                
                {/* <a ></a> */}
            </div>                           
        </div>   
            <Footer />     
        </div>        
    );
}

export default JobVacancy;