// ProgressComponent.js
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress.css';
const ProgressComponent = ({ current, total }) => {
  const progressPercent = (current / total) * 100;

  return (
    // <div>
    //   {/* <p>Progress: {progressPercent.toFixed(2)}%</p> */}
    //   <progress value={progressPercent} max={100} />
    // </div>
    <div className='progress'>
      <div className='progressbar'>
    <CircularProgressbar
      value={progressPercent}
    /></div>
  </div>
  );
};

export default ProgressComponent;
