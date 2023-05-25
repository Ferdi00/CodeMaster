import { React, useState, useEffect } from "react";
import "../styles/Left.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import next from "../svg/next.svg";
import back from "../svg/back.svg";
import { Link, Routes, useNavigate, Route, useParams } from "react-router-dom";
import { problems } from "./Data";

const percentage = 0;
const Left = () => {
  const navigate = useNavigate();
  const [problemList, setProblemList] = useState(problems);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  <Link to={`/${problemList[currentProblemIndex].slug}`}></Link>;

  useEffect(() => {
    if (problemList[currentProblemIndex]) {
      navigate(`/${problemList[currentProblemIndex].slug}`);
    }
  }, [currentProblemIndex]);

  const nextProblem = () => {
    setCurrentProblemIndex(
      currentProblemIndex === problemList.length - 1
        ? currentProblemIndex
        : currentProblemIndex + 1
    );
  };

  const previousProblem = () => {
    setCurrentProblemIndex(
      currentProblemIndex === 0 ? 0 : currentProblemIndex - 1
    );
  };

  const ProblemDisplay = () => {
    const { slug } = useParams();
    const problem = problemList.find((p) => p.slug === slug);
    return (
      <div>
        <h1>{problem.title}</h1>
        <h3>{problem.description}</h3>
        <h3>Problema:{problem.problem}</h3>
        <h3>Soluzione:{problem.sol}</h3>
      </div>
    );
  };

  return (
    <div className=" left">
      <div className="status">
        <button className="frecce" onClick={previousProblem}>
          <img alt="back" src={back}></img>
        </button>
        <div className="progress">
          <label className="centered ">Completato:</label>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
                stroke: "white",
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
        <button className="frecce" onClick={nextProblem}>
          <img alt="next" src={next}></img>
        </button>
      </div>
      <div className="text">
        <Routes>
          <Route path={`/:slug`} element={<ProblemDisplay />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Left;
