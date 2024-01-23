import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function LandingPage() {
  const backgroundStyle = {
    backgroundImage: `url('https://i.pinimg.com/564x/a5/18/ef/a518efb89c08e65f59099905c65aafe6.jpg')`, // Replace with the actual URL or path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={backgroundStyle}>
      <Row
        style={{
          //marginTop: -700,
          backgroundColor: "white",
          height: 80,
          width: 1550,
        }}
      >
        <Container>
          <Row style={{ marginTop: 20 }}>
            <Col xs={1} md={1}></Col>
            <Col xs={5} md={5}>
              <h2>Inventory Tracker</h2>
            </Col>

            <Col xs={2} md={2}>
              SERVICES
            </Col>
            <Col xs={2} md={2}>
              ABOUT
            </Col>
            <Col xs={2} md={2}>
              CONTACT
            </Col>
          </Row>
        </Container>
      </Row>

      <Row>
        <Container>
        <Col>sssssssssssssssssssss</Col>
        </Container>
      
      </Row>
    </div>
  );
}

export default LandingPage;
