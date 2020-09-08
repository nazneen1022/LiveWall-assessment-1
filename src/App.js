import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import Navigation from "./Components/Navigation";
import ImageForm from "./Components/ImageForm";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  flexDirection: "row",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 240,
  height: 240,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "inline-flex",
  flexDirection: "column",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "240px",
  height: "240px",
};

function App() {
  const [enableForm, setEnableForm] = useState(true);
  const setFormStatus = () => setEnableForm(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  //console.log("files:", files);
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          onClick={() => setFormStatus(true)}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  //console.log("count:", files.length);
  return (
    <div className="mybody">
      <div className="split left">
        <Navigation />
        <br />
        <div>
          {/* <UploadImage setFormStatus={setFormStatus} /> */}
          <section className="container">
            <div {...getRootProps({ className: "droparea" })}>
              <input {...getInputProps()} />
              <p className="button">+</p>
            </div>
            <div style={thumbsContainer}>{thumbs}</div>
          </section>
        </div>

        <br />
      </div>
      <div className="split right">
        <ImageForm files={files} enableForm={enableForm} />
      </div>
    </div>
  );
}

export default App;
