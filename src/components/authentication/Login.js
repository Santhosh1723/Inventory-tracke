import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Login.css";
import LoginBg from "./LoginBg.jpg";
import LoginImg from "./LoginImg.jpg";
import Logo from "./Logo.png";
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 780,
        backgroundPosition: "",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <CardGroup>
              <Card
                className="Bootstrap-Card"
                style={{ width: "5rem", marginTop: 140 }}
              >
                <img src={LoginImg} style={{ height: 520 }} />
              </Card>

              <Card
                className="Bootstrap-Card"
                style={{
                  width: "5rem",
                  marginTop: 140,
                  backgroundColor: "#f0f8ff",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={5}></Col>
                    <Col>
                      <img
                        src={Logo}
                        style={{
                          width: "90px",

                          height: "auto",
                          verticalAlign: "middle",
                        }}
                      />
                    </Col>
                  </Row>
                  <Card.Title>
                    <h2
                      style={{
                        marginTop: 30,
                        WebkitTextStrokeColor: "black",
                        WebkitTextStrokeWidth: "2px",
                        color: "white",
                        fontWeight: 800,
                        textAlign: "center",
                      }}
                    >
                      Log In
                    </h2>
                  </Card.Title>

                  <Card.Text>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <a href="#forget Password">Forgot Password</a>
                      </Row>
                      <Row className="mb-3">
                        <Button href="/Dashboard" variant="primary">
                          {" "}
                          Log In{" "}<LoginIcon></LoginIcon>
                        </Button>{" "}
                      </Row>
                    </Form>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridDoyouHaveAccount">
                        <small className="text-muted">
                          <Form.Label style={{ marginLeft: 250 }}>
                            Do you have an account?
                          </Form.Label>{" "}
                        </small>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridSignUp">
                        <small className="text-muted">
                          <a href="/SignUp" style={{ marginLeft: 280 }}>
                            SIGN UP NOW
                          </a>
                        </small>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
