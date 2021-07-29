import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="height">
      <Row>
        <Col className="mx-auto my-5" sm={8} md={6} lg={6}>
          <div className="d-flex">
            <h2 className="mx-auto">404 Not Found</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
