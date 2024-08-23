import React, { useState } from 'react';
import Phoneme from '../../components/phenome/phenome';
import ProgressComponent from '../../components/progress/progress';
import Speechrecorder from '../../components/speech-recorder/Speechrecorder';
import './level2_1.css';
import useRecordingsList from "../../hooks/use-recordings-list";

import useRecorder from "../../hooks/useRecorder";
const phonemesData = [
  // /words/{englishword}.mp3
// { name: 'బలం', audiofile: '/words/generated/balam.mp3' },

  { "name": "మట్ట", "audiofile": "/words/reference/matta.wav" },
  { "name": "బట్ట", "audiofile": "/words/reference/battaa.wav" },
  { "name": "పట్ట", "audiofile": "/words/reference/pattaa.wav" },
  { "name": "అట్ట", "audiofile": "/words/reference/atta.wav" },
  { "name": "పాడు", "audiofile": "/words/reference/paadu.wav" },
  { "name": "పాటు", "audiofile": "/words/reference/paatu.wav" },
  { "name": "పావు", "audiofile": "/words/reference/paavu.wav" },
  { "name": "తన్ను", "audiofile": "/words/reference/thannu.wav" },
  { "name": "దన్ను", "audiofile": "/words/reference/dannu.wav" },
  { "name": "అన్ను", "audiofile": "/words/reference/annu.wav" },
  { "name": "కాటు", "audiofile": "/words/reference/kaatuu.wav" },
  { "name": "గాటు", "audiofile": "/words/reference/gaatuu.wav" },
  { "name": "ఆటు", "audiofile": "/words/reference/aatu.wav" },
  { "name": "ఫాలు", "audiofile": "/words/reference/faalu.wav" },
  { "name": "వాలు", "audiofile": "/words/reference/vaalu.wav" },
  { "name": "ఆలు", "audiofile": "/words/reference/aalu.wav" },
  { "name": "హాయి", "audiofile": "/words/reference/haayi.wav" },
  { "name": "ఆయి", "audiofile": "/words/reference/aayi.wav" }

];
function Level2_1() {
  const [currentPhonemeIndex, setCurrentPhonemeIndex] = useState(0);
  const totalPhonemes = phonemesData.length;

  const handleNextClick = () => {
    if (currentPhonemeIndex < totalPhonemes - 1) {
      setCurrentPhonemeIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPhonemeIndex > 0) {
      setCurrentPhonemeIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlePhonemeButtonClick = (index) => {
    setCurrentPhonemeIndex(index);
  };

  const submit = () => {
    setCurrentPhonemeIndex(totalPhonemes);
  };
  
  return (
    <div className='container'>
      <div className='layout'>
        <div className='demo'>
        <h2>Task:</h2>
        <p> You need to repeat the phoneme shown thrice and record it</p>
        <span> Here is a demo video<button>Demo</button></span>
        {/* Add the demo video file here as a modal*/}
      </div>
        <div className='level1'>
          <div>
            {currentPhonemeIndex < totalPhonemes && (
              <div>
                <Phoneme phoneme={phonemesData[currentPhonemeIndex]} />
                <Speechrecorder phonemedata={phonemesData[currentPhonemeIndex]} level ={'2_1'} />
              </div>
            )}
                        {currentPhonemeIndex < totalPhonemes  && (
              <button className='prev' onClick={handlePrevClick}>
                prev
              </button>
            )}
            {currentPhonemeIndex < totalPhonemes - 1 && (
              <button className='next' onClick={handleNextClick}>
                Next
              </button>
            )}

            {currentPhonemeIndex === totalPhonemes - 1 && (
              <button className='submit' onClick={submit}>
                Submit
              </button>
            )}
            {currentPhonemeIndex === totalPhonemes && <p>Level 2_1 Completed</p>}
          </div>
          <ProgressComponent current={currentPhonemeIndex} total={totalPhonemes} />
        </div></div>
      {/* <div className="sidebar">
        <p>Phonemes List</p>
        <div className="phoneme-grid">
          {phonemesData.map((phoneme, index) => (
            <button key={index} onClick={() => handlePhonemeButtonClick(index)}>
              {phoneme.name} 
            </button>
          ))}
        </div>
      </div> */}

    </div>
  );
}

export default Level2_1;
