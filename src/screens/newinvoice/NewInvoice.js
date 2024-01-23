import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
//import Heading from "./NewInvoiceArray";
import React, { useState } from "react";
import NewInvoicetArray from "./NewInvoiceArray";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

function NewInvoice(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(NewInvoicetArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    const filtered = NewInvoicetArray.filter(
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
    setFilteredProducts(NewInvoicetArray);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search & Add Product
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container style={{ marginTop: 5 }}>
          <Row>
            <h5>New Invoice</h5>
          </Row>

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
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formGridState">
                    <Form.Select
                      style={{ border: "2px solid cadetblue" }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      onBlur={filterProducts}
                    >
                      <option value="">Choose category</option>
                      <option value="Hardwares">Hardwares</option>
                      <option value="Computer Accessories">
                        Computer Accessories
                      </option>
                      <option value="Health & Beauty ">Health & Beauty</option>
                      <option value="Watch & Sunglasses">
                        Watch & Sunglasses
                      </option>
                      <option value="Computer & Laptop">
                        Computer & Laptop
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Button variant="success" onClick={filterProducts}><SearchIcon></SearchIcon>
                    Search
                  </Button>{" "}
                </Col>
                <Col >
                  {(searchQuery || category || price) && (
                    <Button variant="danger" onClick={resetSearch}><RefreshIcon></RefreshIcon>
                      Reset
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Table striped hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Add Product</th>
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
                      <Button href="#" ><AddCircleOutlineIcon></AddCircleOutlineIcon>
                        {d.v6}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

/* function NewInvoice() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  ); 
} 
 */

export default NewInvoice;
