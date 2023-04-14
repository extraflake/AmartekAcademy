import 'bootstrap';
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS untuk styling
import Swal from "sweetalert2";
import APICV from '../../../../services/curriculumvitae';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function BiodataModal({show, hide, bioById, methodreqBioModal, httpstatus}){
    const [fullname, setFullname] = useState("");
    const [birthdate, setBirthdate] = useState("");
	// const [birthdateedit, setBirthdateedit] = useState(bioById && new Date(bioById.data[0].birth_date));
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [summary, setSummary] = useState("");
	const userId = sessionStorage.getItem('userId');
	
    //const [startDate, setStartDate] = useState(new Date());
    const [closeModalAfterInsertBioModal, setCloseModalAfterInsertBioModal] = useState(true);
	console.log(bioById);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    const handleSubmit = (e) => {
		e.preventDefault();
		APICV.updateBiodata(bioById.data[0].id, {
			fullname: fullname ? fullname: (bioById.data[0].fullname),
			 dateBirth: birthdate ? birthdate: (bioById.data[0].birth_date), 
			 noTelp: phone ? phone: (bioById.data[0].no_telp), 
			 address: address ? address: (bioById.data[0].address), 
			 summary: summary ? summary: (bioById.data[0].summary),
			})
				.then((res) => {
					hide();
					Swal.fire({
						position: 'top-end',
  						icon: 'success',
  						title: 'Your Data has been updated',
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
            <Modal show={closeModalAfterInsertBioModal ? show : closeModalAfterInsertBioModal} onHide={hide}>
			<Modal.Header closeButton>
				<Modal.Title>Biodata</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			 {bioById && bioById ? (
					<Form onKeyDown={handleKeyDown}>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update FullName</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update Full Name"
								name="getname"
								defaultValue={bioById.data[0].fullname}
								// value={empById.data.fullname || ""}
								onChange={(e) => setFullname(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update Phone Number</Form.Label>
							<Form.Control
								type="number"
								placeholder="Update Phone Number"
								name="getname"
								defaultValue={bioById.data[0].no_telp}
								// value={empById.data.fullname || ""}
								onChange={(e) => setPhone(0+e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update Birth Date</Form.Label>
                            {/* <DatePicker className="form-control" 
							// value={new Date(bioById.data[0].birth_date)} 
							selected={birthdate}
							onChange={(date) => setBirthdate(date)} 
                             dateFormat="dd/MM/yyyy" /> */}
							 <input className="form-control" type="date"
							 defaultValue={bioById.data[0].birth_date}
							 onChange={(e) => setBirthdate(e.target.value)}
							 />
							 {/* <Calendar 
							 defaultValue={new Date (bioById.data[0].birth_date)} 
							 onChange={(date) => setBirthdate(date)}/> */}
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update Address"
								name="getname"
								defaultValue={bioById.data[0].address}
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Update Summary</Form.Label>
							<Form.Control
								type="text"
								placeholder="Update the Region Name"
								name="getname"
								defaultValue={bioById.data[0].summary}
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								onChange={(e) => setSummary(e.target.value)}
							/>
						</Form.Group>
					</Form>
			 ) :(
				<Form onKeyDown={handleKeyDown}>
						<Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert Name"
								name="getname"
								value=""
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="number"
								placeholder="Insert"
								name="getname"
								value=""
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Birth Date</Form.Label>
                            {/* <DatePicker className="form-control" selected={birthdate} onChange={(date) => setStartDate(date)} 
                             dateFormat="dd/MM/yyyy" /> */}
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="insert"
								name="getname"
								value=""
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
							<Form.Label>Summary</Form.Label>
							<Form.Control
								type="text"
								placeholder="Insert"
								name="getname"
								value=""
                                as="textarea" rows={3}
								// value={empById.data.fullname || ""}
								// onChange={(e) => setName(e.target.value)}
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

