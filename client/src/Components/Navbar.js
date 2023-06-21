import React, { useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../svg/logo.svg";
import avatar from "../svg/avatar.png";
import { Link } from "react-router-dom";
import {useSignOut} from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import coin from "../svg/dollar.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { useUserContext } from "./Auth/UserContext";

const Navbar = () => {
  const [signOut] = useSignOut(auth);
  const userData = useUserContext();
  const handleLogout = () => {
    signOut();
    window.location.reload();
  };
 
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo"></img>
      </Link>

      {userData && (
        <section className="middle centered">
          <div>
            <h3>Liv:{userData.level}</h3>
            <ProgressBar
              completed={userData.expPercentuale || 1}
              bgColor="#ea2b2b"
              height="22px"
              animateOnRender={true}
              labelAlignment="center"
            />
          </div>
          <img src={coin} alt="coin" />
          <h2>x{userData.coin}</h2>
        </section>
      )}

      {userData && (
        <div className="user">
          <Link to="/profile">
            <img src={userData.img ? userData.img : avatar} alt="" />
          </Link>

          <button onClick={handleLogout} className="logoutBut">
            Logout
          </button>
        </div>
      )}

      {!userData && (
        <Link to="/login">
          <button className="signBut">Accedi</button>
        </Link>
      )}
    </div>
  );
};
export default Navbar;
