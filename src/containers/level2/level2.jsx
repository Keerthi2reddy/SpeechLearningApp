import React, { useState } from 'react';
import Phoneme from '../../components/phenome/phenome';
import ProgressComponent from '../../components/progress/progress';
import Speechrecorder from '../../components/speech-recorder/Speechrecorder';
import './level2.css';
const phonemesData = [
  // /words/{englishword}.mp3
// { name: 'బలం', audiofile: '/words/generated/balam.mp3' },
// { name: 'భద్రతా', audiofile: '/words/generated/bhadhratha.mp3' },
// { name: 'దాహం', audiofile: '/words/generated/dhaaham.mp3' },
// { name: 'డబ్బు', audiofile: '/words/generated/dabbu.mp3' },
// { name: 'జగత్తు', audiofile: '/words/generated/jagatthu.mp3' },
// { name: 'గోధుమ', audiofile: '/words/generated/gooduma.mp3' },
{ name: 'హరితం', audiofile: '/words/generated/haritham.mp3' },
// { name: 'కబురు', audiofile: '/words/generated/kaburu.mp3' },
// { name: 'లబ్ధి', audiofile: '/words/generated/labdhi.mp3' },
{ name: 'మనస్సు', audiofile: '/words/generated/manassu.mp3' },
// { name: 'నైరుతి', audiofile: '/words/generated/nairuthi.mp3' },
{ name: 'పోరాటం', audiofile: '/words/generated/pooratam.mp3' },
// { name: 'రక్తం', audiofile: '/words/generated/raktam.mp3' },
{ name: 'ఫలితము', audiofile: '/words/generated/phalithamu.mp3' },
// { name: 'సజావు', audiofile: '/words/generated/sajaavu.mp3' },
{ name: 'పరిషత్', audiofile: '/words/generated/parishat.mp3' },
{ name: 'తరువాత', audiofile: '/words/generated/tharuvatha.mp3' },
// { name: 'బాట', audiofile: '/words/generated/baata.mp3' },
// { name: 'ఇప్పుడు', audiofile: '/words/generated/ippudu.mp3' },
{ name: 'ఎగుమతి', audiofile: '/words/generated/egumathi.mp3' },
// { name: 'వరి', audiofile: '/words/generated/vari.mp3' },

// from paper
// { name: 'పట్ట', audiofile: '/words/frompaper/tree_bark.wav' },
// { name: 'బట్ట', audiofile: '/words/frompaper/02-cloth.wav' },
// { name: 'తన్ను', audiofile: '/words/frompaper/03-to_kick.wav' },
{ name: 'వామి', audiofile: '/words/frompaper/17-hay_stack.wav' },
// { name: 'ఫాలు', audiofile: '/words/frompaper/21-hemcloth_of_saree.wav' },
{ name: 'కసాయి', audiofile: '/words/frompaper/22-butcher.wav' },
{ name: 'ఆవు', audiofile: '/words/frompaper/32-cow.wav' },
{ name: 'వాని', audiofile: '/words/frompaper/18-his.wav' },
{ name: 'కల', audiofile: '/words/frompaper/34-dream.wav' },
// { name: 'పాటు', audiofile: '/words/frompaper/05-suffering.wav' },
// { name: 'పాడు', audiofile: '/words/frompaper/06-to_sing.wav' },
{ name: 'రాలు', audiofile: '/words/frompaper/20-to_fall.wav' },
{ name: 'కాశి', audiofile: '/words/frompaper/24-Varanasi-city_in_India.wav' },
// { name: 'కాటు', audiofile: '/words/frompaper/07-a_bite.wav' },
// { name: 'గాటు', audiofile: '/words/frompaper/08-dent.wav' },
// { name: 'హాయి', audiofile: '/words/frompaper/25-pleasantness.wav' },
{ name: 'బేణ్డు', audiofile: '/words/frompaper/06-band.wav' },
{ name: 'అను', audiofile: '/words/frompaper/11-to_say.wav' },
{ name: 'పిల్లి', audiofile: '/words/frompaper/01-cat.wav' },
{ name: 'మెట్టు', audiofile: '/words/frompaper/05-step.wav' },


];
function Level2() {
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
                <Speechrecorder phonemedata={phonemesData[currentPhonemeIndex]} level ={2} />
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
            {currentPhonemeIndex === totalPhonemes && <p>Level 2 Completed</p>}
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

export default Level2;
