import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import "./Employee.css";
import EmployeeArray from "./EmployeeArray";
import IndianCurrency from "./IndianCurrency.jpg";
import Form from "react-bootstrap/Form";
import SearchIcon from '@mui/icons-material/Search';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';

//import "./TableCategory.css";
function EmployeeTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [Role, setRole] = useState("");
  const [Email, setEmail] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(EmployeeArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseRole = Role.toLowerCase();
    const filtered = EmployeeArray.filter(
      (product) =>
        product.v2.toLowerCase().includes(lowerCaseQuery) &&
        product.v4.toLowerCase().includes(lowerCaseRole) &&
        product.v3.toString().includes(Email)
    );
    setFilteredProducts(filtered);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setRole("");
    setEmail("");
    setFilteredProducts(EmployeeArray);
  };

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${IndianCurrency})`,
          backgroundSize: "cover",
          height: "auto",
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
            <Col md={2} xs={2} style={{ marginTop: 120 }}>
              <Nav.Item>
                <Nav.Link href="CreateEmployee">
                  <Button variant="warning"><CreateNewFolderIcon></CreateNewFolderIcon>Create Employee</Button>{" "}
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: 50 }}>
            <Form>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Name of Employee"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formGridState">
                    <Form.Select
                      style={{ border: "2px solid cadetblue" }}
                      value={Role}
                      onChange={(e) => setRole(e.target.value)}
                      onBlur={filterProducts}
                    >
                      <option value="">Role Of Employee</option>
                      <option value="Admin">Admin</option>
                     
                      <option value="Casier">Casier</option>
                      <option value="Sales">
                       Sales
                      </option>
                      
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Email of Employee"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Button variant="success" onClick={filterProducts}>
                    <SearchIcon></SearchIcon>Search
                  </Button>{" "}
                </Col>
                <Col >
                  {(searchQuery || Role || Email) && (
                    <Button variant="danger" onClick={resetSearch}><RefreshIcon></RefreshIcon>
                      Reset
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
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
                {filteredProducts.map((d) => (
                  <tr>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <td>{d.v6}</td>
                    <td>
                      <Button href={d.Link} variant="link"><VisibilityIcon></VisibilityIcon>
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
