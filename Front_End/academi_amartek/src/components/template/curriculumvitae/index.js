import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./index.css";
import APICV from '../../../services/curriculumvitae';
import { useState, useEffect } from "react";
import { BiodataModal } from '../../molecule/modal/biodatamodal'; 
import React from 'react'; // impor file CSS Bootstrap
import { EducationModal } from '../../molecule/modal/educationmodal';
import { ProjectModal } from '../../molecule/modal/projectmodal';
import Swal from "sweetalert2";
import { SkillModal } from '../../molecule/modal/skillmodal';
import { RiEditBoxLine } from "react-icons/ri"
import axios from "axios";
import { MdOutlineDeleteOutline, MdOutlineAddBox } from "react-icons/md";
import "./cetakcv/index.js";
import {FaDownload} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function CurriculumVitae(){
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
    const [methodProReq, setMethodProReq] = useState("");
    const [methodEduReq, setMethodEduReq] = useState("");
    const [bioById, setbioById] = useState("");
    const [eduById, seteduById] = useState(null);
    const [proById, setproById] = useState(null);
    const [uskillById, setuskillById] = useState(null);

    const [showBioModal, setShowBioModal] = useState(false);
    const [showEduModal, setShowEduModal] = useState(false);
    const [showProModal, setShowProModal] = useState(false);
    const [showSkillModal, setShowSkillModal] = useState(false);

    const handlePrint = () => {
        // setTimeout(() => {
           
        //       }, 2000); 
        window.open('/cetakcv');
    
      }
    const handleCloseBioModal = () => {
        setShowBioModal(false);
        setbioById(null);
        
    //   setRegionById(null);
    };
    const handleCloseEduModal = () => {
        setShowEduModal(false);
        seteduById(null);
    //   setRegionById(null);
    };
    const handleCloseProModal = () => {
        setShowProModal(false);
        setproById(null);
    //   setRegionById(null);
    };
    const handleCloseSkillModal = () => {
        setShowSkillModal(false);
    //   setRegionById(null);
    };
    const handleShowBioModal = () => {
        setShowBioModal(true);
      };
    const handleShowEduModal = () => {
        setShowEduModal(true);
        setMethodEduReq("post");
    };
    const handleShowProModal = () => {
        setShowProModal(true);
        setMethodProReq("post");
    };
    const handleShowSkillModal = () => {
        setShowSkillModal(true);
    };
    
    const handleDeleteProject = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            APICV.deleteProject(id).then((res) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Data has been deleted!',
                showConfirmButton: false,
                timer: 1500
              })
              setHttpStatus(result.status);
            });
          }
        });
      };
      const handleDeleteEducation = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            APICV.deleteEducation(id).then((res) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Data has been deleted!',
                showConfirmButton: false,
                timer: 1500
              })
              setHttpStatus(result.status);
            });
          }
        });
      };
      const handleDeleteUserSkill = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
        }).then((result) => {
          if (result.isConfirmed) {
            APICV.deleteUserSkill(id).then((res) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Data has been deleted!',
                showConfirmButton: false,
                timer: 1500
              })
              setHttpStatus(result.status);
            });
          }
        });
      };

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
        document.title = "Curriculum Vitae";
        return () =>{
          setHttpStatus(null)
        };
      }, [httpStatus]);

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
                        <table width={"100%"}>
                            <tr>
                                <td width={"11%"}><strong>Date of Birth </strong></td><td width={"1%"}><strong>:</strong></td><td> {data.birth_date}
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
                        <button className="btn"
                         onClick={() => {
                            setShowBioModal(true);
                            // setMethodEduReq("put");
                            axios.get(`http://localhost:8088/api/cv/biodata/${data.id}`, {
                                    responseType: "json",
                                })
                                .then((res) => {
                                    setbioById(res.data);
                                
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }}
                        ><RiEditBoxLine  style={{ fontSize: '30px' }}/></button>
                        {/* <PDFDownloadLink document={<PdfDocument/>} fileName='CV'>
                            {({loading}) => (loading ? <button  className="btn">Loading Document</button> : <button className="btn"><FaDownload  style={{ fontSize: '24px' }}/></button>)}
                        </PDFDownloadLink> */}
                        <button onClick={handlePrint} className='btn'><FaDownload style={{ fontSize: '24px' }}/></button>
                    {/* <NavLink to="/cetakcv"><FaDownload style={{ fontSize: '24px' }}/></NavLink> */}
                        <hr></hr>
                        <h5 class="card-title"><strong>Summary</strong></h5>
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
                <h5 class="card-title" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px" }}>
                <span><strong>Project Experience</strong></span>
                <button className="btn" onClick={handleShowProModal}><MdOutlineAddBox  style={{ fontSize: '40px' }}/></button>
                </h5>
                    <table width={"100%"}>
                        {dataProject && dataProject.data.map((data) => {
                            return(
                                <tr>
                        <td hidden>{data.id}</td>
                        <td width={"94%"} className="tabletd" >
                        <p class="card-text"><strong> {data.projectName}</strong></p>
                        <p>{data.projectStart} to {data.projectEnd} </p>
                        <p>{data.projectDesc}</p>

                        <hr></hr>
                                </td>
                                <td width={"6%"}>
                                    <button className="btn"
                                    onClick={() => {
                                        setShowProModal(true);
                                        setMethodProReq("put");
                                        axios.get(`http://localhost:8088/api/cv/projectid/${data.id}`, {
                                                responseType: "json",
                                            })
                                            .then((res) => {
                                                setproById(res.data);
                                            
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }}
                                    ><RiEditBoxLine  style={{ fontSize: '28px' }} /></button>
                                    <button className="btn" onClick={() => handleDeleteProject(data.id)}><MdOutlineDeleteOutline  style={{ fontSize: '29px' }} /></button>
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
                <h5 class="card-title" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px" }}>
                <span><strong>Education</strong></span>
                    <button className="btn" onClick={handleShowEduModal}><MdOutlineAddBox  style={{ fontSize: '40px' }} /></button>
                    </h5>
                    <table width={"100%"}>
                        {dataEducation && dataEducation.data.map((data) => {
                            return(
                        <tr>
                            <td hidden>{data.id}</td>
                        <td width={"94%"} className="tabletd" >
                        <p class="card-text"><strong> {data.univ_name}</strong></p>
                        <p>{data.major_name}, {data.degree_name}</p>
                        <p>{data.gpa}</p>
                        <hr></hr>
                                </td>
                                <td width={"6%"}>
                                <button className="btn" 
                                 onClick={() => {
                                    setShowEduModal(true);
                                    setMethodEduReq("put");
                                    axios.get(`http://localhost:8088/api/cv/educationid/${data.id}`, {
                                            responseType: "json",
                                        })
                                        .then((res) => {
                                            seteduById(res.data);
                                        
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                        });
                                }}
                                ><RiEditBoxLine  style={{ fontSize: '28px' }}/></button>
                                <button className="btn" onClick={() => handleDeleteEducation(data.id)}><MdOutlineDeleteOutline  style={{ fontSize: '29px' }} /></button>
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
                <h5 class="card-title" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px" }}>
                <span><strong>Skills</strong></span>
                    <button className="btn" onClick={handleShowSkillModal}><MdOutlineAddBox style={{ fontSize: '40px' }} /></button></h5>
                    <ul className='ulskill'>
                        {dataUserSkill && dataUserSkill.data.map((data) => {
                            return(  
                        <li><strong> {data.skillName}</strong> <button className="btn" onClick={() => handleDeleteUserSkill(data.id)}>
                            <MdOutlineDeleteOutline style={{ fontSize: '18px' }}/></button></li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>


<BiodataModal
    show={showBioModal}
    hide={handleCloseBioModal}
    bioById={bioById}
    methodreqBioModal={methodReq}
    httpstatus={setHttpStatus}
/>
<EducationModal
    show={showEduModal}
    hide={handleCloseEduModal}
    methodreqEduModal={methodEduReq}
    eduById={eduById}
    httpstatus={setHttpStatus}
/>
<ProjectModal
    show={showProModal}
    hide={handleCloseProModal}
    methodreqProModal={methodProReq}
    proById={proById}
    httpstatus={setHttpStatus}
/>
<SkillModal
    show={showSkillModal}
    hide={handleCloseSkillModal}
    httpstatus={setHttpStatus}
/>
</div>        
    )
}

export default CurriculumVitae;