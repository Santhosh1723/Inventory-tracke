import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import InvoiceArray from "./InvoiceArray";
import Istock from "./Istock.jpg";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PreviewIcon from '@mui/icons-material/Preview';
import VisibilityIcon from '@mui/icons-material/Visibility';

//import "./TableCategory.css";
function InvoiceTable() {
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${Istock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <Container>
          <Row>
            <Col md={5} xs={5}></Col>
            <Col md={5} xs={5}>
              <h1
                style={{
                  marginTop: 70,
                  WebkitTextStrokeColor: "white",
                  WebkitTextStrokeWidth: "2px",
                  color: "black",
                  fontWeight: 800,
                }}
              >
                Invoice Details
              </h1>
            </Col>
            <Col md={2} xs={2}>
              <Button
                href="/CreateInvoice"
                variant="warning"
                style={{ marginTop: 120 }}
              ><CreateNewFolderIcon></CreateNewFolderIcon>
                Create Invoice
              </Button>{" "}
            </Col>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <Table striped hover responsive>
              <thead>
                <tr>
                  {InvoiceArray.map((d) => (
                    <th>{d.Head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {InvoiceArray.map((d) => (
                  <tr>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <td>{d.v6}</td>
                    <td>
                      <Button href={d.Link}>
                        {d.v7}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default InvoiceTable;
