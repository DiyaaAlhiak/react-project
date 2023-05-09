import React from 'react'
import './CompConnectors.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Input  from '../../shared/components/form/Inpot/Input';
import Form from 'react-bootstrap/Form';
import BtnSearch from '../../shared/components/buttons/search/BtnSearch'
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
<div >
<BtnSearch />
</div>
  
    </div>
  )
}
export default CompConnectors;