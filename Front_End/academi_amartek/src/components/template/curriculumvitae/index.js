import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./index.css";
import APICV from '../../../services/curriculumvitae';
import { useState, useEffect } from "react";
import React from 'react'; // impor file CSS Bootstrap
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap'; // impor komponen Card Bootstrap


function CurriculumVitae(){
    const styleimg ={
        "width" : "4cm",
        "height" : "4cm"
    }
    const styleli = {
        "list-style-type": "none"
    }
    const [dataBiodata, setDataBiodata] = useState(null);
    const [dataeducation, setDataEducation] = useState(null);
    const [dataProject, setDataProject] = useState(null);
    const [dataUserSkill, setDataUserSkill] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);

    useEffect(() => {
        APICV.getBiodata().then((response) => {
            setDataBiodata(response.data);
        });
        APICV.getEducation().then((response) => {
            setDataEducation(response.data);
        });
        APICV.getProject().then((response) => {
            setDataProject(response.data);
        });
        APICV.getUserSkill().then((response) => {
            setDataUserSkill(response.data);
        });
        return () =>{
          setHttpStatus(null)
        };
      }, [httpStatus]);
      console.log(dataBiodata)

    return(
<div>
        <div class="row justify-content-center">
            <div class="card isi-konten">    
                    <div className="card-body">
                    <div className="text-center mb-3">
                        <div className="rounded"><img className="rounded-circle img-fluid img-thumbnail"
                                style={styleimg} alt="avatar2" src=""></img></div>
                                {dataBiodata && dataBiodata.data.map((data) => {
                                    return (
                                        <div>
                                            <h4>{data.id}</h4>
                                            <h4>{data.fullname}</h4>
                                            <h4>{data.birth_date}</h4>
                                            <h4>{data.no_telp}</h4>
                                            <h4>{data.summary}</h4>
                                            <h4>{data.address}</h4>
                                        </div>
                                    );
                                })}
                        <h4 className="card-title mt-2">ILHAM BUONO PUTRA</h4>
                    </div>
                    <ul>
                        <li style={styleli}><strong>Date of Birth:</strong> 2000</li>
                        <li style={styleli}><strong>Email:</strong> ilhambuono@gmail.com</li>
                        <li style={styleli}><strong>Phone:</strong> (+62)87877480715</li>
                        <li style={styleli}><strong>Address:</strong> Kemayoran, Jakarta, Indonesia</li>
                    </ul>
                    <p className="card-text">.</p>
                </div>
                </div>
        </div>
        <div class="row justify-content-center">
            <div class="card isi-konten" id="experience" >
                <div class="card-body">
                    <h5 class="card-title">Experience</h5>
                    <p class="card-text"> Agate Academy Studi Independen Aug 2021 - Jan 2022</p>
                    <p>Game Producer, Product Management - Internship </p>
                    <p>Attended and completed the MSIB Kampus merdeka Program (Independent Study at Agate Academy - Game
                        development) as Game Producer and Product Management role to learn and develop a Project where
                        the final project of this program is a prototype game Revenge of Hero:</p>
                    <ul>
                        <li>Created Pre-Production and Production plans including task/feature breakdowns, development
                            plans, sprint plans, and sprint backlogs</li>
                        <li>Reviewed and approve Game Design Documents, Asset Management, Quality Assurance</li>
                        <li>Was a team representative, ensure a well-developed product according to the timeline and
                            sprint backlogs</li>
                        <li>Led briefings and daily scrum discussions, Sprint Plans, Sprint Review, Sprint Retrospective
                            with the team and directing the work of each team member according to the Task backlog,
                            sprint plans, and game design document</li>
                    </ul>
                    <hr></hr>
                    <p>Lembaga Layanan Pendidikan Tinggi (LLDIKTI) Wilayah III Mar 2021 - Jul 2021</p>
                    <p>Kelembagaan dan Sistem Informasi - Internship</p>
                    <p>Completed a 4 months internship program that has jobs description:</p>
                    <ul>
                        <li>Did Data Input</li>
                        <li>Performed Data Validation</li>
                        <li>Helped to create and print letters</li>
                        </ul>
                </div>
            </div>
        </div>
<table className="" border={1}>
    <thead>
        <tr>
            <td>Education</td>
        </tr>
    </thead>
    <tr>
        <td>s
            <p>test</p>
        </td>
        <td>s</td>
    </tr>
    <tr>
        <td>wkwkwkkw</td>
    </tr>
</table>



</div>        
    )
}

export default CurriculumVitae;