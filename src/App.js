import "./styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./components/Auth/UserContext";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Auth/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Split from "react-split";
import { useEffect, useState } from "react";

function App() {

  const [sharedUserOutput, setSharedUserOutput] = useState("");

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (
        e.message === "ResizeObserver loop limit exceeded" ||
        e.message ===
          "ResizeObserver loop completed with undelivered notifications."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

const Root = () => {
  return (
    <div className="App font layout ">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Split
        sizes={[40, 60]}
        className="split"
        minSize={550}
        gutterSize={9}
        gutterAlign="start"
      >
        <div>
          <Left sharedUserOutput={sharedUserOutput}></Left>
        </div>
        <div>
          <Right
            sharedUserOutput={sharedUserOutput}
            setSharedUserOutput={setSharedUserOutput}
          ></Right>
        </div>
      </Split>
    </div>
  );
};

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/introduzione_a_python" />} />
        <Route path="/*" element={<Root />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </UserProvider>
  );

}




export default App;
