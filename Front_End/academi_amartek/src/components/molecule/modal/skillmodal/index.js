import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useEffect , useState } from "react";
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import APICV from '../../../../services/curriculumvitae';

export function SkillModal({show, hide, httpstatus}){
    const [skillId, setSkillId] = useState();
    const [closeModalAfterInsertSkillModal, setCloseModalAfterInsertSkillModal] = useState(true);
    const [skillData, setSkillData] = useState("");
    
    useEffect(() => {
        APICV.getSkill().then((response) => {
            setSkillData(response.data);
        });
      }, []);

      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };

    const handleSubmit = (e) => {
		e.preventDefault();
		APICV.saveUserSkill(skillId)
				.then((res) => {
					hide();

					Swal.fire({
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
            <Modal show={closeModalAfterInsertSkillModal ? show : closeModalAfterInsertSkillModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Skill Data</Modal.Title>
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
							<Form.Label>Skills</Form.Label>
							<Form.Select defaultValue={skillId} onChange={(e) => setSkillId(e.target.value)}>
                            <option>Open this select menu</option>
                            {skillData && skillData.data.map((data) =>{
								return(
                            <option key={data.id} value={data.id}>{data.skill_name}</option>
								);
							})}
                            </Form.Select>
							
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

