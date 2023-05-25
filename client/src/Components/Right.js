import { useState} from "react";
import Split from "react-split";
import "../styles/Right.css";
import Editor from "@monaco-editor/react";
import axios from "axios";
import spinner from "../svg/spinner.svg";
import {
  showErrorToast,
  showWarningToast,
  showSuccessToast,
} from "./ToastCustom";


function Right() {

  // State variable to set users source code
  const [userCode, setUserCode] = useState("");

  const userLang = "python";

  // State variable to set editors default theme
  const userTheme = "vs-dark";

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  // Function to call the compile endpoint
  function compile() {
    setLoading(true);

    if (userCode === "") {
      showErrorToast("Errore: codice non valido o vuoto");
      setLoading(false);
      return;
    }

    const formData = {
      language_id: 71,
      // encode source code in base64
      source_code: btoa(userCode),
      stdin: btoa(userInput),
    };

    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(" post response data: ", response.data);
        let token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setLoading(false);
        console.log(error);
        showWarningToast();
      });
  }

  let checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setLoading(false);
        console.log("get response data", response.data);
        changeOutput(response.data);
        return;
      }
    } catch (err) {
      console.log("error get:", err);
      setLoading(false);
      showWarningToast();
    }
  };

  function changeOutput(outputDetails) {
    const statusId = outputDetails.status.id;
    console.log("output details:", outputDetails);
    if (statusId === 6) {
      // compilation error
      setUserOutput(userOutput + window.atob(outputDetails.compile_output));
      showErrorToast();
    }
    // compilation success
    else if (statusId === 3) {
      setUserOutput(userOutput + window.atob(outputDetails.stdout));
      showSuccessToast();
    }
    //time limit
    else if (statusId === 5) {
      setUserOutput(userOutput + "Time limit Exceed");
      showErrorToast("Time limit Exceed");
    } else {
      setUserOutput(userOutput + window.atob(outputDetails.stderr));
      showErrorToast();
    }
  }

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput("");
  }

  return (
    <div className="right">
      <div className="controlBar centered">
        <div className="sin">
          <button className="run-btn" onClick={() => compile()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </button>
          <div className="fs centered">
            <label className="centered">Font Size</label>
            <input
              id="myinput"
              type="range"
              min="18"
              max="30"
              value={fontSize}
              step="2"
              onChange={(e) => {
                setFontSize(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="des centered">
          <label>Clear Output </label>
          <button id="clear" onClick={() => clearOutput()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
      <Split
        className="split-ver"
        sizes={[65, 35]}
        direction="vertical"
        minSize={200}
        gutterSize={8}
        gutterAlign="start"
      >
        <div>
          <Editor
            padding="0"
            margin="0"
            options={options}
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
        </div>

        <div className="container">
          <Split className="split" minSize={100} gutterSize={9}>
            <div className="input">
              <textarea
                placeholder="INPUT:"
                id="code-inp"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
            {loading ? (
              <div className="spinner-box">
                <img src={spinner} alt="Loading..." />
              </div>
            ) : (
              <div className="output">
                {/* <div className="out">OUTPUT:</div> */}
                <textarea
                  readOnly
                  placeholder="OUTPUT:"
                  value={userOutput}
                ></textarea>
              </div>
            )}
          </Split>
        </div>
      </Split>
    </div>
  );
}

export default Right;
