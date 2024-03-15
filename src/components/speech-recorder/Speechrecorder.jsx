import "./style.css";
import Recorder from "../recorder-controls/recorder";
import Recordings from "../recordings-list/recordings";
import useRecorder from "../../hooks/useRecorder";

export default function Speechrecorder() {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    return (
        <div className="spr">
          <Recorder recorderState={recorderState} handlers={handlers} />
          <Recordings audio={audio} />
          </div>
      )
}
