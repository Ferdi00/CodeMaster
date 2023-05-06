import { React, useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Profile.css";
import avatar from "../../svg/avatar.png";
import coin from "../../svg/dollar.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { updateUserDocument} from "../../Dao/UserDao";


const openFile = () => {
  document.getElementById("imgUpload").click();
};

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    username: "Ferdi00",
    email: "fernando@gmail.com",
    description: "Inserisci una descrizione",
    img: "",
  });


  const handleChangeInput = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateUser = () => {
    updateUserDocument(user.uid,userData)
  }


  const exp = 70;
  const lev = 2;
  return (
    <div>
      <Navbar></Navbar>

      {!user && navigate("/login")}
      {user && (
        <div className="profile">
          <div className="profile-container">
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <section className="profile-info-left">
                <section className="profile-photo">
                  <input
                    type="file"
                    id="imgUpload"
                    name="img"
                    onChange={(e) =>
                      setuserData((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.files[0],
                      }))
                    }
                    style={{ display: "none" }}
                  ></input>
                  <img
                    src={
                      userData.img
                        ? URL.createObjectURL(userData.img)
                        : avatar
                    }
                    alt=""
                    onClick={openFile}
                  />
                </section>
                <div>
                  <h2 className="centered font">Liv:{lev}</h2>
                  <ProgressBar
                    completed={exp}
                    bgColor="#ea2b2b"
                    width="200px"
                    height="24px"
                    animateOnRender= {true}
                    labelAlignment="center"
                  />
                </div>
                <div className="coin">
                  <img src={coin} />
                  <h2>= 0</h2>
                </div>
                <div className="description ">
                <textarea
                  onChange={handleChangeInput}
                  type="text"
                  name="description"
                  defaultValue="Inserisci una descrizione"
                ></textarea>
                </div>
              </section>
            </section>

            <section className="profile-info">
              <div>
                <h1>Username </h1>
                <input
                  type="text"
                  name="username"
                  defaultValue={userData.username}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <h1>Email:</h1>
                <h2 className="centered">{userData.email}</h2>
              </div>
              <div>
                <h1>Account creato il:</h1>
                <h2 className="centered">22/04/03</h2>
              </div>
              <div>
                <h1>Esperienza</h1>
                <h2 className="centered">{exp}</h2>
              </div>
              <div>
                <h1>Livello Account</h1>
                <h2 className="centered">{lev}</h2>
              </div>
              <button className="update" onClick={updateUser}>
                <h3 className="font">Aggiorna dati </h3>
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
