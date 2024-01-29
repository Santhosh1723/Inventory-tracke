import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Titlebars from "../components/navbar/Titlebar";
import NavBar from "../components/navbar/Navbar2";
import ViewImg from "./ViewImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey } from "@mui/material/colors";

function CategoryView() {
  return (
    <>
    <Titlebars/>
    <NavBar/>
    <div
    style={{
        backgroundImage:`url(${ViewImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 770,
        backgroundPosition: "",
      }}
    >
      <div>
        <Container style={{width:1000}}>
        <Row>
          <Col xs="10" ></Col>
          <Col xs="2" >
            <Button
              href="/ProductCategory"
              variant="danger"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><ArrowBackIcon/>
              Back
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Card border="danger" className="commoncard">
            <Card.Header>
              <Card.Title style={{textAlign:'center',marginTop:10}}>Product Category Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>

              <Form>
            
            <Row>
            <Col md={2} xs={1}></Col>
            <Col md={8} xs={10}>
            <Row style={{marginBottom:20}}>
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Computer and Accessories" readOnly disabled style={{backgroundColor:"#93a1a1"}}/>
                <Row style={{marginBottom:20}}></Row>
                <Form.Label>Product ID</Form.Label>
                <Form.Control type="text" placeholder="c147" readOnly disabled muted style={{backgroundColor:"#93a1a1"}}/>
            </Row>
            <Row style={{marginBottom:30}}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>N0 Of Product</Form.Label>
                <Form.Control type="text"  placeholder="1500" readOnly disabled style={{backgroundColor:"#93a1a1"}} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="Number" placeholder="6507" readOnly disabled style={{backgroundColor:"#93a1a1"}}/>
              </Form.Group>
            </Row>
           
          
            </Col>
            <Col md={2} xs={1}></Col>
            </Row>
            </Form>

          </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        </Container>
      </div>
    </div></>
  );
}

export default CategoryView;
