import React from 'react'
import '../Styles/Navbar.css';
import logo from "../svg/logo.svg";
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">

			<Link to="prova" className="logo" value><img src={logo} alt="logo"></img>
			</Link>

		</div>
	)
}
export default Navbar