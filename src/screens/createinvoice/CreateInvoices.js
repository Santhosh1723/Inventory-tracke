/*
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import MyVerticallyCenteredModal from "../newinvoice/NewInvoice";
import CreateInvoiceArray from "./CreateInvoiceArray";

function CreateInvoices() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4618514/pexels-photo-4618514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`,
          backgroundSize: "cover",
          height: 750,
        }}
      >
        <Container>
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
              >
                Back To Invoice
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="success" onClick={() => setModalShow(true)}>
                Add Item
              </Button>{" "}
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Button href="#Save" variant="info">
                Save Invoice
              </Button>{" "}
              <Button href="#remove" variant="danger">
                Remove Item
              </Button>{" "}
            </Col>
          </Row>

          <Table striped hover style={{ marginTop: 40 }}>
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
                  <td>
                    <Button href={d.Link} variant="link">
                      {d.v5}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default CreateInvoices;

*/
