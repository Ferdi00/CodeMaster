import { React, useState, useEffect } from "react";
import "../../styles/AuthPage.css";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import google_icon from "../../svg/google.svg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast } from "../ToastCustom";
import { createUserDocumentWithGoogle } from "../../FirebaseDataManager/UserManager";

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const googleSignIn = async (e) => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser) return;
      createUserDocumentWithGoogle(newUser);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return showErrorToast("Per favore inserisci tutti i campi");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      showErrorToast(error.message);
    }
  }, [error]);

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <section className="auth-container forms">
        <div className="form login">
          <div className="form-content">
            <header>Accedi</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input
                  onChange={handleChangeInput}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  onChange={handleChangeInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                  <Link to="" className="link signup-link">
                    Password dimenticata?
                  </Link>
              </div>

              <div className="field button-field">
                <button>Accedi</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Non hai un account?{" "}
                <Link to="/signup" className="link signup-link">
                  Registrati
                </Link>
              </span>
            </div>
          </div>

          <div className="line"></div>

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

export default Login;
