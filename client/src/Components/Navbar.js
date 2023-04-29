import React from 'react'
import '../styles/Navbar.css';
import logo from "../svg/logo.svg";
import avatar from "../svg/avatar.png";
import {Link} from 'react-router-dom'
import {useAuthState ,useSignOut} from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase";
import coin from "../svg/dollar.png"
import ProgressBar from "@ramonak/react-progress-bar";

const Navbar = () => {
	const [user] = useAuthState(auth);
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
		
	};
	
	const exp = 100;
	const lev = 2;

	return (
		<div className="navbar">

			<Link to="/introduzione" className="logo"><img src={logo} alt="logo"></img></Link>

			{user &&	
			<section className="middle centered">
				<div centered>
  			<h3>Liv:{lev}</h3><ProgressBar completed={exp} bgColor='#ea2b2b' height='22px' animateOnRender="true" labelAlignment="center" />
				</div>
				<img src={coin} alt="coin"/><h2>x0</h2> 
				</section> 
			}
		

			{user &&
			
			
			<div className="user">
				<Link to="/profile"><img src={avatar} alt="avatar"/> </Link>
				
				<button onClick={handleLogout} className="logoutBut">Logout</button>
			</div>
			}

		{!user &&
			<Link to="/login"><button className="signBut">Accedi</button></Link>
			}
			
			
			 
	
		
			
			
			
		</div>
	)
}
export default Navbar