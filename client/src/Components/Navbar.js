import React from 'react'
import '../Styles/Navbar.css';
import logo from "../svg/logo.svg";
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">

			<Link to="/" className="logo"><img src={logo} alt="logo"></img></Link>

			<Link to="/login"><button className="signBut">Accedi</button></Link>
			
			
		</div>
	)
}
export default Navbar