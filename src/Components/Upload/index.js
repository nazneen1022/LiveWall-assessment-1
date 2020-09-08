import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import ImageForm from "../ImageForm";
import "./styles.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
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
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "240px",
  height: "240px",
};

export default function Upload() {
  const [displayForm, setDisplayForm] = useState(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
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

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          onClick={() => setDisplayForm(true)}
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

  return (
    <>
      <section className="container">
        <div {...getRootProps({ className: "droparea" })}>
          <input {...getInputProps()} />
          <p className="button">+</p>
        </div>
        <div style={thumbsContainer}>{thumbs}</div>
      </section>
      <div>{displayForm && <ImageForm />}</div>
    </>
  );
}
