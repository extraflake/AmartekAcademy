import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import APIINTERVIEW from '../../../../services/arrangeinterview';
import Swal from "sweetalert2";
export function InterviewModal ( { show, hide, eduById, methodreqEduModal, httpstatus, status } ) {
    const [ selectedDate, setSelectedDate ] = useState( {} );
    const [ getUser, setSelectedUser ] = useState();
    const [ alldatainterview, setdatainterview ] = useState( null );

    const handleClose = () => setOpen( false );

    const handleDateChange = ( name, newValue ) => {
        setSelectedDate( ( prev ) => ( { ...prev, [ name ]: newValue } ) );
        sethttpstatus( true );
    };

    const handleSubmit = () => {
        if ( getUser == "hr" )
        {
            APIINTERVIEW.putInterviewHr( id, time ).then( ( res ) => {
                setOpen( false );
                Swal.fire( {
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                } );
                setSelectedUsers( "" );
                httpstatus( res.status );
            } ).catch( ( err ) => {
                console.log( err );
            } )
        } else if ( getUser == "trainer" )
        {
            APIINTERVIEW.putInterviewTrainer( id, time ).then( ( res ) => {
                setOpen( false );
                Swal.fire( {
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data berhasil ditambahkan!",
                } );
                setSelectedUsers( "" );
                httpstatus( res.status );
            } ).catch( ( err ) => {
                console.log( err );
            } )
        }
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



    <Modal
        open={ show }
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
                { alldatainterview && alldatainterview.data.map( ( item, index ) => {
                    if ( item.name === "Trainer" )
                    {
                        return (
                            <div>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ age }
                                    label="Age"
                                    onChange={ handleChange }
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
                                    value={ age }
                                    label="Age"
                                    onChange={ handleChange }
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