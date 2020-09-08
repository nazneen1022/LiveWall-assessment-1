import React from "react";

export default function ImageForm() {
  return (
    <div>
      <h3>1 photo is selected</h3>
      <form>
        <label>Title</label>
        <br />
        <input type="text"></input>
        <br />
        <label>Description</label>
        <br />
        <input type="textarea"></input>
        <br />
        <label>Location</label>
        <br />
        <input type="text"></input>
        <br />
        <label>Tags</label>
        <br />
        <input type="text"></input>
        <br />
        <label>Category</label>
        <br />
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
      </form>
    </div>
  );
}
