import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../svg/logo.png";
import avatar from "../svg/avatar.png";
import lb from "../svg/lb.png";
import { Link } from "react-router-dom";
import {useSignOut} from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import coin from "../svg/dollar.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { useUserContext } from "./Auth/UserContext";
import { getUserLeaderBoard } from "../FirebaseDataManager/UserManager";


const Navbar = () => {
  const [showPosition, setShowPosition] = useState(false);
   const [leaderboardData, setLeaderboardData] = useState([]);
  const [signOut] = useSignOut(auth);
  const userData = useUserContext();
  const handleLogout = () => {
    signOut();
    window.location.reload();
  };

  const handleClick = () => {
    setShowPosition(!showPosition);
    console.log("🚀 ~ file: Navbar.js:26 ~ handleClick ~ showPosition:", showPosition)
    
  };

 useEffect(() => {
   const fetchLeaderboardData = async () => {
     const leaderboard = await getUserLeaderBoard();
       console.log(leaderboard);
     setLeaderboardData(leaderboard);
   };

   fetchLeaderboardData();
   console.log(leaderboardData);
 }, []);
  
 
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="logo"></img>
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
          <img className="navbar_coin" src={coin} alt="coin" />
          <h2>x{userData.coin}</h2>
          <div className="leaderboard-wrapper">
            <img
              className="lb"
              src={lb}
              alt="leaderboard"
              onClick={handleClick}
            />
            {showPosition && (
              <div className="position-box">
                <h3 className="centered">Classifica</h3>
                <table id="leaderboard-table">
                  <thead>
                    <tr>
                      <th>Utente</th>
                      <th>Livello</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <ol id="leaderboard-list">
                  {leaderboardData.map((item, index) => (
                    <li className="leader" key={index}>
                      <img
                        className="avatar"
                        src={item.img ? item.img : avatar}
                        alt={item.username}
                      />
                      <span className="username">{item.username}</span>
                      <span className="level">{item.level}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
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


