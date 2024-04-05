import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";
import "./styles.css";

export default function Recordings({ audio ,phonemeName}) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  const uploadAudio = async (audio, participantId, day, level) => {
    try {
      // Fetch the resource from the Blob URL
      const response = await fetch(audio);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
  
      // Convert the response to blob
      const blob = await response.blob();
  
      // Create a new URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
  
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `ID_${participantId}/level${level}/${phonemeName}.mp3`; // Specify the full path including the folder
      document.body.appendChild(link);
      link.click();
  
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
  
      console.log('File downloaded successfully');
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  
  return (
    <div className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <h2>Your recordings</h2>
          <div className="recordings-list">
            {recordings.map((record) => (
              <div className="record" key={record.key}>
                <audio controls src={record.audio} />
                <div className="upload-button-container">
                  <button
                    className="upload-button"
                    title="Upload this audio"
                    onClick={() => uploadAudio(record.audio, 1, 1, 1)}
                  >
                    <FontAwesomeIcon icon={faUpload} />
                  </button>
                </div>
                <div className="delete-button-container">
                  <button
                    className="delete-button"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-records">
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f8b0b0" />
          <span>You don't have records</span>
        </div>
      )}
    </div>
  );
}
