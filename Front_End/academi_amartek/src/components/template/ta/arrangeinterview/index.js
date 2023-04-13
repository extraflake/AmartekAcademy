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
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );

    useEffect( () => {
        APIINTERVIEW.getallInterview().then( ( response ) => {
            setdatainterview( response.data );
        } );
    }, [ getHttpstatus ] );


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
                        bgcolor: "background.paper"
                    } }>
                        <div className="accord-sidebar">

                            { alldatainterview && alldatainterview.data.map( ( item, index ) => {
                                APIINTERVIEW.getBiodatabyid( item.applicant.id ).then( ( response ) => {
                                    setfullname( response.data );
                                    // console.log( response.data );
                                } )

                                return (
                                    <Accordion className="accord-container" >
                                        <AccordionSummary
                                            expandIcon={ <MdExpandMore size={ 23 } color="white" /> }
                                            aria-controls="panelia-content"
                                            id="panel1a-header"
                                        >
                                            <div>
                                                <p>{ getFullname && getFullname.data.map( ( item ) => { console.log( item.fullname ); } ) }
                                                    <Button color="success" dir="rtl" variant="contained" fontSize="small" size="small" sx={ {
                                                        flexDirection: 'row-reverse',
                                                        p: 1,
                                                        m: 1,
                                                    } } >View CV</Button>
                                                </p>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails sx={ {
                                            bgcolor: "#D3D3D3",
                                            color: "black"
                                        } }>
                                            <AiOutlineUser />
                                            Status HR : <span>{ item.statusHr }</span> <Button size="small" dir="rtl" variant="outlined" onClick={ handleOpen } sx={ {
                                                flexDirection: 'row-reverse',
                                                p: 1,
                                                m: 1,
                                            } } >Set Time Interview</Button>
                                            <p>
                                                <AiOutlineUser />
                                                Status Trainer <span style={ { margin: "0,0,100px,150px" } }>: { item.statusTrainer }</span>  <Button size="small" dir="rtl" variant="outlined" sx={ {
                                                    flexDirection: 'row-reverse',
                                                    p: 1,
                                                    m: 1,
                                                } } >Set Time Interview</Button>

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
                <Modal
                    open={ open }
                    onClose={ handleClose }
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={ style }>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={ { mt: 2 } }>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>

                </Modal>

            </div>
        </div >
    );
}

export default TemplateArrangeinterview;
