import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import './styles.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [participantId, setParticipantId] = useState('');
  const [timelimit, settimelimit] = useState('');
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleParticipantIdChange = (event) => {
    setParticipantId(event.target.value);
  };
  const handletimelimitChange = (event) => {
    settimelimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save participant ID to localStorage
    localStorage.setItem('participantId', participantId);
    localStorage.setItem('timelimit', timelimit);
    // Redirect to /therapy
    window.location.href = `/therapy`;
  };

  return (
    <div className='container'>
      <div className='home'>
        <button className='exercise' onClick={toggleModal}>EXERCISE</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <label>
                  <p>Participant ID:</p>
                  <input type="text" value={participantId} onChange={handleParticipantIdChange} />
                </label>
                <label>
                  <p>Time Limit:</p>
                  <input type="text" value={timelimit} onChange={handletimelimitChange} />
                </label>
                <button className='submit' type="submit">Submit</button>
              </form>
              <div className="close" onClick={toggleModal}>&times;</div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
