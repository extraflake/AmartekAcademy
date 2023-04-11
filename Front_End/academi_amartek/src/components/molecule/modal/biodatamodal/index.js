import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS untuk styling
//import Swal from "sweetalert2";

export function BiodataModal({show, hide, bioById, methodreqBioModal, httpstatus}){
    const [fullname, setFullname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [summary, setSummary] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [closeModalAfterInsertBioModal, setCloseModalAfterInsertBioModal] = useState(true);
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
            <Modal show={closeModalAfterInsertBioModal ? show : closeModalAfterInsertBioModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Biodata</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* {regById && regById ? ( */}
					<Form onKeyDown={handleKeyDown}>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue="{regById.data.name}"
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="number"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue="{regById.data.name}"
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Birth Date</Form.Label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
                             dateFormat="dd/MM/yyyy" />
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue="{regById.data.name}"
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Summary</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue="{regById.data.name}"
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
					</Form>
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

