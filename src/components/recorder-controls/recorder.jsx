import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave,faPause,faPlay } from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../../utils/format-time";
import "./styles.css";

export default function Recorder({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording,paused } = recorderState;
  const { startRecording, saveRecording, cancelRecording ,pauseRecording} = handlers;

  return (
    <div className="controls-container">
      <div className="recorder-display">
        <div className="recording-time">
          {initRecording && <div className="recording">
            {/* <div className="recording-indicator"></div> */}
            {!paused && <button
            className="pause-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={pauseRecording}
          >
            <FontAwesomeIcon icon={faPause} size="2x" />
          </button>}{paused && <button
            className="pause-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={pauseRecording}
          >
            <FontAwesomeIcon icon={faPlay} size="2x" />
          </button>}</div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className="cancel-button-container">
            <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
              <FontAwesomeIcon icon={faTimes} size="2x"/> 
            </button>
          </div>
        )}
      </div>
      <div className="start-button-container">
        {initRecording ? (
            <button
            className="start-button save-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <FontAwesomeIcon icon={faSave} size="2x" />
          </button>
        ) : (
          <button className="start-button" title="Start recording" onClick={startRecording}>
            <span><FontAwesomeIcon icon={faMicrophone} size="2x" />Record Here</span>
          </button>
        )}
      </div>
    </div>
  );
}
