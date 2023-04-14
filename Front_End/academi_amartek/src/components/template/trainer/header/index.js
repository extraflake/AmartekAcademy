import "./index.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="dash-head">
			<div className="dash-logo">AMARTEK GDP Bootcamp-21</div>
			<div className="dash-dropdown">
				<Button
					id="basic-button"
					aria-controls={open ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={(e) => setAnchorEl(e.currentTarget)}
				>
					Welcome, USER
					<IoIosArrowDown />
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					<MenuItem
						onClick={() => {
							console.log("logout");
						}}
					>
						Logout
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
}

export default Header;
