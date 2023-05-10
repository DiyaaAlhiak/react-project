import React from 'react'
import './CompConnectors.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Input  from '../../shared/components/form/Inpot/Input';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import   img  from'../../imgs/pexels-mouad-mabrouk-3689863.jpg'
import { Link } from 'react-router-dom';
function CompConnectors() {
  return (
    <div >
   <div className='img'>
<div className='m-5'>
  <h2 className='text-body-emphasis'>Where do you want to go</h2>
  <p className='text-dark fs-4'>Jahizen at any time</p>
</div>
   </div>
  
   <Container>
      <Row xs={1} md={2} lg={2}>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="text"/>
        </Col>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="text"/>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="date"/>
        </Col>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="date"/>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={2}>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="number"/>
        </Col>
        <Col>
        <Form.Label>Email address</Form.Label>
        <Input type="number"/>
        </Col>
      </Row>
    </Container>
      <Button  className='btn-search' variant="primary">Search</Button>

      <Container>
      <Row className='mt-5 m-5' xs={1} md={2} lg={3}>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-center'>City of Cairo</Card.Title>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Compticket">
        <Button className='w-100' variant="primary">Select Ticket</Button>
        </Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-center'>City of Cairo</Card.Title>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Compticket">
        <Button className='w-100' variant="primary">Select Ticket</Button>
        </Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-center'>City of Cairo</Card.Title>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Compticket">
        <Button className='w-100' variant="primary">Select Ticket</Button>
        </Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>

  
    </div>
  )
}
export default CompConnectors;