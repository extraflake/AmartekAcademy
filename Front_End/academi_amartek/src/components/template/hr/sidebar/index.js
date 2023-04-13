import "./index.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Sidebar () {
	return (
		<div className="dash-sidebar">
			<NavLink exact="true" to="/interview/hr" className="dash-dashboard">
				Interview
			</NavLink>
		</div>
	);
}

export default Sidebar;
