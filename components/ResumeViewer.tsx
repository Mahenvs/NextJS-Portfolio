import { useState } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePopup = (title: { title: string }) => {
  const [resumeUrl, setResumeUrl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const downloadResume = async () => {
    try {
      console.log("Fetching resume...");
      const url =
        "https://drive.google.com/file/d/1EM6SurgWWBysdZo6aswIzE8NSpDQ5qMm/view?usp=drive_link";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      // Create a Blob URL from the response
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      setResumeUrl(blobUrl);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching resume:", error);
    }
  };

  return (
    <div>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={downloadResume}
        className="uppercase flex items-center gap-2"
      >
        <span>Download Resume</span>
        <FiDownload className="text-xl" />
      </Button>

      {/* Trigger button */}
      {/* <button >Download Resume</button> */}

      {/* Popup for resume preview */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <h2>Resume Preview</h2>
          {resumeUrl ? (
            <iframe
              src={resumeUrl}
              title="Resume"
              style={{ width: "100%", height: "500px" }}
            ></iframe>
          ) : (
            <p>Loading...</p>
          )}
          <button
            style={{ marginTop: "10px" }}
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setShowPopup(false)}
        ></div>
      )}
    </div>
  );
};

export default ResumePopup;
