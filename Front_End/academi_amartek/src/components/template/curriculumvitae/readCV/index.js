import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PdfDocument from '../printCV';
import "./index.css";
import APICV from '../../../../services/curriculumvitae';
import { useState, useEffect } from "react";
import React from 'react'; // impor file CSS Bootstrap
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import Swal from "sweetalert2";


function CurriculumVitaeRead(){
    const handlePrintCV = () => {
        // // Logika pencetakan PDF
        // // Panggil PdfDocument di sini
        // const pdfBlob = await PdfDocument.toBlobAsync({
        //     dataBiodata,
        //     dataProject,
        //     dataEducation,
        //     dataUserSkill
        //   });
        
        // // Membuat objek URL dari Blob PDF
        // const pdfUrl = URL.createObjectURL(pdfBlob);
        
        // // Membuat jendela baru untuk mencetak PDF
        // const printWindow = window.open(pdfUrl, "_blank");
        // if (printWindow) {
        //   // Menunggu jendela pencetakan ditutup, kemudian membebaskan objek URL
        //   printWindow.addEventListener("beforeunload", () => {
        //     URL.revokeObjectURL(pdfUrl);
        //   });
        // } else {
        //   console.error("Tidak dapat membuka jendela pencetakan.");
        // }
        ReactPDF.render(<PdfDocument/>, `${__dirname}/example.pdf`);
      };
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
    const [methodReq, setMethodReq] = useState("");
    const [bioById, setbioById] = useState(null);
    const [eduById, seteduById] = useState(null);
    const [proById, setproById] = useState(null);

    const [showBioModal, setShowBioModal] = useState(false);
    const [showEduModal, setShowEduModal] = useState(false);
    const [showProModal, setShowProModal] = useState(false);
    const [showSkillModal, setShowSkillModal] = useState(false);
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
                        <div className="rounded text-center"><img className="rounded-circle img-fluid img-thumbnail styleimgprofil"
                             alt="avatar2" src="https://i.ibb.co/WtD2tb9/GDP.jpg"></img></div>
                                {dataBiodata && dataBiodata.data.map((data) => {
                                    return (
                                          
                        <div>
                                    <h4 className="card-title mt-2 text-center">{data.fullname}</h4>
                        <table>
                            <tr>
                                <td style={{ paddingRight: "10px" }}><strong>Date of Birth </strong></td><td> {data.birth_date}
                            </td>
                            </tr>
                            <tr>
                                <td>
                                <strong>Phone</strong> </td><td> {data.no_telp} 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <strong>Address</strong> </td><td> {data.address}
                                </td>
                            </tr>
                        </table>
                        <PDFDownloadLink document={<PdfDocument/>} fileName='CV'>
                            {({loading}) => (loading ? <button>Loading Document</button> : <button>Download</button>)}
                        </PDFDownloadLink>
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
            <div class="card isi-konten" id="experience" >
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
            <div class="card isi-konten" id="education" >
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
            <div class="card isi-konten" id="userskill" >
                <div class="card-body">
                    <h5 class="card-title">Skills</h5>
                    <table width={"100%"}>
                        {dataUserSkill && dataUserSkill.data.map((data) => {
                            return(
                                <tr>
                        <td>
                        <p class="card-text"><strong> {data.skillName}</strong></p>
                        <hr></hr>
                                </td>
                            </tr>
                            );
                        })}
                       
                    </table>
                </div>
            </div>
        </div>
</div>        
    )
}

export default CurriculumVitaeRead;