import Footer from "../footer";
import Navbar from "../navbar";
import "bootstrap";
import "./index.css";
import API from "../../../../services/jobVacancy";
import { useState, useEffect } from "react";
import { FaFontAwesome } from "react-icons/fa";
import React from "react";
import { useParams } from 'react-router-dom';

function JobVacancy(props){
    // const id = props.match.params.id;
    const { id } = useParams();
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

    return (          
        <div>      
            <Navbar />
        <div className="jobInfoVacancy">            
            <div className="imgVacancy">
                <img src="https://i.ibb.co/MZn1w9s/image0.jpg" alt="Gambar Lowongan Pekerjan" />                     
            </div>   

            <div className="detailJob">
                <h1>{dataJobById.titleJob}</h1>                
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
                <h2>Requirement:</h2>
                <ul>
                    <li>{dataJobById.jobRequire}</li>
                </ul>
                <h2>Benefit:</h2>
                <ul>
                    <li>{dataJobById.jobBenefit}</li>
                </ul>                          
                <a href="#">Apply Now!</a>                                                 				                                   
            </div>                           
        </div>   
            <Footer />     
        </div>        
    );
}

export default JobVacancy;