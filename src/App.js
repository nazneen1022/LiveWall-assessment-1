import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import UploadImage from "./Components/Upload";
import ImageForm from "./Components/ImageForm";

function App() {
  const [enableForm, setEnableForm] = useState(true);
  const setFormStatus = () => setEnableForm(false);
  return (
    <div className="mybody">
      <div className="split left">
        <Navigation />
        <br />
        <div>
          <UploadImage setFormStatus={setFormStatus} />
        </div>

        <br />
      </div>
      <div className="split right">{<ImageForm enableForm={enableForm} />}</div>
    </div>
  );
}

export default App;
