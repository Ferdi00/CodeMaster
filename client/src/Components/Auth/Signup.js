import { React, useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle  } from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase"
import "../../styles/AuthPage.css";
import Navbar from "../Navbar";
import {ToastContainer} from 'react-toastify';
import {showErrorToast} from "../ToastCustom"
import "react-toastify/dist/ReactToastify.css";
import { Link,useNavigate } from "react-router-dom";
import google_icon from "../../svg/google.svg";
import fb_icon from "../../svg/facebook.svg";
import { createUserDocument, createUserDocumentWithGoogle } from "../../Dao/UserDao";

const Signup = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
   const [signInWithGoogle] = useSignInWithGoogle(auth);

  const googleSignIn = async (e) => {
    try {
      const newUser = await signInWithGoogle();
            if(!newUser) return;
            createUserDocumentWithGoogle(newUser);
            navigate("/introduzione");
    } catch (error) {
      console.error(error);
    }
  }


  const handleRegister = async (e) => {
    e.preventDefault();
    if(!inputs.email || !inputs.password || !inputs.username || !inputs.password_confirm) return showErrorToast("Per favore inserisci tutti i campi");
      
    else if(inputs.password !== inputs.password_confirm) return showErrorToast("Le password non corrispondono, per favore riprova");

    else try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser) return;
            createUserDocument(inputs,newUser.user.uid);
            navigate("/introduzione");
            
        } catch (error) {
            alert(error.message);
        }
  };

  useEffect(() => {
    if(error){
        console.log(error.message);
        //showErrorToast(error.message);
    } 
  }, [error])
  

  return (
    <div>
    <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <section className="auth-container forms">
        <div className="form signup">
          <div className="form-content">
            <header>Registrati</header>
            <form onSubmit={handleRegister}>
              <div className="field input-field">
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  className="input"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="field input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  onChange={handleChangeInput}
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Crea password"
                  className="password"
                  onChange={handleChangeInput}
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  name="password_confirm"
                  placeholder="Conferma password"
                  className="password"
                  onChange={handleChangeInput}
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button>Registrati</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Hai già un account?{" "}
                <Link to="/login" classNameName="link login-link">
                  Login
                </Link>
              </span>
            </div>
          </div>

          <div className="line"></div>
          <div className="media-options">
            <a onClick={""} className="field facebook">
              <img
                src={fb_icon}
                alt=""
                className="bx bxl-facebook facebook-icon"
              ></img>
              <span>Accedi con Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a onClick={googleSignIn} className="field google">
              <img src={google_icon} alt="" className="google-img" />
              <span>Accedi con Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
