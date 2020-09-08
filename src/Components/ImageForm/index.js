import React from "react";
import Form from "react-bootstrap/Form";

export default function ImageForm(props) {
  //console.log("props:", props.enableForm);
  return (
    <div>
      {!props.enableForm && (
        <h3 style={{ color: "red", fontSize: "bolder", fontFamily: "verdana" }}>
          1 photo is selected
        </h3>
      )}

      <Form>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Description"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tags"
            disabled={props.enableForm}
          />
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
    </div>
  );
}
