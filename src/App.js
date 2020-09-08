import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import UploadImage from "./Components/Upload";

function App() {
  const [files, setFiles] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  return (
    <div className="mybody">
      <Navigation />
      <br />
      <div>
        <UploadImage {...files} onDrop={handleDrop} />
      </div>
      <br />
    </div>
  );
}

export default App;
