import React from 'react'
import '../styles/Left.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import next from "../svg/next.svg";
import back from "../svg/back.svg";
import Text from "./pages/introduzione";
import {Link} from 'react-router-dom'


const percentage = 0;
const Left = () => {
  return (
    <div className=" left">
      <div className="status">
         <button className='frecce'><img alt="back" src={back}></img></button>
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
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: 'white',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: 'white',
              // Text size
              fontSize: '1.6rem',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#282828',
            },
          }}
          backgroundPadding={9}
          />
        </div>
          <button className='frecce'> <Link to='/operatori_numerici'><img alt="next" src={next}></img></Link>
          </button> 
      </div>
    <div className="text"> 
    <Text/>
    </div>
    </div>
)
}

export default Left