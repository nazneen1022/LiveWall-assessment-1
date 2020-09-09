import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import SearchLocationInput from "./SearchLocationInput";
import axios from "axios";

import "./styles.css";

export default function ImageForm(props) {
  const [tags, setTags] = useState([]);

  //get user inputs into local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [selectTags, setSelectTags] = useState([]);
  const [category, setCategory] = useState("");

  //set reposnse message from back-end
  const [message, setMessage] = useState();

  /* get the location input from child component, that
  uses google Maps API to find the location based on
  user seearch. Passing this function as component props */
  function getLocation(value) {
    setLocation(value);
  }

  useEffect(() => {
    //Google Vision API request using axios library
    async function fetchTags() {
      const response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_API_KEY.replace(
          /"/g,
          ""
        ).replace(/;/g, "")}`,
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
    //function call the Vision API request
    fetchTags();
  }, [props.files.preview]);

  function upload() {
    const tagsString = selectTags.join(",");
    const data = {
      title,
      description,
      location,
      tags: tagsString,
      category,
      imageUrl: `${props.files[0].preview}`,
    };
    //console.log("data:", data);

    const postData = async () => {
      const response = await axios.post(
        "http://localhost:4000/uploadPhoto",
        data
      );
      console.log("response:", response.data.message);

      setMessage(response.data.message);
    };
    postData();
  }

  function cancel() {
    setTitle("");
    setDescription("");
    setLocation("");
    setSelectTags([]);
    setCategory("");
  }

  return (
    <div
      style={{
        fontSize: "18px",
        fontFamily: "Raleway",
        fontWeight: "bolder",
        textAlign: "left",
      }}
    >
      <h3 style={{ color: "#FB001C" }}>
        {!props.enableForm ? `1` : `No`} photo is selected
      </h3>
      {message && <Alert variant="success">{message}</Alert>}

      <Form>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fill in an appropriate title for this photo"
            disabled={props.enableForm}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Give your photo a short description"
            disabled={props.enableForm}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <SearchLocationInput
            value={location}
            onChange={() => null}
            disabled={props.enableForm}
            location={getLocation}
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formGroupTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add tags"
            disabled={props.enableForm}
            value={selectTags}
            onChange={(event) =>
              setSelectTags([...selectTags, event.target.value])
            }
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
          <Form.Control
            as="select"
            disabled={props.enableForm}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Enter a category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <div style={{ padding: "10px", columnCount: "2" }}>
        <p>
          <button className="uplaod-button" onClick={upload}>
            Upload Photo
          </button>
        </p>
        <p>
          <button className="uplaod-button" onClick={cancel}>
            Cancel
          </button>
        </p>
      </div>
    </div>
  );
}
