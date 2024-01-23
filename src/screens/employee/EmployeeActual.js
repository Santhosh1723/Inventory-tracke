// Employee Table Without search 

/*
import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Employee.css";
import EmployeeArray from "./EmployeeArray";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import IndianCurrency from './IndianCurrency.jpg';

//import "./TableCategory.css";
function EmployeeTable() {
  return (
    <>
    <Titlebars />
    <NavBar/>
    <div
      style={{
        backgroundImage:`url(${IndianCurrency})` ,
        backgroundSize: "cover",
        height:"auto",
      }}
    >
      <Container>
        <Row>
          <Col md={4} xs={4}></Col>
          <Col md={6} xs={6}>
            <h1
              style={{
                marginTop: 70,
                WebkitTextStrokeColor: "white",
                WebkitTextStrokeWidth: "2px",
                color: "black",
                fontWeight: 800,
              }}
            >
              Employee Details
            </h1>
          </Col>
          <Col md={2} xs={2} style={{ marginTop: 120,}}>
            <Nav.Item>
              <Nav.Link href="CreateEmployee">
                <Button variant="warning">Create Employee</Button>{" "}
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined At</th>
                <th>Action </th>

               
              </tr>
            </thead>
            <tbody>
              {EmployeeArray.map((d) => (
                <tr>
                  <td>{d.v1}</td>
                  <td>{d.v2}</td>
                  <td>{d.v3}</td>
                  <td>{d.v4}</td>
                  <td>{d.v5}</td>
                  <td>{d.v6}</td>
                  <td>
                    <Button href={d.Link} variant="link">
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

export default EmployeeTable;


*/