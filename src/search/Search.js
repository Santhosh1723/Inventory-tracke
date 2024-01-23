/*
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import ProductArray from "./ProductArray";

import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";

function ProductTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    const filtered = ProductArray.filter(
      (product) =>
        product.v2.toLowerCase().includes(lowerCaseQuery) &&
        product.v3.toLowerCase().includes(lowerCaseCategory) &&
        product.v4.toString().includes(price)
    );
    setFilteredProducts(filtered);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setCategory("");
    setPrice("");
    setFilteredProducts(ProductArray);
  };

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/10326878/pexels-photo-10326878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 2400,
          backgroundPosition: "",
        }}
      >
        <Container>
          <Row>{ command line ... (unchanged) ...  }</Row>

          <Row style={{ marginTop: 50 }}>
            <Form>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Product Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onInput={filterProducts}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formGridState">
                    <Form.Select
                      style={{ border: "2px solid cadetblue" }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      onInput={filterProducts}
                    >
                      <option value="">Choose category</option>
                      <option value="Hardwares">Hardwares</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Computer&Accessories">
                        Computer&Accessories
                      </option>
                      <option value="Food and instruments">
                        Food and instruments
                      </option>
                      <option value="Clothing">Clothing</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onInput={filterProducts}
                  />
                </Col>
                <Col>
                  <Button variant="success" onClick={filterProducts}>
                    Search
                  </Button>{" "}
                </Col>
                <Col xs={1}>
                  {(searchQuery || category || price) && (
                    <Button variant="danger" onClick={resetSearch}>
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
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((d) => (
                  <tr key={d.v1}>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <td>
                      <Button href={d.Link} variant="link">
                        {d.v6}
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

export default ProductTable;

*/