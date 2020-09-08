import React from "react";
import Form from "react-bootstrap/Form";
import SearchLocationInput from "./SearchLocationInput";

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
            placeholder="Fill in an appropriate title for this photo"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Give your photo a short description"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          {/* <Form.Control
            type="text"
            placeholder="Enter where this photo was taken"
            disabled={props.enableForm}
          /> */}
          <SearchLocationInput
            onChange={() => null}
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add tags"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group controlId="formGroupCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" disabled={props.enableForm}>
            <option>Enter a category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}
