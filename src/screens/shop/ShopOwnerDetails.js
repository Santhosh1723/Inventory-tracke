import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import "./Shop.css";
import UserProfileImg from "./UserProfileImg.jpg";

function ShopOwnerDetails() {
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${UserProfileImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Row>
            <Card className="commoncard">
              <Row>
                <Col xs={1} md={1}> </Col>
                <Col xs={10} md={10} >
                
              <Form >
                <Row className="mb-3">
                  <Col xs={5} md={5}></Col>
                  <Col xs={5} md={5}>
                    <h3
                      style={{
                        marginTop: 50,
                        WebkitTextStrokeColor: "white",
                        WebkitTextStrokeWidth: "2px",
                        color: "black",
                        fontWeight: 800,
                       
                      }}
                    >
                      User Details
                    </h3>
                  </Col>
                  <Col xs={2} md ={2}>
                    <Button
                      variant="danger"
                      href="/UserProfile"
                      style={{ marginTop: 30,marginLeft:60, borderRadius:50}}
                    >
                      <ArrowBackIcon></ArrowBackIcon>
                      Back
                    </Button>
                  </Col>
                </Row>

                <Row className="mb-3"  style={{marginTop:40}}>
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

                  <Form.Group as={Col} controlId="formGridRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose Role...</option>
                      <option>Admin</option>
                      <option>Casier</option>
                      <option>Sales</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Phone Number"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Mobile Number"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridTwitter">
                    <Form.Label>Twitter ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Twitter id" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridJoinedDate">
                    <Form.Label>Joined Date</Form.Label>
                    <Form.Control type="Date" placeholder="Joined Date" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formInstagram">
                    <Form.Label>Instagram Id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Instagram id"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridFacebook">
                    <Form.Label>Facebook Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Facebook id" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridurl">
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter website url" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Name of City" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Tamil Nadu</option>
                      <option>Kerala</option>
                      <option>Kasmir</option>
                      <option>Delhi</option>
                      <option>Andra Pradesh</option>
                      <option>Madhya Pradesh</option>
                      <option>Karnataka</option>
                      <option>Bihar</option>
                      <option>Gujarat</option>
                      <option>Harayana</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control  type="Number" placeholder="Enter Pin" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <button className="submitbutton type1" type="submit">
                  Submit
                </button>
              </Form>
              </Col>
              <Col xs={1} md={1}></Col>
              </Row>
             
            </Card>
            
          </Row>
          
        </Container>
        <Row style={{ marginTop: 40 }}></Row>
      </div>
    </>
  );
}

export default ShopOwnerDetails;
