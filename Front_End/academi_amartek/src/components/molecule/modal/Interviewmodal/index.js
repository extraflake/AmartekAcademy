// import 'bootstrap';
// import { Modal, Form, Button } from "react-bootstrap";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import APIINTERVIEW from '../../../../services/arrangeinterview';

// export function InterviewModal ( { show, hide, recById, methodreq, httpstatus, status, getUserRole } ) {
//     const [selectedDate, setselectedDate] = useState(new Date());
//     const [closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal] = useState(true);
//     const [getUserid, setUserid] = useState(null);
//     const [getselect, setselect] = useState("Silahkan Pilih");
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//           handleSubmit(e);
//         }
//       };
// 	  const handleSubmit = () => {
// 		         if ( getUserRole == "hr" )
// 		         {
// 		             APIINTERVIEW.putInterviewHr( recById, selectedDate, getUserbyId ).then( ( res ) => {
// 		                 setOpen( false );
// 		                 Swal.fire( {
// 		                     icon: "success",
// 		                     title: "Berhasil!",
// 		                     text: "Data berhasil ditambahkan!",
// 		                 } );
// 		                 setSelectedUser( "" );
// 		                 httpstatus( res.status );
// 		             } ).catch( ( err ) => {
// 		                 console.log( err );
// 		             } )
// 		         } else if ( getUserRole == "trainer" )
// 		         {
// 		             APIINTERVIEW.putInterviewTrainer( recById, selectedDate, getUserbyId ).then( ( res ) => {
// 		                 setOpen( false );
// 		                 Swal.fire( {
// 		                     icon: "success",
// 		                     title: "Berhasil!",
// 		                     text: "Data berhasil ditambahkan!",
// 		                 } );
// 		                 setSelectedUser( "" );
// 		                 httpstatus( res.status );
// 		             } ).catch( ( err ) => {
// 		                 console.log( err );
// 		             } )
// 		         }
// 		     }
//       return(
//         <div>
//             <Modal show={closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal} onHide={hide}>
// 			<Modal.Header closeButton>
// 				<Modal.Title>Set Interview</Modal.Title>
// 			</Modal.Header>

// 			<Modal.Body>
// 				{recById && recById ? (
					
// 				<Form onKeyDown={handleKeyDown}> 
// 						{/* <Form.Group className="mb-3" controlId="formBasicFullname">
// 							<Form.Label>Edit Project Name</Form.Label>
// 							<Form.Control
// 								type="text"
// 								placeholder="update new Project Name"
// 								name="getname"
// 								defaultValue={proById.data.projectName}
// 								//value={proById.data.projectName}
// 								onChange={(e) => setname(e.target.value)}
// 							/>
                        
// 						</Form.Group> */}

//                     <Form.Group controlId="formBasicSelect">
//                             <Form.Label>Silahkan Pilih</Form.Label>
//                             <Form.Control
//                             as="select"
//                             value={getselect}
//                             onChange={e => {
//                                 console.log("e.target.value", e.target.value);
//                                 setType(e.target.value);
//                             }}
//                             >
// 								if()
//                             <option value="DICTUM">Dictamen</option>
//                             <option value="CONSTANCY">Constancia</option>
//                             <option value="COMPLEMENT">Complemento</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicFullname">
// 							<Form.Label>Project Date</Form.Label>
// 							<DatePicker className="form-control" selected={new Date(recById.data.projectStart)} onChange={(date) => setselectedDate(date)} 
//                              dateFormat="dd/MM/yyyy" />
// 						</Form.Group>
                       
// 					</Form>
// 				 ) : (
// 					<Form onKeyDown={handleKeyDown}> 
// 						<Form.Group className="mb-3" controlId="formBasicFullname">
// 							<Form.Label>Project Name</Form.Label>
// 							<Form.Control
// 								type="text"
// 								placeholder="Insert new Project Name"
// 								name="getname"
// 								value={name}
// 								onChange={(e) => setname(e.target.value)}
// 							/>
// 						</Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicFullname">
// 							<Form.Label>Project Date</Form.Label>
// 							<DatePicker className="form-control" selected={projectStart} onChange={(date) => setprojectStart(date)} 
//                              dateFormat="dd/MM/yyyy" /> to <DatePicker className="form-control" selected={projectEnd} onChange={(date) => setprojectEnd(date)} 
//                              dateFormat="dd/MM/yyyy" />
// 						</Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicFullname">
// 							<Form.Label>Project Description</Form.Label>
// 							<Form.Control
// 								type="text"
// 								placeholder="Insert Project Description"
// 								name="getname"
// 								value={projectDesc}
//                                 as="textarea" rows={3}
// 								onChange={(e) => setprojectDesc(e.target.value)}
// 							/>
// 						</Form.Group>
// 					</Form>
// 				)}
// 			</Modal.Body>
// 			<Modal.Footer>
// 				<Button variant="success" onClick={handleSubmit} type="submit">
// 					Submit
// 				</Button>
// 			</Modal.Footer>
// 		</Modal>
//         </div>
//     )
// }