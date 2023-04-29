import "./styles/App.css";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Auth/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <Routes>
      <Route
        path="/introduzione"
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
      <Route path="profile" element={<Profile />}></Route>
      
			
    </Routes>
  );
}

export default App;
