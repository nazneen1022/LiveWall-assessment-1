import React from "react";
import Form from "react-bootstrap/Form";

export default function ImageForm() {
  return (
    <div>
      <h3>1 photo is selected</h3>
      <Form>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
        <Form.Group controlId="formGroupTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="Tags" />
        </Form.Group>
        <Form.Group controlId="formGroupCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      {/* <form>
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
      </form> */}
    </div>
  );
}
