import "./style.css";
import Recorder from "../recorder-controls/recorder";
import Recordings from "../recordings-list/recordings";
import useRecorder from "../../hooks/useRecorder";

export default function Speechrecorder({phonemedata,level}) {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;
    console.log(level);

    return (
        <div className="spr">
          <Recorder recorderState={recorderState} handlers={handlers} />
          <Recordings audio={audio} phonemeName={phonemedata.name} LEVEL ={level} />
          </div>
      )
}
