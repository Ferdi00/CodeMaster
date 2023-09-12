import { React, useState, useEffect } from "react";
import "../styles/Left.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import next from "../svg/next.svg";
import back from "../svg/back.svg";
import { Link, Routes, useNavigate, Route, useParams } from "react-router-dom";
import { data } from "./Data";
import getAllProblems from "../FirebaseDataManager/ProblemManager";
import { updateUserDocumentProblemList } from "../FirebaseDataManager/UserManager";
import problem_icon from "../svg/coding.png";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserContext } from "./Auth/UserContext";


const Left = ({ sharedUserOutput }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const userContextData = useUserContext();
  const [dataList, setDataList] = useState(data);
  const [problemList, setProblemList] = useState(null);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [isProblem, setIsProblem] = useState(false);

  <Link to={`/${dataList[currentDataIndex].slug}`}></Link>;

  useEffect(() => {
    if (dataList[currentDataIndex]) {
      navigate(`/${dataList[currentDataIndex].slug}`);
    }
  }, [currentDataIndex, dataList, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const problems = await getAllProblems();
      setProblemList(problems);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (problemList != null) {
      if (
        sharedUserOutput.trim().toLowerCase() ===
        problemList[currentDataIndex].resoult.trim().toLowerCase()
      ) {
        updateUserDocumentProblemList(user.uid, problemList[currentDataIndex]);
      }
    }
  }, [sharedUserOutput, problemList]);

  const nextProblem = () => {
    setCurrentDataIndex(
      currentDataIndex === dataList.length - 1
        ? currentDataIndex
        : currentDataIndex + 1
    );
  };

  const previousProblem = () => {
    setCurrentDataIndex(currentDataIndex === 0 ? 0 : currentDataIndex - 1);
  };

  const DataDisplay = () => {
    const { slug } = useParams();
    const data = dataList.find((d) => d.slug === slug);
    if (data) {
      return (
        <div>
          <h1>{data.title}</h1>
          <h3>{data.description}</h3>
        </div>
      );
    } else {
      return <h1>Nessun esercizio trovato</h1>;
    }
  };

  const ProblemDisplay = () => {
    const data = problemList[currentDataIndex];
    if (data) {
      return (
        <div>
          <h1>{data.id}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
          <h2>OUTPUT RICHIESTO: {data.resoult}</h2>
          <div className="help_title">
            SOLUZIONE:<br></br>
          </div>
          <div
            className="suggerimento"
            dangerouslySetInnerHTML={{ __html: data.solution }}
          ></div>
        </div>
      );
    } else {
      return <h1>Nessun esercizio trovato</h1>;
    }
  };

  const switchToStatus = () => {
    setIsProblem(!isProblem);
  };

  const showConfirmPrompt = () => {
    const confirmed = window.confirm(
      "Vuoi utilizzare 50 monete per avere la soluzione?"
    );

    if (confirmed) {
      if (userContextData.coin >= 50) alert("pagamento effettuato");
      else alert("pagamento non effettuato");
    }
  };

  return (
    <div className=" left">
      <div className="status">
        <button className="frecce" onClick={previousProblem}>
          <img alt="back" src={back}></img>
        </button>

        {!isProblem && (
          <div className="switch_button ">
            <button
              className="centered"
              disabled={!problemList}
              onClick={switchToStatus}
            >
              Risolvi il problema
              <img alt="problem_icon" src={problem_icon}></img>
            </button>
          </div>
        )}

        {isProblem && user && (
          <div className="progress">
            <label className="centered ">Completato:</label>
            <CircularProgressbar
              value={
                problemList[currentDataIndex]?.id &&
                userContextData.solved_problem.includes(
                  problemList[currentDataIndex].id
                )
                  ? 100
                  : 0
              }
              text={`${
                problemList[currentDataIndex]?.id &&
                userContextData.solved_problem.includes(
                  problemList[currentDataIndex].id
                )
                  ? 100
                  : 0
              }%`}
              background={true}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `#10e549`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "red",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "white",
                  // Text size
                  fontSize: "1.6rem",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#282828",
                },
              }}
              backgroundPadding={9}
            />
          </div>
        )}
        {isProblem && !user && (
          <div className="centered">
            <h4>Accedi per visualizzare le informazioni</h4>
          </div>
        )}

        <button className="frecce" onClick={nextProblem}>
          <img alt="next" src={next}></img>
        </button>
      </div>
      <div className="text">
        {!isProblem && (
          <Routes>
            <Route path={`/:slug`} element={<DataDisplay />}></Route>
          </Routes>
        )}

        {isProblem && (
          <>
            <section className="problem">
              {user && (
                <>
                  <button className="help" onClick={showConfirmPrompt}>
                    Vuoi un aiuto?
                  </button>
                </>
              )}
              <button className="help" onClick={switchToStatus}>
                Torna indietro
              </button>
            </section>

            <ProblemDisplay />
          </>
        )}
      </div>
    </div>
  );
};

export default Left;
