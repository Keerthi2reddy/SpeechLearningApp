import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import './phenome.css';

const Phoneme = ({ phoneme }) => {
  const [loaded, setLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioElement, setAudioElement] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const { default: audioFile } = await import(`../../audiofiles${phoneme.audiofile}`);
        console.log('Audio file loaded:', audioFile);
        setLoaded(true);
        
        const audio = new Audio(audioFile);
        audio.oncanplaythrough = () => {
          setAudioElement(audio);
          setAudioError(false);
          console.log('Audio element ready');
        };
        audio.onerror = () => {
          setAudioError(true);
          console.error('Error loading audio file:', audioFile);
        };
        audio.onended = () => {
          setIsPlaying(false); // Update isPlaying state when audio playback ends
        };
      } catch (error) {
        console.error('Error loading audio file:', error);
        setAudioError(true);
      }
    };

    loadAudio();
  }, [phoneme]);

  const togglePlayPause = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="phoneme-container">
      <div className='justify-center'>
        <h2>{phoneme.name}</h2>
      </div>
      {loaded && !audioError && (
        <button onClick={togglePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
      )}
      {!loaded && !audioError && <p>Loading audio file...</p>}
      {audioError && <p>Error loading audio file.</p>}
    </div>
  );
};

export default Phoneme;
