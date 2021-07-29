import axios from "axios";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Home = ({ devices, setDevices }) => {
  const fetchDevices = async () => {
    try {
      const data = await axios.get("http://localhost:3001/devices");
      setDevices(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDevices();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h1>Welcome to the home page</h1>
      <h3>Checkout The devices</h3>
      <Row className="d-flex flex-wrap">
        {devices &&
          devices.map((device) => (
            <Col key={device.id} className="mx-auto my-2" md={6} lg={4}>
              <Card className="mx-auto" style={{ width: "18rem", minHeight: "30rem" }}>
                <Card.Img
                  style={{ width: "18rem", height: "12rem" }}
                  variant="top"
                  src={device.images[0].url}
                />
                {/* {console.log(device)} */}
                <Card.Body>
                  <Card.Title>{device.name}</Card.Title>
                  <Card.Text>{device.description}</Card.Text>
                  <Card.Text className="position-absolute bottom-0">
                    Available:{" "}
                    {device.availability ? "Available" : "Not available"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
