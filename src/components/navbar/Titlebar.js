import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Logo from "./Logo.png";
import "./Tiylebar.css";
function Titlebars() {
  return (
    <div className="hii" style={{ backgroundColor: "#e6e6fa" }}>
      <Navbar bg="dark" data-bs-theme="dark"></Navbar>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Row>
            <Col >
              <Navbar.Brand href="/Dashboard">
                <img
                  src={Logo}
                  alt="Inventory Tracker Logo"
                  className="logo-image"
                  style={{ width: "70px", height: "auto" }}
                />{" "}
                Inventory Tracker
              </Navbar.Brand>
            </Col>

            <Col style={{marginLeft:"45rem"}} className="d-flex justify-content-end">
              <Nav>
                <Nav.Link href="/Dashboard" className="d-flex align-items-center">
                  <HomeIcon />
                  <span className="ml-2">Home</span>
                </Nav.Link>

                <Nav.Link href="#features" className="d-flex align-items-center">
                  <AutoAwesomeIcon />
                  <span className="ml-2">Features</span>
                </Nav.Link>

                <Nav.Link href="/" className="d-flex align-items-center">
                  <LogoutIcon />
                  <span className="ml-2">Logout</span>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Titlebars;
