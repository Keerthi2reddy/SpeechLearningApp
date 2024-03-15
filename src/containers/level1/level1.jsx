import React, { useState } from 'react';
import Phoneme from '../../components/phenome/phenome';
import ProgressComponent from '../../components/progress/progress';
import Speechrecorder from '../../components/speech-recorder/Speechrecorder';
import './level1.css';

const phonemesData = [
  { name: '/i/', audiofile: 'oo.wav' },
  { name: '/e/', audiofile: 'oo.wav' },
  { name: '/ɛ/', audiofile: 'ay.wav' },
  { name: '/ӕː/', audiofile: 'ay.wav' },
  { name: '/u/', audiofile: 'oo.wav' },
  { name: '/o/', audiofile: 'oo.wav' },
  { name: '/ɐ/', audiofile: 'ay.wav' },
  { name: '/pɐ/', audiofile: 'ay.wav' },
  { name: '/bɐ/', audiofile: 'ay.wav' },
  { name: '/tɐ/', audiofile: 'oo.wav' },
  { name: '/dɐ/', audiofile: 'oo.wav' },
  { name: '/ʈɐ/', audiofile: 'oo.wav' },
  { name: '/ɖɐ/', audiofile: 'oo.wav' },
  { name: '/kɐ/', audiofile: 'oo.wav' },
  { name: '/gɐ/', audiofile: 'oo.wav' },
  { name: '/mɐ/', audiofile: 'oo.wav' },
  { name: '/nɐ/', audiofile: 'oo.wav' },
  { name: '/ɳɐ/', audiofile: 'oo.wav' },
  { name: '/rɐ/', audiofile: 'oo.wav' },
  { name: '/fɐ/', audiofile: 'oo.wav' },
  { name: '/sɐ/', audiofile: 'oo.wav' },
  { name: '/ʂɐ/', audiofile: 'oo.wav' },
  { name: '/ʃɐ/', audiofile: 'oo.wav' },
  { name: '/hɐ/', audiofile: 'oo.wav' },
  { name: '/ʦɐ/', audiofile: 'oo.wav' },
  { name: '/ʣɐ/', audiofile: 'oo.wav' },
  { name: '/ʧɐ', audiofile: 'oo.wav' },
  { name: '/ʤɐ/', audiofile: 'oo.wav' },
  { name: '/ʋɐ/', audiofile: 'oo.wav' },
  { name: '/jɐ/', audiofile: 'oo.wav' },
  { name: 'lɐ/', audiofile: 'oo.wav' },
  { name: '/ɭɐ/', audiofile: 'oo.wav' },

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
        <p> You need to repeat the phoneme shown thrice and record it</p>
        <span> Here is a demo video<button>Demo</button></span>
        {/* Add the demo video file here as a modal*/}
      </div>
        <div className='level1'>
          <div>
            {currentPhonemeIndex < totalPhonemes && (
              <div>
                <Phoneme phoneme={phonemesData[currentPhonemeIndex]} />
                <Speechrecorder />
              </div>
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
