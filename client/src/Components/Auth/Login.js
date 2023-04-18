import React from 'react'
import Navbar from "../Navbar";
import '../../Styles/AuthPage.css';
import {Link} from 'react-router-dom'
import google_icon from "../../svg/google.svg";
import fb_icon from "../../svg/facebook.svg";


const Login = () => {
  return (
    <div>
       <Navbar></Navbar>
       <section className="auth-container forms">
            <div className="form login">
                <div className="form-content">
                    <header>Accedi</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input" />
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password" />
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <a href="#" className="forgot-pass">Password dimenticata?</a>
                        </div>

                        <div className="field button-field">
                            <button>Accedi</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Non hai un account? <Link to="/signup" className="link signup-link">Registrati</Link></span>
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

export default Login