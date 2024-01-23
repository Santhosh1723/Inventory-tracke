import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import UserProfileImg from "./UserProfileImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ShopOwnerDetails() {
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage:`url(${UserProfileImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Form>
            <Row className="mb-3">
              <Col>
                <h3
                  style={{
                    marginTop: 50,
                    WebkitTextStrokeColor: "white",
                    WebkitTextStrokeWidth: "2px",
                    color: "black",
                    fontWeight: 800,
                  }}
                >
                  Shop Owner Details
                </h3>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  href="/UserProfile"
                  style={{ marginTop: 50, marginLeft: 550 }}
                ><ArrowBackIcon></ArrowBackIcon>
                  Back
                </Button>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phn No" />
              </Form.Group>
            </Row>
            <Row className="mb-3"></Row>
            <Row className="mb-3">
              <Form.Label>
                <h3
                  style={{
                    WebkitTextStrokeColor: "white",
                    WebkitTextStrokeWidth: "2px",
                    color: "black",
                    fontWeight: 800,
                  }}
                >
                  Shop Details
                </h3>
              </Form.Label>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row style={{marginTop:20}}></Row>
        </Container>
      </div>
    </>
  );
}

export default ShopOwnerDetails;
