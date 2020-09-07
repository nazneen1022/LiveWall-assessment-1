import React, { useState } from "react";
import "./styles.css";

import Dropzone from "react-dropzone";

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

  return (
    <div className="App">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p style={{ fontSize: "30px" }}>+</p>
          </div>
        )}
      </Dropzone>
      <div className="thumb">
        <div className="thumbInner">
          {fileNames.map((fileName) => (
            <aside key={fileName}>
              {
                <img
                  src={fileName.preview}
                  alt={fileName.name}
                  style={{ display: "block", width: "auto", height: "100%" }}
                />
              }
            </aside>
          ))}
        </div>
      </div>
    </div>
  );
}
