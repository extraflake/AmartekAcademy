import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
//import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function EducationModal({show, hide, eduById, methodreqEduModal, httpstatus}){
    const [univname, setunivname] = useState("");
    const [majorname, setmajorname] = useState("");
    const [degreename, setdegreename] = useState("");
    const [gpa, setgpa] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal] = useState(true);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    const handleSubmit = (e) => {
		e.preventDefault();
	};
    return(
        <div>
            <Modal show={closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Education Data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* {regById && regById ? ( */}
					{/* <Form onKeyDown={handleKeyDown}>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Region Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue="{regById.data.name}"
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
                                required/>
						</Form.Group>
					</Form> */}
				{/* ) : ( */}
					<Form onKeyDown={handleKeyDown}> 
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Universitas or Campus Name</Form.Label>
							<Form.Select>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Major Name</Form.Label>
							<Form.Select>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Degree Name</Form.Label>
							<Form.Select>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>GPA</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert new Region Name"
								name="getname"
								value="{name}"
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

					</Form>
				{/* )} */}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={handleSubmit} type="submit">
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
        </div>
    )

}