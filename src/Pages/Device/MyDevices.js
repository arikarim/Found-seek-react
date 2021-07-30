import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./device.css";
const MyDevices = ({ devices }) => {
  const [myDevices, setMyDevices] = useState([]);
  const toke = JSON.parse(localStorage.getItem("token"));
  const DeleteDevice = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/devices/${id}`);
      fetchDevices();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDevices = async () => {
    try {
      const data = await axios.get("http://localhost:3001/devices");
      const usid = JSON.parse(localStorage.getItem("user_id"));
      setMyDevices(data.data.filter((d) => d.user_id === usid));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDevices();
  }, [devices]);
  if (toke === "") {
    return <Redirect to={"/login"} />;
  }
  const deleteDevice = async (e) => {
    await DeleteDevice(e.target.parentElement.parentElement.id);
    const alert = document.querySelector(".alert");
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
    alert.innerHTML = "Device deleted successfully";
    setTimeout(() => {
      alert.classList.add("d-none");
      alert.classList.remove("d-block");
    }, 3000);
  };

  return (
    <Container className="d-flex flex-wrap height">
      {myDevices &&
        myDevices.map((device) => (
          <Col
            id={device.id}
            key={device.id}
            className="mx-auto my-2"
            md={6}
            lg={4}
          >
            <Card className='card' style={{ width: "18rem", minHeight: "30rem" }}>
              <Link
                className="text-decoration-none link-dark"
                key={device.id}
                to={`/my_dev/${device.id}`}
              >
                <Card.Img
                  style={{ width: "18rem", height: "12rem" }}
                  variant="top"
                  src={device.images[0].url}
                />
                <Card.Body>
                  <Card.Title>{device.name}</Card.Title>
                  <Card.Text className="card-description">{device.description}</Card.Text>
                  <Card.Text>
                    Available:{" "}
                    {device.availability ? "Available" : "Not available"}
                  </Card.Text>
                </Card.Body>
              </Link>
              <Button
                className="position-absolute bottom-0 w-100"
                onClick={(e) => deleteDevice(e)}
                variant="danger"
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
    </Container>
  );
};

export default MyDevices;
