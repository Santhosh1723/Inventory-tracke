import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import MyVerticallyCenteredModal from "../newinvoice/NewInvoice";
import CreateInvoiceArray from "./CreateInvoiceArray";
import CreateInv from "./CreateInv.jpg";
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';;

function CreateInvoice() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${CreateInv})`,
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <Container style={{ width: 1100 }}>
          <Row>
            <Col md={5} xs={5}></Col>
            <Col md={5} xs={5}>
              <h1
                style={{
                  marginTop: 70,
                  WebkitTextStrokeColor: "yellow",
                  WebkitTextStrokeWidth: "1px",
                  color: "white",
                  fontWeight: 800,
                }}
              >
                Create Invoice
              </h1>
            </Col>
            <Col md={2} xs={2}>
              <Button
                href="/InvoiceTable"
                variant="primary"
                style={{ marginTop: 70 }}
              ><ArrowBackIcon></ArrowBackIcon>
                Back To Invoice
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="success" onClick={() => setModalShow(true)}><AddIcon></AddIcon>
                Add Item
              </Button>{" "}
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Button href="#Save" variant="info"><SaveIcon></SaveIcon>
                Save Invoice
              </Button>{" "}
              <Button href="#remove" variant="danger"><RemoveCircleIcon></RemoveCircleIcon>
                Remove Item
              </Button>{" "}
            </Col>
          </Row>

          <Card
            className="shadow-lg  bg-white rounded"
            style={{ marginTop: 30 }}
          >
            <Container style={{ width: 1000 }}>
              <Form>
                <Row>
                  <h4
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      WebkitTextStrokeColor: "black",
                      WebkitTextStrokeWidth: "2px",
                      color: "white",
                      fontWeight: 800,
                    }}
                  >
                    Shop Owner Details
                  </h4>
                </Row>

                <Row style={{ marginTop: 30 }}>
                  <Col>
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phn Number" />
                  </Col>
                </Row>

                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                  <Col>
                    <Form.Label>Invoice ID</Form.Label>
                    <Form.Control type="text" placeholder="ID10147" />
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Billing Date" />
                  </Col>
                  <Col>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" placeholder="Date of Due" />
                  </Col>
                </Row>

                <Row style={{ marginTop: 40 }}>
                  <Form.Label>
                    <h3
                      style={{
                        textAlign: "center",
                        WebkitTextStrokeColor: "black",
                        WebkitTextStrokeWidth: "2px",
                        color: "white",
                        fontWeight: 800,
                      }}
                    >
                      Company Details
                    </h3>
                  </Form.Label>
                </Row>
                <Form.Group className="mb-3" controlId="formGridCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control placeholder="NAme of the company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Payment Status</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Paid</option>
                      <option>Not Paid</option>
                      <option>On Due</option>
                    </Form.Select>
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

                  <Form.Group as={Col} controlId="formGridPin">
                    <Form.Label>Pin No</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Row style={{ marginTop: 20 }}></Row>
              </Form>
            </Container>
          </Card>
          <Row>
            {" "}
            <h1
              style={{
                marginTop: 50,
                marginBottom: 50,
                textAlign: "center",
                WebkitTextStrokeColor: "yellow",
                WebkitTextStrokeWidth: "1px",
                color: "white",
                fontWeight: 800,
              }}
            >
              Billing Products
            </h1>
          </Row>

          <Table striped hover>
            <thead>
              <tr>
                {CreateInvoiceArray.map((d) => (
                  <th>{d.Head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CreateInvoiceArray.map((d) => (
                <tr>
                  <td>{d.v1}</td>
                  <td>{d.v2}</td>
                  <td>{d.v3}</td>
                  <td>{d.v4}</td>
                  <td>{d.v5}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}></td>
                <th colSpan={2}> TOTAL</th>
                <td>150000</td>
              </tr>
            </tbody>
          </Table>
          <Row style={{ marginTop: 40 }}></Row>
        </Container>
      </div>
    </>
  );
}

export default CreateInvoice;
