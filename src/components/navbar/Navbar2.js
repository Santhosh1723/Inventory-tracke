import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="iii">
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/UserProfile">User Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/EmployeeTable">Employee</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ProductCategory">Products Category</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ProductTable">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/InvoiceTable">Invoice</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
