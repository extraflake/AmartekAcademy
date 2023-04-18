import "./index.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import jwtDecode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import APICV from "../../../../services/curriculumvitae"

function Header () {
	const [ anchorEl, setAnchorEl ] = useState( null );
	const [ dataUser, setDataUSer ] = useState( null );
	const [ Fullname, setFullname ] = useState( null );
	let navigate = useNavigate();
	const open = Boolean( anchorEl );

	const handleClose = () => {
		setAnchorEl( null );
	};

	const handleLogOut = () => {
		sessionStorage.removeItem( "token" )
		sessionStorage.removeItem( "isLoggedIn" )
		this.props.navigation.navigate( '/' )
	}

	useEffect( () => {
		const token = sessionStorage.getItem( "token" )
		if ( token )
		{
			const decodedValue = jwtDecode( token )
			// console.log(decodedValue)
			setDataUSer( decodedValue )
			console.log( "ini data user : " + dataUser?.id )
			APICV.getBiodata( dataUser?.id ).then( ( res ) => {
				setFullname( res.data.data[ 0 ].fullname );
				console.log( res.data );
			} )
		}

		if ( !sessionStorage )
		{
			navigate( `/` );
		}
	}, [] )


	return (
		<div className="dash-head">
			<div className="dash-logo">AMARTEK GDP Bootcamp-21</div>
			<div className="dash-dropdown">
				<Button
					id="basic-button"
					aria-controls={ open ? "basic-menu" : undefined }
					aria-haspopup="true"
					aria-expanded={ open ? "true" : undefined }
					onClick={ ( e ) => setAnchorEl( e.currentTarget ) }
				>
					Welcome, { Fullname }
					<IoIosArrowDown />
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={ anchorEl }
					open={ open }
					onClose={ handleClose }
					MenuListProps={ {
						"aria-labelledby": "basic-button",
					} }
				>
					<MenuItem onClick={ () => {
						handleLogOut()
					} }>

						Logout
					</MenuItem>

				</Menu>
			</div>
		</div>
	);
}

export default Header;
