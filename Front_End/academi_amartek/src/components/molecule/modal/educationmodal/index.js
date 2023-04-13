import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useEffect , useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function EducationModal({show, hide, eduById, methodreqEduModal, httpstatus}){
    const [univId, setUnivId] = useState(null);
    const [majorId, setMajorId] = useState(null);
    const [degreeId, setDegreeId] = useState(null);
    const [gpa, setgpa] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
	const [univData, setUnivData] = useState();
	const [degreeData, setDegreeData] = useState();
	const [majorData, setMajorData] = useState();
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
		if (methodreqEduModal === "post") {
		APICV.saveEducation(univId, degreeId, majorId, gpa)
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
			} else if (methodreqEduModal === "put"){
				APICV.updateEducation(eduById.data.id, {
					user: eduById.data.user_id,
					univId: univId ? univId: (eduById.data.univId), 
					majorId: majorId ? majorId: (eduById.data.majorId), 
					degreeId: degreeId ? degreeId: (eduById.data.degreeId), 
					gpa: gpa? gpa: (eduById.data.gpa)})
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
			}
	};
	console.log(eduById)
    return(
        <div>
            <Modal show={closeModalAfterInsertEduModal ? show : closeModalAfterInsertEduModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Education Data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{eduById && eduById ? (
				<Form onKeyDown={handleKeyDown}> 
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label> Update Universitas Name</Form.Label>
							
							<Form.Select defaultValue={eduById.data.univId} onChange={(e) => setUnivId(e.target.value)}>
							<option>Open this select menu</option>
							{univData && univData.data.map((data) =>{
								return(
                            <option key={data.id} value={data.id} selected={data.id === eduById.data.univId}>{data.univ_name}</option>
                            
								);
							})}
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label> Update Major Name</Form.Label>
							<Form.Select defaultValue={eduById.data.major_Id} onChange={(e) => setMajorId(e.target.value)}>
							<option>Open this select menu</option>
							{majorData && majorData.data.map((data) =>{
								return(
                            <option key={data.id} value={data.id} selected={data.id === eduById.data.majorId}>{data.major_name}</option>
                            
								);
							})}
							</Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update Degree Name</Form.Label>
							
							<Form.Select defaultValue={eduById.data.degreeId} onChange={(e) => setDegreeId(e.target.value)}>
							<option>Open this select menu</option>
							{degreeData && degreeData.data.map((data) =>{
								return(
                            <option key={data.id} value={data.id} selected={data.id === eduById.data.degreeId}>{data.degree_name}</option>
                            
							);
						})}
							</Form.Select>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>GPA</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert your GPA"
								name="gpa"
								defaultValue={eduById.data.gpa}
								onChange={(e) => setgpa(e.target.value)}
							/>
						</Form.Group>

					</Form>
				) : (
					<Form onKeyDown={handleKeyDown}> 
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Universitas or Campus Name</Form.Label>
							<Form.Select defaultValue={univId} onChange={(e) => setUnivId(e.target.value)}>
    						<option>Open this select menu</option>
    						{univData && univData.data.map((data) => (
        					<option key={data.id} value={data.id} selected={data.id === univId}>{data.univ_name}</option>
    							))}
							</Form.Select>


						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Major Name</Form.Label>
							<Form.Select defaultValue={majorId} onChange={(e) => setMajorId(e.target.value)}>
    						<option>Open this select menu</option>
    						{majorData && majorData.data.map((data) => (
        					<option key={data.id} value={data.id} selected={data.id === majorId}>{data.major_name}</option>
    							))}
							</Form.Select>
							
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Degree Name</Form.Label>
							<Form.Select defaultValue={degreeId} onChange={(e) => setDegreeId(e.target.value)}>
    						<option>Open this select menu</option>
    						{degreeData && degreeData.data.map((data) => (
        					<option key={data.id} value={data.id} selected={data.id === degreeId}>{data.degree_name}</option>
    							))}
							</Form.Select>
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
				 )}
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