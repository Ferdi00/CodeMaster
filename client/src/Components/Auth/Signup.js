import React from 'react'
import '../../Styles/AuthPage.css';
import Navbar from "../Navbar";
import {Link} from 'react-router-dom'
import google_icon from "../../svg/google.svg";
import fb_icon from "../../svg/facebook.svg";

const Signup = () => {
  return (
    <div>
       <Navbar></Navbar>
       <section className="auth-container forms">
            <div className="form signup">
                <div className="form-content">
                    <header>Registrati</header>
                    <form action="#">
                    <div className="field input-field">
                            <input type="username" placeholder="Username" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Crea password" className="password"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Conferma password" className="password"/>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="field button-field">
                            <button>Registrati</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Hai già un account? <Link to="/login" classNameName="link login-link">Login</Link></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                        <img src={fb_icon} alt="" className='bx bxl-facebook facebook-icon'></img>
                        <span>Accedi con Facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="#" className="field google">
                        <img src={google_icon} alt="" className="google-img" />
                        <span>Accedi con Google</span>
                    </a>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Signup