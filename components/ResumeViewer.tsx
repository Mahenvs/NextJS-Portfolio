import { useState } from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const ResumePopup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadResume = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/Resume");

      if (!response.ok) {
        throw new Error("Failed to download the file");
      }

      // Triggering the file download using the browser's 'download' attribute
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded-file.pdf"; // File name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={downloadResume}
        disabled={loading}
        className="uppercase flex items-center gap-2"
      >
        <span>Download Resume</span>
        <FiDownload className="text-xl" />
      </Button>
    </div>
  );
};

export default ResumePopup;
