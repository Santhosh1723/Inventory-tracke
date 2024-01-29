
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import CreateImg from "./CreateImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function CreateCategory()
{
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
        <Container style={{width:1100}}>
        <Row >
          <Card border="warning" style={{marginTop:90}}  className="commoncard">
            <Card.Header>
              <Card.Title></Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
          <Form>
            <Row style={{marginBottom:30,  marginLeft:90 }}>
            <h3  style={{textAlign:"center"}}>Create New Category</h3>
            </Row>
            <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <Row style={{marginBottom:20}}>
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Name of the Product" />
                <Row style={{marginBottom:20}}></Row>
                <Form.Label>Product ID</Form.Label>
                <Form.Control type="text" placeholder="ID"/>
            </Row>
            <Row style={{marginBottom:30}}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>N0 Of Product</Form.Label>
                <Form.Control type="text" placeholder="Quantity" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="Number" placeholder="Price of an Product" />
              </Form.Group>
            </Row>
           
            <Row>
            <Form.Group as={Col} controlId="formGridJoinedAt">
            <Button href="/ProductCategory" variant="danger" style={{paddingRight:30,borderRadius:50 }}><ArrowBackIcon/> Back</Button>{" "}
            <Button href="#submit" variant="primary" style={{borderRadius:50}}>Submit</Button>{" "}
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

export default CreateCategory;
