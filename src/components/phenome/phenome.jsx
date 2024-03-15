import React, { useState, useEffect } from 'react';
import './phenome.css';

const Phoneme = ({ phoneme }) => {
  const [loaded, setLoaded] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState(null);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const { default: audioFile } = await import(`../../audiofiles/${phoneme.audiofile}`);
        setAudioBuffer(audioFile);
        setLoaded(true);
        console.log('Audio file loaded successfully.');
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    loadAudio();
  }, [phoneme]);

  return (
   
    <div className="phoneme-container">
       <div className='justify-center'>
      <h2>{phoneme.name}</h2>
      </div>
      {loaded && audioBuffer && (
        <audio controls>
          <source src={audioBuffer} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
      {!loaded && <p>Loading audio file...</p>}
    </div>
  );
};

export default Phoneme;
