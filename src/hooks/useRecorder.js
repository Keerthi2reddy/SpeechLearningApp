import { useState, useEffect } from "react";
import { startRecording, saveRecording } from "../handlers/recorder-controls";

const initialState = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false,
  paused: false, // New state to track whether recording is paused
  // restart:true,
  mediaStream: null,
  mediaRecorder: null,
  audio: null,
};

export default function useRecorder() {
  const [recorderState, setRecorderState] = useState(initialState);

  useEffect(() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval = null;

    if (recorderState.initRecording && !recorderState.paused) { // Check if recording is not paused
      recordingInterval = setInterval(() => {
        setRecorderState((prevState) => {
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval);
            return prevState;
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59)
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            };

          if (prevState.recordingSeconds === 59)
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            };
        });
      }, 1000);
    } else {
      clearInterval(recordingInterval);
    }
    console.log(recorderState.paused);

    return () => clearInterval(recordingInterval);
  }, [recorderState.initRecording, recorderState.paused]);

  useEffect(() => {
    if (recorderState.mediaStream)
      setRecorderState((prevState) => {
        return {
          ...prevState,
          mediaRecorder: new MediaRecorder(prevState.mediaStream),
        };
      });
  }, [recorderState.mediaStream]);
  useEffect(() => {
    const recorder = recorderState.mediaRecorder;
    let chunks = [];

    if (recorder && recorder.state === "inactive") {
      recorder.start();

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];

        setRecorderState((prevState) => {
          if (prevState.mediaRecorder)
            return {
              ...initialState,
              audio: window.URL.createObjectURL(blob),
            };
          else return initialState;
        });
      };
    }

    return () => {
      if (recorder) recorder.stream.getAudioTracks().forEach((track) => track.stop());
    };
  }, [recorderState.mediaRecorder]);

  useEffect(() => {
    let resumeTimeout;
    if (recorderState.paused && recorderState.initRecording) {
      console.log("paused");
      if (recorderState.mediaRecorder.state !== "inactive") {
        recorderState.mediaRecorder.pause();
      }// Pause the recording
      // Set a timeout to automatically resume recording after 5 seconds
      resumeTimeout = setTimeout(() => {
        console.log("timed out");

        if (recorderState.mediaRecorder && recorderState.mediaRecorder.state === "paused") {
          recorderState.mediaRecorder.resume(); // Resume the recording
          setRecorderState((prevState) => ({
            ...prevState,
            paused: !prevState.paused,
          }))
        }
      }, 1000); // 5 seconds
    }

    // Clean up the timeout when component unmounts or paused state changes
    return () => clearTimeout(resumeTimeout);
  }, [recorderState.paused, recorderState.mediaRecorder]);

  useEffect(() => {
    let pauseTimeout;

    if (!recorderState.paused) {
      
      // Start the timeout only if the recording is not already paused
      pauseTimeout = setTimeout(() => {
        console.log("paused");
        if (!recorderState.paused) {
          setRecorderState(prevState => ({ ...prevState, paused: true }));
        }
      }, 5000); // 10 seconds
    }

    // Clean up the timeout when component unmounts or when the recording is paused
    return () => clearTimeout(pauseTimeout);
  }, [recorderState.paused]);

  
  return {
    recorderState,
    startRecording: () => startRecording(setRecorderState),
    cancelRecording: () => setRecorderState(initialState),
    saveRecording: () => saveRecording(recorderState.mediaRecorder),
    pauseRecording: () => setRecorderState((prevState) => ({
      ...prevState,
      paused: !prevState.paused,
    })),
  };
}
