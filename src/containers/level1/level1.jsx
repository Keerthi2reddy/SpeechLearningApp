import React, { useState } from 'react';
import Phoneme from '../../components/phenome/phenome';
import ProgressComponent from '../../components/progress/progress';
import Speechrecorder from '../../components/speech-recorder/Speechrecorder';
import './level1.css';
import useRecordingsList from "../../hooks/use-recordings-list";

import useRecorder from "../../hooks/useRecorder";
const phonemesData = [
  
{ name: '/i/', audiofile: 'ph_i_short.mp3' },
{ name: '/e/', audiofile: 'ph_e_short.mp3' },
{ name: '/ɐ/', audiofile: 'ph_u_short.mp3' },
{ name: '/ӕː/', audiofile: 'ph_a_long.mp3' },
{ name: '/ie/', audiofile: 'ph_i_long.mp3' },
{ name: '/oe/', audiofile: 'ph_o_long.mp3' },
{ name: '/ue/', audiofile: 'ph_u_long.mp3' },
{ name: '/p/', audiofile: 'p__.mp3' },
{ name: '/b/', audiofile: 'b__.mp3' },
{ name: '/t/', audiofile: 't__.mp3' },
{ name: '/d/', audiofile: 'd__.mp3' },
{ name: '/ʈ/', audiofile: 't__.mp3' },
{ name: '/ɖ/', audiofile: 'd__.mp3' },
{ name: '/k/', audiofile: 'k__.mp3' },
{ name: '/g/', audiofile: 'g__.mp3' },
{ name: '/m/', audiofile: 'm__.mp3' },
{ name: '/n/', audiofile: 'n__.mp3' },
{ name: '/r/', audiofile: 'r__.mp3' },
{ name: '/f/', audiofile: 'f__.mp3' },
{ name: '/s/', audiofile: 's__.mp3' },
{ name: '/ʃ/', audiofile: 'ph_sh.mp3' },
{ name: '/h/', audiofile: 'h__.mp3' },
{ name: '/ʣ/', audiofile: 'ph_g_soft.mp3' },
{ name: '/ʋ/', audiofile: 'v__.mp3' },
{ name: '/j/', audiofile: 'j__.mp3' },
{ name: '/l/', audiofile: 'l__.mp3' },

];
function Level1() {
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
      <div className='layout'><div className='demo'>
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
                <Speechrecorder phonemedata={phonemesData[currentPhonemeIndex]} />
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
            {currentPhonemeIndex === totalPhonemes && <p>Level 1 Completed</p>}
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

export default Level1;
