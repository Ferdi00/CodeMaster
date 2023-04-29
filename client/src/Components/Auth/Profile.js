import React from 'react'
import Navbar from "../Navbar";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Profile.css";
import avatar from "../../svg/avatar.png";
import coin from "../../svg/dollar.png"
import ProgressBar from "@ramonak/react-progress-bar";


const Profile = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const exp = 70;
	const lev = 2;

  return (
    <div><Navbar></Navbar>
    
    {!user &&
			navigate("/login")
			}
			{user &&
			<div className='profile'>
        
        <section className='profile-photo'><img src={avatar}/></section>
        <div><h2 className='centered font'>Liv:{lev}</h2><ProgressBar completed={exp} bgColor='#ea2b2b'width='200px' height='24px' animateOnRender="true" labelAlignment="center" /></div> 

        <div className='profile-container'>
          <section className='profile-info'>
            <div><h1>Username </h1><h2>Ferdi00</h2></div>
            <div><h1>Email </h1><h2>Fernando@gmail.com</h2></div>
            <div><h1>Password </h1><h2>*********</h2></div>

            </section>
          <section className='profile-info'>
          <div><h1>Esperienza</h1><h2>0</h2></div>
          <div><h1>Livello Account</h1><h2>0</h2></div>
            <div><img src={coin}/><h2>= 0</h2></div>
          </section>
          </div>

      </div>
			}
    
    
    </div>
    
  )
}

export default Profile