import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import "./device.css";
const Createdevice = () => {
  const [uploadFile, setUploadFile] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  const handle = (e) => {
    const arr = Array.from(e.target.files);
    setUploadFile(arr);
  };

  const submitForm = (event) => {
    event.preventDefault();
    let device = new FormData();
    device.append("name", name);
    device.append("description", description);
    device.append("availability", isChecked);
    const usid = JSON.parse(localStorage.getItem("user_id"));
    device.append("user_id", usid);
    uploadFile.map((e) => device.append("[images[]", e));
    axios
      .post("http://localhost:3001/devices", device, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        history.push("/");
        const alert = document.querySelector(".alert");
        alert.classList.remove("d-none");
        alert.classList.add("d-block");
        alert.innerHTML = "Device created successfully";
        setTimeout(() => {
          alert.classList.add("d-none");
          alert.classList.remove("d-block");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="height">
      <Col md={6} className="mx-auto">
        <form
          className="form"
          onSubmit={submitForm}
          encType="multipart/form-data"
        >
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control my-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="form-control my-2"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            required
          />
          <label htmlFor="file">Upload a file</label>
          <input
            name="file"
            className="form-control my-2"
            type="file"
            id="file"
            onChange={(e) => handle(e)}
            multiple
            required
          />
          <label htmlFor="availability">Available?</label>
          <input
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mx-2"
            type="checkbox"
            name="availability"
            id="availability"
          />
          <br />
          <Button className="btn btn-dark" type="submit">
            Create
          </Button>
        </form>
      </Col>
    </Container>
  );
};

export default Createdevice;
