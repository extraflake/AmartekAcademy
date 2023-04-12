import "./index.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Sidebar () {
	return (
		<div className="dash-sidebar">
			<NavLink exact="true" to="/ta/arrangeInterview" className="dash-dashboard">
				Dashboard
			</NavLink>
			<div className="accord-sidebar">
				<Accordion className="accord-container">
					<AccordionSummary
						expandIcon={ <MdExpandMore size={ 23 } color="white" /> }
						aria-controls="panelia-content"
						id="panel1a-header"
					>
						<div>
							<p>Data</p>
						</div>
					</AccordionSummary>
					<NavLink exact="true" to="/user">
						<AccordionDetails>
							<AiOutlineUser />
							User
						</AccordionDetails>
					</NavLink>
				</Accordion>
			</div>
		</div>
	);
}

export default Sidebar;
