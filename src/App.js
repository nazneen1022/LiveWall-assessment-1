import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import UploadImage from "./Components/Upload";
import ImageForm from "./Components/ImageForm";

function App() {
  return (
    <div className="mybody">
      <div className="split left">
        <Navigation />
        <br />
        <div>
          <UploadImage />
        </div>

        <br />
      </div>
      <div className="split right">
        <ImageForm />
      </div>
    </div>
  );
}

export default App;
