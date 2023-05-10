import React from 'react'
import './Compticket.css'
import Card from 'react-bootstrap/Card';
 function Compticket() {
  return (
    <div className='mt-4 '>
    <h2 className='text-primary mb-4'>Select Ticket</h2>
    <Card className="text-center">
      <Card.Header ></Card.Header>
      <Card.Body>
      <Card.Text>Departure City</Card.Text>
        <Card.Title>Jakarta Station</Card.Title>
        <h2 className='text-primary'>To</h2>
        <Card.Text>City of Arrival</Card.Text>
        <Card.Title>Sukabumi Station</Card.Title>
      
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </div>
  )
}
export default Compticket;