import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useEffect , useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function EducationModal({show, hide, eduById, methodreqEduModal, httpstatus}){
    const [univId, setUnivId] = useState();
    const [majorId, setMajorId] = useState();
    const [degreeId, setDegreeId] = useState();
    const [gpa, setgpa] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
	const [univData, setUnivData] = useState("");
	const [degreeData, setDegreeData] = useState("");
	const [majorData, setMajorData] = useState("");
    const [closeModalAfterInsertEduModal, setCloseModalAfterInsertEduModal] = useState(true);

	useEffect(() => {
        APICV.getUniv().then((response) => {
            setUnivData(response.data);
        });
		APICV.getMajor().then((response) => {
			setMajorData(response.data);
		});
		APICV.getDegree().then((response) => {
			setDegreeData(response.data);
		});
      }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    const handleSubmit = (e) => {
		e.preventDefault();
		APICV.saveEducation(univId, majorId, degreeId, gpa)
				.then((res) => {
					hide();

					Swal.fire({
						text: "Data berhasil ditambahkan!",
						position: 'top-end',
  						icon: 'success',
  						title: 'Your Data has been saved',
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
							{univData && univData.data.map((data) =>{
								return(
							<Form.Select defaultValue={univId} onChange={(e) => setUnivId(e.target.value)}>
                            <option>Open this select menu</option>
                            <option key={data.id} value={data.id}>{data.univ_name}</option>
                            </Form.Select>
								);
							})}
							
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Major Name</Form.Label>
							
							<Form.Select defaultValue={majorId} onChange={(e) => setMajorId(e.target.value)}>
                            <option>Open this select menu</option>
							{majorData && majorData.data.map((data) =>{
								return(
                            <option key={data.id} value={data.id}>{data.major_name}</option>
                            
							);
						})}
							</Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Degree Name</Form.Label>
							{degreeData && degreeData.data.map((data) =>{
								return(
							<Form.Select defaultValue={degreeId} onChange={(e) => setDegreeId(e.target.value)}>
                            <option>Open this select menu</option>
                            <option key={data.id} value={data.id}>{data.degree_name}</option>
                            </Form.Select>
							);
						})}
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>GPA</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert your GPA"
								name="gpa"
								value={gpa}
								onChange={(e) => setgpa(e.target.value)}
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