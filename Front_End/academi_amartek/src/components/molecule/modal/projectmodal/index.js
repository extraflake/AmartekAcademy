import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function ProjectModal({show, hide, proById, methodreqProModal, httpstatus}){
    const [name, setname] = useState("");
    const [projectdesc, setprojectdesc] = useState("");
    const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
    const [closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal] = useState(true);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    const handleSubmit = (e) => {
		e.preventDefault();
		APICV.saveProject(name, startDate, endDate, projectdesc)
				.then((res) => {
					hide();
					setprojectname("");
					setprojectdesc("");
					setStartDate(new Date());
					setEndDate(new Date());

					Swal.fire({
						icon: "success",
						title: "Berhasil!",
						text: "Data berhasil ditambahkan!",
					})
					httpstatus(res.status);
				})
				.catch((err) => {
					console.log(err);
				});
	};
    return(
        <div>
            <Modal show={closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Project Experience Data</Modal.Title>
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
							<Form.Label>Project Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert new Project Name"
								name="getname"
								value={name}
								onChange={(e) => setprojectname(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Project Date</Form.Label>
							<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
                             dateFormat="dd/MM/yyyy" /> to <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} 
                             dateFormat="dd/MM/yyyy" />
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Project Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert Project Description"
								name="getname"
								value={projectdesc}
                                as="textarea" rows={3}
								onChange={(e) => setprojectdesc(e.target.value)}
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