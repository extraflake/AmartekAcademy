import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "../index.css";
import APICV from '../../../../services/curriculumvitae';
import { useState, useEffect } from "react";
import React from 'react'; // impor file CSS Bootstrap
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';


function CurriculumVitaeCetak(){
    
    // window.onload = () => {
    //     window.print();
    //   };
    const handlePrint = () => {
        window.print(); // Memicu pencetakan
      }
    const styleimg ={
        "width" : "4cm",
        "height" : "4cm"
    }
    const styleli = {
        "list-style-type": "none"
    }
    const [dataBiodata, setDataBiodata] = useState(null);
    const [dataEducation, setDataEducation] = useState(null);
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
        // document.title = "Curriculum Vitae";
        return() =>{
            setTimeout(() => {
                window.print(); // Memicu pencetakan setelah 3 detik
              }, 1000); 
            setTimeout(() => {
                window.close(); // Memicu pencetakan setelah 3 detik
            }, 2000); 
              
        }

      }, []);
     // Mengatur waktu delay dalam milidetik (3 detik dalam contoh ini)

    return(
    <div>
        <div class="row justify-content-center">
            <div class="card isi-konten-print">    
                    <div className="card-body">
                        <div className="rounded text-center"><img className="rounded-circle img-fluid img-thumbnail styleimgprofil"
                             alt="avatar2" src="https://i.ibb.co/WtD2tb9/GDP.jpg"></img></div>
                                {dataBiodata && dataBiodata.data.map((data) => {
                                    return (
                                          
                        <div>
                            <Helmet>
                                <title>CurriculumVitae of {data.fullname} </title>
                            </Helmet>
                                    <h4 className="card-title mt-2 text-center">{data.fullname}</h4>
                                    <table width={"100%"}>
                            <tr>
                                <td width={"20%"}><strong>Date of Birth </strong></td><td width={"1%"}><strong>:</strong></td><td> {data.birth_date}
                            </td>
                            </tr>
                            <tr>
                                <td>
                                <strong>Phone</strong></td><td><strong>:</strong></td><td> 0{data.no_telp} 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <strong>Address</strong> </td><td><strong>:</strong></td><td> {data.address}
                                </td>
                            </tr>
                        </table>
                        <hr></hr>
                        <h4 class="card-title">Summary</h4>
                    <p className="card-text">{data.summary}</p>
                        </div>
                                    );
                                })}
                
                </div>
                </div>
        </div>
        <div class="row justify-content-center">
            <div class="card isi-konten-print" id="experience" >
                <div class="card-body">
                    <h5 className="card-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>Project Experience</h5>
                    <table width={"100%"}>
                        {dataProject && dataProject.data.map((data) => {
                            return(
                                <tr>
                        <td hidden>{data.id}</td>
                        <td>
                        <p class="card-text"><strong> {data.projectName}</strong></p>
                        <p>{data.projectStart} to {data.projectEnd} </p>
                        <p>{data.projectDesc}</p>

                        <hr></hr>
                                </td>
                            </tr>
                            );
                        })}
                       
                    </table>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="card isi-konten-print" id="education" >
                <div class="card-body">
                    <h5 class="card-title">Education</h5>
                    <table width={"100%"}>
                        {dataEducation && dataEducation.data.map((data) => {
                            return(
                        <tr>
                            <td hidden>{data.id}</td>
                        <td>
                        <p class="card-text"><strong> {data.univ_name}</strong></p>
                        <p>{data.major_name}, {data.degree_name}</p>
                        <p>{data.gpa}</p>
                        <hr></hr>
                                </td>
                            </tr>
                            );
                        })}
                       
                    </table>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="card isi-konten-print" id="userskill" >
                <div class="card-body">
                    <h5 class="card-title">Skills</h5>
                    <ul className='ulskill'>
                        {dataUserSkill && dataUserSkill.data.map((data) => {
                            return(  
                        <li><strong> {data.skillName}</strong></li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
</div>        
    )
}

export default CurriculumVitaeCetak;