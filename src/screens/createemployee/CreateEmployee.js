import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import CreateImg from "./CreateImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CreateEmployee() {
  return (
    <>
    <Titlebars/>
    <NavBar/>
    <div
    style={{
      backgroundImage:`url(${CreateImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 750,
    }}
  >
      <div>
        <Container style={{width:900}}>
        <Row >
          <Card border="danger" style={{marginTop:70}}>
            <Card.Header>
              <Card.Title></Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
          <Form>
            
              <h3 style={{ marginTop: 30 ,textAlign:"center"}}>Create New Employee</h3>
           
            <Row style={{marginTop:40}}>
              <Col md={2}></Col>
              <Col md={8}>
                <Row style={{ marginBottom: 20 }}>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Role</Form.Label>
                    <select className="form-select">
                      <option value="Admin">Admin</option>

                      <option value="Casier">Casier</option>

                      <option value="Sales">Sales</option>
                    </select>
                  </Form.Group>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone No</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone No" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridJoinedAt">
                    <Form.Label>Joined At</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Sales/Casier/Admin"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridJoinedAt">
                    <Button
                      href="/EmployeeTable"
                      variant="success"
                      style={{ paddingRight: 30 }}
                    ><ArrowBackIcon/>
                      Back
                    </Button>{" "}
                    <Button href="#submit" variant="primary">
                      Submit
                    </Button>{" "}
                  </Form.Group>
                </Row>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Form>
          </Card.Text>
          </Card.Body>
          </Card>
        </Row>
        </Container>
      </div>
    </div>
    </>
  );
}

export default CreateEmployee;
