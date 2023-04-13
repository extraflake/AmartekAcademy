import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function ProjectModal ( { show, hide, proById, methodreqProModal, httpstatus } ) {
	const [ name, setname ] = useState( "" );
	const [ projectDesc, setprojectDesc ] = useState( "" );
	const [ projectStart, setprojectStart ] = useState( "" );
	const [ projetName, setprojetName ] = useState();
	const [ projectEnd, setprojectEnd ] = useState( "" );
	const [ closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal ] = useState( true );
	console.log( proById );

	const handleKeyDown = ( e ) => {
		if ( e.key === "Enter" )
		{
			handleSubmit( e );
		}
	};
	const handleSubmit = ( e ) => {
		e.preventDefault();
		if ( methodreqProModal === "post" )
		{
			APICV.saveProject( name, projectDesc, projectStart, projectEnd )
				.then( ( res ) => {
					hide();
					setname( "" );
					setprojectDesc( "" );
					setprojectStart( "" );
					setprojectEnd( "" );

					Swal.fire( {
						icon: "success",
						title: "Berhasil!",
						text: "Data berhasil ditambahkan!",
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500
					} )
					httpstatus( res.status );
				} )
				.catch( ( err ) => {
					console.log( err );
				} );
		} else if ( methodreqProModal === "put" )
		{
			APICV.updateProject( proById.data.id, {
				user: proById.data.userId,
				name: name ? name : ( proById.data.projectName ),
				projectDesc: projectDesc ? projectDesc : ( proById.data.projectDesc ),
				projectStart: projectStart ? projectStart : ( proById.data.projectStart ),
				projectEnd: projectEnd ? projectEnd : ( proById.data.projectEnd )
			} )
				.then( ( res ) => {
					hide();
					setname( "" );
					setprojectDesc( "" );
					setprojectStart( "" );
					setprojectEnd( "" );

					Swal.fire( {
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been updated',
						showConfirmButton: false,
						timer: 1500
					} )
					httpstatus( res.status );
				} )
				.catch( ( err ) => {
					console.log( err );
				} );
		}
	};

	return (
		<div>
			<Modal show={ closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal } onHide={ hide }>
				<Modal.Header closeButton>
					<Modal.Title>Project Experience Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{ proById && proById ? (
						<Form onKeyDown={ handleKeyDown }>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Update Project Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="update Project Name"
									name="getname"
									defaultValue={ proById.data.projectName }
									//value={proById.data.projectName}
									onChange={ ( e ) => setname( e.target.value ) }
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Update Project Date</Form.Label>
								{/* <DatePicker className="form-control" selected={new Date(proById.data.projectStart)} onChange={(date) => setprojectStart(date)} 
                             dateFormat="dd/MM/yyyy" /> to <DatePicker className="form-control" selected={new Date(proById.data.projectEnd)} onChange={(date) => setprojectEnd(date)} 
                             dateFormat="dd/MM/yyyy" /> */}
								<input className="form-control" type="date"
									defaultValue={ proById.data.projectStart }
									onChange={ ( e ) => setprojectStart( e.target.value ) }
								/> to  <input className="form-control" type="date"
									defaultValue={ proById.data.projectEnd }
									onChange={ ( e ) => setprojectEnd( e.target.value ) }
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Update Project Description</Form.Label>
								<Form.Control
									type="text"
									placeholder="Update Project Description"
									name="getname"
									defaultValue={ proById.data.projectDesc }
									as="textarea" rows={ 3 }
									onChange={ ( e ) => setprojectDesc( e.target.value ) }
								/>
							</Form.Group>
						</Form>
					) : (
						<Form onKeyDown={ handleKeyDown }>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Project Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Insert new Project Name"
									name="getname"
									value={ name }
									onChange={ ( e ) => setname( e.target.value ) }
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Project Date</Form.Label>
								<input className="form-control" type="date"
									value={ projectStart }
									onChange={ ( e ) => setprojectStart( e.target.value ) }
								/> to  <input className="form-control" type="date"
									value={ projectEnd }
									onChange={ ( e ) => setprojectEnd( e.target.value ) }
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicFullname">
								<Form.Label>Project Description</Form.Label>
								<Form.Control
									type="text"
									placeholder="Insert Project Description"
									name="getname"
									value={ projectDesc }
									as="textarea" rows={ 3 }
									onChange={ ( e ) => setprojectDesc( e.target.value ) }
								/>
							</Form.Group>
						</Form>
					) }
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={ handleSubmit } type="submit">
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)

}