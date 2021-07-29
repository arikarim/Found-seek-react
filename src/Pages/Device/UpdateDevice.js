import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";

const UpdateDevice = () => {
  const [device, setDevice] = useState("");
  const [uploadFile, setUploadFile] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();

  const handle = (e) => {
    const arr = Array.from(e.target.files);
    // console.log(arr);
    setUploadFile(arr);
  };
  const setDeviceData = async () => {
    try {
      const data = await axios.get("http://localhost:3001/devices");
      const id = history.location.pathname.slice(-1);
      const dev = data.data.filter((device) => device.id === Number(id));
      setDevice(dev[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setDeviceData();
  });

  const submitForm = (event) => {
    event.preventDefault();
    let device = new FormData();
    device.append("name", name);
    device.append("description", description);
    device.append("availability", isChecked);

    uploadFile.map((e) => device.append("[images[]", e));
    const id = history.location.pathname;
    var thenum = id.replace(/^\D+/g, "");
    console.log(Number(thenum));
    axios
      .put(`http://localhost:3001/devices/${Number(thenum)}`, device, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        history.push("/my_devices");
        const alert = document.querySelector(".alert");
        alert.classList.remove("d-none");
        alert.classList.add("d-block");
        alert.innerHTML = "Device updated successfully";
        setTimeout(() => {
          alert.classList.add("d-none");
          alert.classList.remove("d-block");
        }, 3000);
        return <Redirect to={"/my_devices"} />;
      })
      .catch((error) => {
        history.push("/my_devices");
        const alert = document.querySelector(".alert");
        alert.classList.remove("d-none");
        alert.classList.add("d-block");
        alert.innerHTML = "Device updated successfully";
        setTimeout(() => {
          alert.classList.add("d-none");
          alert.classList.remove("d-block");
        }, 3000);
        console.log(error);
        return <Redirect to={"/my_devices"} />;
        // error response
      });
  };

  return (
    <Container>
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
            // value={name || device.name}
            id="name"
            placeholder={device && device.name}
            required
          />
          {/* {device && console.log(device)} */}
          <br />
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="form-control my-2"
            type="text"
            name="description"
            id="description"
            placeholder={device && device.description}
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
          <button className="btn btn-dark" type="submit">
            Update
          </button>
        </form>
      </Col>
    </Container>
  );
};

export default UpdateDevice;
