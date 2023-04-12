import Header from "../header";
import Sidebar from "../sidebar";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import APIINTERVIEW from '../../../../services/arrangeinterview';
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InterviewModal } from "../../../molecule/modal/Interviewmodal";

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

function TemplateArrangeinterview () {
    const [ alldatainterview, setdatainterview ] = useState( null );
    const [ getFullname, setfullname ] = useState( null );
    const [ getHttpstatus, sethttpstatus ] = useState( null );
    const [ open, setOpen ] = useState( false );
    const [ getRole, setRole ] = useState( null );
    const handleOpen = () => { setOpen( true ) }
    const handleClose = () => setOpen( false );
    const [ selectedDate, setSelectedDate ] = useState( {} );
    const [ getid, setid ] = useState( null );


    const handleDateChange = ( name, newValue ) => {
        setSelectedDate( ( prev ) => ( { ...prev, [ name ]: newValue } ) );
        sethttpstatus( true );
    };

    const handleChangeid = ( id ) => {
        setid( id );
    }


    useEffect( () => {
        APIINTERVIEW.getallInterview().then( ( response ) => {
            setdatainterview( response.data );
            // console.log( response.data.data[ 0 ].applicant.id );
            APIINTERVIEW.getBiodatabyid( response.data.data[ 0 ].applicant.id ).then( ( response ) => {
                setfullname( response.data.data[ 0 ].fullname );
                // console.log( response.data.data[ 0 ].fullname );
            } )
        } );
        return () => {
            sethttpstatus( null );

        };

    }, [ getHttpstatus ] );

    console.log( selectedDate );

    return (
        <div>
            <Header />
            <div style={ { display: "flex" } }>
                <Sidebar />
                <Container maxWidth="xxlg" sx={ {
                    bgcolor: "#D3D3D3"
                } } margin="dense" >
                    <Container maxWidth="xlg" sx={ {
                        bgcolor: "red",
                        marginTop: "30px",
                        bgcolor: "background.paper",
                        height: "100hv"
                    } }>
                        <div className="accord-sidebar">

                            { alldatainterview && alldatainterview.data.map( ( item, index ) => {
                                // APIINTERVIEW.getBiodatabyid( item.applicant.id ).then( ( response ) => {
                                //     setfullname( response.data );
                                //     console.log( response.data );
                                // } )
                                console.log( item );
                                return (
                                    <Accordion className="accord-container" >
                                        <AccordionSummary
                                            expandIcon={ <MdExpandMore size={ 23 } color="white" /> }
                                            aria-controls="panelia-content"
                                            id="panel1a-header"
                                        >
                                            <div>
                                                <p style={ { margin: "0 25px 0 25px" } }>  <span style={ { margin: " 0 25px 0 0" } }> { getFullname }</span>
                                                    <Button color="success" dir="rtl" variant="outlined" fontSize="small" size="small" sx={ {
                                                    } } >View CV</Button>
                                                </p>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails sx={ {
                                            bgcolor: "#D3D3D3",
                                            color: "black"
                                        } }>
                                            <AiOutlineUser />
                                            Status HR  <span style={ { margin: "0 0 0 36px" } }>: { item.statusHr }</span> <Button size="small" dir="rtl" variant="outlined" onClick={ handleOpen } >Set Time Interview</Button>
                                            <p style={ { margin: "10px 0 0 0" } }>
                                                <AiOutlineUser />
                                                Status Trainer <span style={ { margin: "0,0,100px,150px" } }>: { item.statusTrainer }</span>  <Button size="small" dir="rtl" variant="outlined" sx={ {
                                                    flexDirection: 'row-reverse',
                                                } } onClick={ () => { setRole( "hr" ); setOpen( true ); } } >Set Time Interview</Button>

                                                <div>
                                                </div>
                                            </p>

                                        </AccordionDetails>

                                    </Accordion>



                                );
                            }
                            ) }

                        </div>
                    </Container>

                </Container>
                {/* <Modal
                    open={ open }
                    onClose={ handleClose }
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={ style }>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Set Interview
                        </Typography>
                        <Typography id="modal-modal-description" sx={ { mt: 2 } }>

                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker
                                    inputFormat="MM/DD/YYYY"
                                    value={ selectedDate }
                                    onChange={ handleDateChange }
                                    renderInput={ ( params ) => (
                                        <TextField  { ...params } />
                                    ) }
                                />
                            </LocalizationProvider>
                            <Button />
                        </Typography>
                    </Box>

                </Modal> */}

            </div>

            <InterviewModal
                show={ open }
                httpstatus={ getHttpstatus }
            />
        </div >
    );


}

export default TemplateArrangeinterview;
