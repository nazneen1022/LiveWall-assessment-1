import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import SearchLocationInput from "./SearchLocationInput";
import axios from "axios";

import "./styles.css";
import REACT_APP_GOOGLE_API_KEY from "../../Config/constants";

export default function ImageForm(props) {
  console.log("props:", props.files);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function fetchTags() {
      const response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=${REACT_APP_GOOGLE_API_KEY}`,
        {
          requests: [
            {
              image: {
                source: {
                  imageUri: `${props.files.preview}`,
                },
              },
              features: [
                {
                  type: "LABEL_DETECTION",
                  maxResults: 10,
                },
                {
                  type: "SAFE_SEARCH_DETECTION",
                },
              ],
            },
          ],
        }
      );
      //console.log("response:", response.data.responses.labelAnnotations);
      setTags(response.data.responses.labelAnnotations);
    }
    fetchTags();
  }, [props.files.preview]);
  return (
    <div
      style={{
        fontSize: "18px",
        fontFamily: "Raleway",
        fontWeight: "bolder",
        textAlign: "left",
      }}
    >
      {!props.enableForm && (
        <h3 style={{ color: "#FB001C" }}>1 photo is selected</h3>
      )}
      <br />
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
          <SearchLocationInput
            onChange={() => null}
            disabled={props.enableForm}
          />
        </Form.Group>

        <hr />
        <Form.Group controlId="formGroupTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add tags"
            disabled={props.enableForm}
          />
        </Form.Group>
        <Form.Group>
          {tags && tags.length > 0 && (
            <div>
              Recommended Tags <br />
              {tags.map((tag) => (
                <button className="tags">{`+ ${tag}`}</button>
              ))}
            </div>
          )}
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
