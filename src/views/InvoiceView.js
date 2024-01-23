import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import ViewImg from "./ViewImg.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function InvoiceView(){
  return (
    <div
    style={{
      backgroundImage:`url(${ViewImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 1300,
      backgroundPosition: "",
    }}
  >
     <Row>
          <Col xs="3" ></Col>
          <Col xs="6"> <Button
              href="#"
              variant="info"
              style={{ paddingRight: 30, marginTop: 30 }}
            ><DownloadIcon />
             Download
            </Button>{" "}</Col>
          <Col xs="3" >
            <Button
              href="/InvoiceTable"
              variant="success"
              style={{ paddingRight: 30, marginTop: 30 }}
            ><ArrowBackIcon/>
              Back
            </Button>{" "}
          </Col>
        </Row>
    <Row >
      <Container style={{ width: '50rem' }}>
        
      <Card style={{ width: '50rem' ,marginTop:30}}>

        <Card border="primary" style={{ width: '50rem',backgroundColor:"#008080",height:200 }}>
        <Card.Body >
          <Card.Title>
            <Row>
               <Col style={{textAlign:"right",fontSize:30}}>Invoice  </Col>
               <Col  style={{marginLeft:450}}>Das & Co</Col> 
            </Row>
            </Card.Title>
          <Card.Text>
            <Row>
                <Col style={{marginLeft:30}}>
                    <Row>
                    <Image src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" roundedCircle />
                    </Row>
                </Col>
                <Col  style={{marginLeft:450}}>
                    
                    <Row>Adyar,147</Row>
                    <Row>Chennai</Row>
                    <Row>India</Row>
                    <Row>636455</Row>
                   </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card.Body style={{height:150}}>
        <Card.Text>
         <Row>
            <Col style={{marginLeft:30}} >
                <Row style={{fontWeight:200}}>BILL TO:</Row>
                <Row>Das & Co Warehouse</Row>
                <Row>Adyar,147</Row>            
                <Row>Chennai</Row>
                <Row>India</Row>
                <Row>636455</Row>
            </Col>
            <Col style={{marginLeft:450 ,}} >
                <Row>INVOICE #</Row>
                <Row>000001</Row>
                <Row>DATE</Row>
                <Row>17/10/2003</Row>
                <Row>INVOICE DUE DATE</Row>
                <Row>12/31/20</Row>
            </Col>
         </Row>
          
        </Card.Text>
      </Card.Body>
      <hr style={{marginTop:30}}></hr>
      <Table striped responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>lithium battery</td>
          <td>150</td>
          <td>7500</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Camera Lense</td>
          <td>50</td>
          <td>15000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mobile Case</td>
          <td>70</td>
          <td>16000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Temper Glass</td>
          <td>50</td>
          <td>15000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Charger</td>
          <td>500</td>
          <td>17000</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Hard Disk</td>
          <td>5000</td>
          <td>1500000</td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}>TOTAL</td>
          <td>2500745</td>
        </tr>
      </tbody>
    </Table>
     
      <Card.Body>
      <CardGroup>
      <Card style={{backgroundColor:"#87cefa"}} >
       
        <Card.Body>
          <Card.Title>Note</Card.Title>
          <Card.Text>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.vPraesent ut nithish834
           tempus massa blandit luctus.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{backgroundColor:"#008b8b"}}>
        <Card.Body>
            <Row style={{textAlign:"center"}}>
            <h6 >TOTAL</h6>
            <Card.Title style={{fontWeight:600,fontSize:30}}>Rs.1253000</Card.Title>
            </Row>
        </Card.Body>
        
      </Card>
     
    </CardGroup>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{textAlign:"center"}}>Powered by Inventory Tracker</ListGroup.Item>
      </ListGroup>
    </Card>
          
      </Container>
      </Row>
    </div>
  )
}

export default InvoiceView;
