import Header from "../header";
import Sidebar from "../sidebar";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurriculumVitaeRead from "../../curriculumvitae/readCV"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import APIINTERVIEW from '../../../../services/arrangeinterview';
import Input from '@mui/material/Input';

import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';

// // import { InterviewModal } from "../../../molecule/modal/Interviewmodal";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TemplateArrangeinterview() {

    const [alldatainterview, setdatainterview] = useState(null);
    const [getFullname, setfullname] = useState(null);
    const [getHttpstatus, sethttpstatus] = useState(null);
    const [open, setOpen] = useState(false);
    const [getUserbyId, setUserid] = useState(null);
    const [geturl, seturl] = useState("");
    const [getRole, setRole] = useState(null);
    const [getnamerole, setnamerole] = useState(null);
    const [getUserAll, setUserAll] = useState(null);
    const [getrecId, setrecId] = useState(null)
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => setOpen(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [getid, setid] = useState(null);


//     const handleChange = (event) => {
//         setnamerole(event.target.value);

    };
    const handleChangeid = (id) => {
        setid(id);
    }

    const handleSubmit = () => {
        if (getRole == "HR") {
            APIINTERVIEW.putInterviewHr(getrecId, selectedDate, geturl, getnamerole).then((res) => {
                handleClose(false);
                Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                });
                sethttpstatus(res?.status);
                setSelectedDate("");
                setnamerole("");
                console.log(getrecId, selectedDate, getnamerole);
            }).catch((err) => {
                console.log(err);
            })
        } else if (getRole == "Trainer") {
            APIINTERVIEW.putInterviewTrainer(getrecId, selectedDate, geturl, getnamerole).then((res) => {
                handleClose(false);
                Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                });
                //  setSelectedUser( "" );

                sethttpstatus(res.status);
                setSelectedDate("");
                setnamerole("");
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        APIINTERVIEW.getallInterview().then((response) => {
            setdatainterview(response.data);
            // console.log("ini interview" + response.data)
            // console.log( response.data.data[ 0 ].applicant.id );
            APIINTERVIEW.getBiodatabyid(response.data.data[0].applicant.id).then((response) => {
                setfullname(response.data.data[0].fullname);
                // console.log( response.data.data[ 0 ].fullname );
            })
        });

        APIINTERVIEW.getUserAll().then((response) => {
            setUserAll(response.data);

        });

        return () => {
            sethttpstatus(null);

        };

    }, [getHttpstatus]);

    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Container maxWidth="xxlg" sx={{
                    bgcolor: "#D3D3D3"
                }} margin="dense" >
                    <Container maxWidth="xlg" sx={{
                        bgcolor: "red",
                        marginTop: "30px",
                        bgcolor: "background.paper",
                        height: "100hv"
                    }}>
                        <div className="accord-sidebar">

                            {alldatainterview && alldatainterview.data.map((item, index) => {
                                return (
                                    <Accordion className="accord-container" >
                                        <AccordionSummary
                                            expandIcon={<MdExpandMore size={23} color="white" />}
                                            aria-controls="panelia-content"
                                            id="panel1a-header"
                                        >
                                            <div>
                                                <p style={{ margin: "0 25px 0 25px" }}>  <span style={{ margin: " 0 25px 0 0" }}> {getFullname}</span>
                                                    <NavLink exact="true" to={"/ta/readcv/" + { getFullname } + "/" + item.id} className="btn btn-outline-success" type="button">
                                                        View CV
                                                    </NavLink>
                                                    <Routes>
                                                        <Route exact="true" path={"/ta/readcv/" + { getFullname } + "/" + item.id} element={<CurriculumVitaeRead />} />
                                                        <Route render={function () {
                                                            return <p>Not found</p>
                                                        }} />
                                                    </Routes>
                                                </p>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{
                                            bgcolor: "#D3D3D3",
                                            color: "black"
                                        }}>
                                            <AiOutlineUser />
                                            Status HR  <span style={{ margin: "0 10px 0 36px" }}>: {item.statusHr}</span> <Button size="small" dir="rtl" variant="outlined" onClick={() => { setRole("HR"); setOpen(true); setrecId(item.id); }} >Set Time Interview</Button>
                                            <p style={{ margin: "10px 0 0 0" }}>
                                                <AiOutlineUser />

                                                Status Trainer <span style={{ margin: "0 10px 0 10px" }}>: {item.statusTrainer}</span>  <Button size="small" dir="rtl" variant="outlined" sx={{
                                                    flexDirection: 'row-reverse',
                                                }} onClick={() => { setRole("Trainer"); setOpen(true); setrecId(item.id); }} >Set Time Interview</Button>

                                                <div>
                                                </div>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            }
                            )}

                        </div>
                    </Container>


                </Container>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Set Interview
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            {/* <LocalizationProvider dateAdapter={ AdapterDayjs }>
                      <DatePicker
                          inputFormat="yyyy/MM/dd"
                          value={ selectedDate }
                          onChange={ handleDateChange }
                          renderInput={ ( params ) => (
                              <TextField  { ...params } />
                          ) }
                      />
                  </LocalizationProvider> */}
                            <input className="form-control" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <Input
                                    id="standard-adornment-amount"
                                    placeholder="Masukan Link Interview"
                                    onChange={(e) => seturl(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Silahkan Pilih</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth"
                                    id="demo-simple-select-autowidth"
                                    value={getnamerole}
                                    onChange={handleChange}
                                    label="Silahkan Pilih"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {getUserAll && getUserAll.data.map((item, index) => {
                                        if (item?.role?.name == getRole) {
                                            return (
                                                <MenuItem value={item.id}>{item.email}</MenuItem>
                                            )
                                        }
                                    })
                                    }
                                </Select>
                            </FormControl>




                        </Typography>
                        <Button sx={{ m: 1 }} onClick={handleSubmit} variant="outlined" >Save</Button>

                    </Box>
                </Modal>

            </div>


       </div >
    );
                                

export default TemplateArrangeinterview;
