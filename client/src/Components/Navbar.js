import React from 'react'
import '../styles/Navbar.css';
import logo from "../svg/logo.svg";
import avatar from "../svg/avatar.png";
import {Link} from 'react-router-dom'
import {useAuthState ,useSignOut} from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase";

const Navbar = () => {
	const [user] = useAuthState(auth);
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
	};
	

	return (
		<div className="navbar">

			<Link to="/" className="logo"><img src={logo} alt="logo"></img></Link>

			{!user &&
			<Link to="/login"><button className="signBut">Accedi</button></Link>
			}
			{user &&
			<div className="user"><img src={avatar} alt="avatar"/><button onClick={handleLogout} className="logoutBut">Logout</button></div>
			}
			
			
			 
	
		
			
			
			
		</div>
	)
}
export default Navbar