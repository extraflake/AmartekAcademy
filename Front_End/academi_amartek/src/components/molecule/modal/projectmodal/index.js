import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function ProjectModal({show, hide, proById, methodreqProModal, httpstatus}){
    const [name, setname] = useState("");
    const [projectDesc, setprojectDesc] = useState("");
    const [projectStart, setprojectStart] = useState(new Date());
	const [projectEnd, setprojectEnd] = useState(new Date());
    const [closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal] = useState(true);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    const handleSubmit = (e) => {
		e.preventDefault();
		APICV.saveProject(name, projectDesc, projectStart, projectEnd)
				.then((res) => {
					hide();
					setname("");
					setprojectDesc("");

					Swal.fire({
						icon: "success",
						title: "Berhasil!",
						text: "Data berhasil ditambahkan!",
						position: 'top-end',
  						icon: 'success',
  						title: 'Your work has been saved',
  						showConfirmButton: false,
  						timer: 1500
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
								onChange={(e) => setname(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Project Date</Form.Label>
							<DatePicker selected={projectStart} onChange={(date) => setprojectStart(date)} 
                             dateFormat="dd/MM/yyyy" /> to <DatePicker selected={projectEnd} onChange={(date) => setprojectEnd(date)} 
                             dateFormat="dd/MM/yyyy" />
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Project Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert Project Description"
								name="getname"
								value={projectDesc}
                                as="textarea" rows={3}
								onChange={(e) => setprojectDesc(e.target.value)}
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