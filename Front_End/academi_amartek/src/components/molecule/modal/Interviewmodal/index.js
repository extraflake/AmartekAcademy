import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import APIINTERVIEW from '../../../../services/arrangeinterview';
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

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
export function InterviewModal ( { show, hide, recById, methodreq, httpstatus, status, getUserRole } ) {
    const [ selectedDate, setSelectedDate ] = useState( {} );
    const [ getUserbyId, setSelectedUser ] = useState();
    const [ alldatainterview, setdatainterview ] = useState( getUserRole );
    const [ open, setOpen ] = useState( false );
    console.log( "ini di model " + show )
    const handleClose = () => show( false );
    const [ closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal ] = useState( true );

    const handleDateChange = ( name, newValue ) => {
        setSelectedDate( ( prev ) => ( { ...prev, [ name ]: newValue } ) );
        httpstatus( true );
    };



    const handleSubmit = () => {
        if ( getUserRole == "hr" )
        {
            APIINTERVIEW.putInterviewHr( recById, selectedDate, getUserbyId ).then( ( res ) => {
                setOpen( false );
                Swal.fire( {
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                } );
                setSelectedUser( "" );
                httpstatus( res.status );
            } ).catch( ( err ) => {
                console.log( err );
            } )
        } else if ( getUserRole == "trainer" )
        {
            APIINTERVIEW.putInterviewTrainer( recById, selectedDate, getUserbyId ).then( ( res ) => {
                setOpen( false );
                Swal.fire( {
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                } );
                setSelectedUser( "" );
                httpstatus( res.status );
            } ).catch( ( err ) => {
                console.log( err );
            } )
        }
    }

    // useEffect( () => {
    //     APIINTERVIEW.getallInterview().then( ( response ) => {
    //         setdatainterview( response.data );
    //         // console.log( response.data.data[ 0 ].applicant.id );
    //         APIINTERVIEW.getBiodatabyid( response.data.data[ 0 ].applicant.id ).then( ( response ) => {
    //             setfullname( response.data.data[ 0 ].fullname );
    //             // console.log( response.data.data[ 0 ].fullname );
    //         } )
    //     } );
    //     return () => {
    //         sethttpstatus( null );

    //     };

    // }, [ getHttpstatus ] );



    <Modal
        open={ closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal }
        // onClose={ handleClose }
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

                { alldatainterview && alldatainterview.data.map( ( item, index ) => {
                    if ( item.name === "Trainer" )
                    {
                        return (
                            <div>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ getUserbyId }
                                    label="user"
                                    onChange={ ( e ) => setSelectedUser( e.target.value ) }
                                />
                                <MenuItem value={ item.id }>Ten</MenuItem>
                                <MenuItem value={ item.id }>Twenty</MenuItem>
                                <MenuItem value={ item.id }>Thirty</MenuItem>

                                <Button onClick={ handleSubmit } />
                            </div>
                        )

                    } else if ( item.name === "HR" )
                    {
                        return (
                            <div>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ getUserbyId }
                                    label="Age"
                                    onChange={ ( e ) => setSelectedUser( e.target.value ) }
                                />
                                <MenuItem value={ item.id }>Ten</MenuItem>
                                <MenuItem value={ item.id }>Twenty</MenuItem>
                                <MenuItem value={ item.id }>Thirty</MenuItem>

                                <Button onClick={ handleSubmit } />
                            </div>
                        )
                    }

                } ) }

            </Typography>
        </Box>

    </Modal>

}