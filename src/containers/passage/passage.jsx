import React, { useState } from 'react';
import Phoneme from '../../components/phenome/phenome';
import ProgressComponent from '../../components/progress/progress';
import Speechrecorder from '../../components/speech-recorder/Speechrecorder';
import './passage.css';
import Recorder from "../../components/recorder-controls/recorder.jsx";
import Recordings from "../../components/recordings-list/recordings";
import useRecordingsList from "../../hooks/use-recordings-list";
import useRecorder from "./useRecorder";
const passage = [
  { name: 'passage',image:'C:\Users\Keerthi\Documents\cogsci\SpeechLearningApp\passage\passage.png', audiofile: '/passage/passage.mp3' },
];
function Passage() {
const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;
  return (
    <div className='container'>
      <div className='layout'>
        {/* <Phoneme phoneme={passage[0]} /> */}
      <img src="https://static.cambridge.org/binary/version/id/urn:cambridge.org:id:binary:20170720093345218-0956:S0025100316000207:S0025100316000207_eqnU6.gif" alt="passage" />
{/* <Speechrecorder phonemedata={passage[0]} level={'passage'} /> */}
<Recorder recorderState={recorderState} handlers={handlers} />
<Recordings audio={audio} phonemeName={passage[0].name} LEVEL ={'passage'} />
            </div>

    </div>
  );
}

export default Passage;
