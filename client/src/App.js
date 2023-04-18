import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <ToastContainer></ToastContainer>
            <div className="layout font">
              <Navbar></Navbar>
              <div className="right centered ">
                <Right></Right>
              </div>
              <div className="left ">
                <Left></Left>
              </div>
              {/* <div className="footer centered"><Footer></Footer></div>	 */}
            </div>
          </div>
        }
      >	
			</Route>

      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>

			
    </Routes>
  );
}

export default App;
