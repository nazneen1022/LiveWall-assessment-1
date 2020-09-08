import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import UploadImage from "./Components/Upload";
import ImageForm from "./Components/ImageForm";

function App() {
  return (
    <>
      <div className="mybody">
        <Navigation />
        <br />
        <div>
          <UploadImage />
        </div>

        <br />
      </div>
      <div className="split right">
        <div className="centered">
          <ImageForm />
        </div>
      </div>
    </>
  );
}

export default App;
