import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Heading from "./CategoryArray";
import "./TableCategory.css";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import Istock from "./Istock.jpg";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ProductCategory() {
  return (
    <>
    <Titlebars/>
    <NavBar/>
    <div
      style={{
        backgroundImage:`url(${Istock})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        backgroundPosition: "",
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
              Product Category Details
            </h1>
          </Col>
          <Col md={2} xs={2}>
            <Button
              href="/CreateCategory"
              variant="warning"
              style={{ marginTop: 120 }}
            ><CreateNewFolderIcon></CreateNewFolderIcon>
              Create Category
            </Button>{" "}
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Table striped hover>
            <thead>
              <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Total Product </th>
               <th>Price</th>
               <th>Action </th>
              </tr>
            </thead> 
            <tbody>
              {Heading.map((d) => (
                <tr>
                  <td>{d.v1}</td>
                  <td>{d.v2}</td>
                  <td>{d.v3}</td>
                  <td>{d.v4}</td>
                  <td>
                    <Button href={d.Link} variant="link"><VisibilityIcon></VisibilityIcon>
                      {d.v5}
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

export default ProductCategory;
