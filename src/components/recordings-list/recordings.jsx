import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";
import "./styles.css";

export default function Recordings({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  async function uploadFileToDrive(file, folderId, fileName) {
    const metadata = {
      name: fileName,
      parents: [folderId] // Specify the parent folder ID
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);
    const accessToken = 'Eh1ggJZl5ThIvQjf5W35emgBdVRkOqp2eqHhSMTewf8W7A?e=1FPgZa';

    const response = await fetch('https://iiitaphyd-my.sharepoint.com/:f:/g/personal/gouravarapu_sai_research_iiit_ac_in/Eh1ggJZl5ThIvQjf5W35emgBdVRkOqp2eqHhSMTewf8W7A?e=1FPgZa', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
      body: form
    });

    console.log(response);

    const data = await response.json();
    return data;
  }
  const uploadAudio = async (audioKey) => {
    // Find the recording to upload
    const recordingToUpload = recordings.find((record) => record.key === audioKey);
    if (!recordingToUpload) return;

    // Upload the recording to Google Drive
    try {
      await uploadFileToDrive(recordingToUpload.audio, "YOUR_FOLDER_ID", `${audioKey}.wav`);
      console.log(`Audio with key ${audioKey} uploaded successfully.`);
    } catch (error) {
      console.error("Error uploading file to Google Drive:", error);
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
                    onClick={() => uploadAudio(record.key)}
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
