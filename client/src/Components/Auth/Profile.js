import { React, useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../../styles/Profile.css";
import avatar from "../../svg/avatar.png";
import coin from "../../svg/dollar.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { updateUserDocument } from "../../FirebaseDataManager/UserManager";
import { useUserContext } from "./UserContext";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../ToastCustom";

const openFile = () => {
  document.getElementById("imgUpload").click();
};

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const userContextData = useUserContext();
  const [userData, setUserData] = useState();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (userContextData) {
      setUserData(userContextData);
    }
  }, [userContextData]);

  const handleChangeInput = (e) => {
    if (e.target.name === "img") {
      const file = e.target.files[0];

      if (file) {
        const isFileImage = file.type.startsWith("image/");

        if (isFileImage) {
          setUserData((prev) => ({ ...prev, [e.target.name]: file }));
          setImageUrl(URL.createObjectURL(file));
        } else {
          // Gestionare il caso in cui il file caricato non sia un'immagine
        }
      }
    } else {
      setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    console.log(userData);
  };

  const updateUser = async () => {
    try {
      await updateUserDocument(user.uid, userData);
      showSuccessToast("Profilo modificato con successo");
      window.location.reload();
    } catch (error) {
      showErrorToast("Errore modifica profilo");
    }
  };

  if (!userData) {
    return user ? <div>Caricamento...</div> : navigate("/login");
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      {userData && (
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
                    onChange={handleChangeInput}
                    style={{ display: "none" }}
                  ></input>
                  <img
                    src={imageUrl || userData.img || avatar}
                    alt="profile_image"
                    onClick={openFile}
                  />
                </section>
                <div>
                  <h2 className="centered font">Liv:{userData.level}</h2>
                  <ProgressBar
                    completed={userData.expPercentuale || 1}
                    bgColor="#ea2b2b"
                    width="200px"
                    height="24px"
                    animateOnRender={true}
                    labelAlignment="center"
                  />
                </div>
                <div className="coin">
                  <img src={coin} alt="image_coin" />
                  <h2>x {userData.coin}</h2>
                </div>
                <div className="description ">
                  <textarea
                    onChange={handleChangeInput}
                    type="text"
                    name="description"
                    value={userData.description || undefined}
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
                <h2 className="centered">{userData.exp}</h2>
              </div>
              <div>
                <h1>Livello Account</h1>
                <h2 className="centered">{userData.level}</h2>
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
