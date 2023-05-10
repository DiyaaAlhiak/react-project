import React from 'react'
import './Compticket.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
    <Container className='mt-5 mb-5' >
     <Row xs={3} md={3} lg={3}>
     <Col>
       {['Secondary',].map((variant) => (
        <Link>
  <Card bg={variant.toLowerCase()}
             key={variant}
             text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
             className="mb-2"
           >
             <Card.Header className='text-center'>
              <span className='mx-2 text-danger'>h5</span>
              24:00  19:00 </Card.Header>
             <Card.Body>
               <Card.Title className='text-center'>Slow Train </Card.Title>
               <Card.Text className='text-center'>
               Ticket price175
               </Card.Text>
             </Card.Body>
           </Card>
        </Link>
         
         ))} 
        </Col>  
        <Col>
    {['Primary',].map((variant) => (
      <Link>
       <Card bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
         <Card.Header className='text-center'>
              <span className='mx-2 text-danger'>h5</span>
              24:00  19:00 </Card.Header>
          <Card.Body>
            <Card.Title className='text-center'>Express train</Card.Title>
            <Card.Text className='text-center'>
            Ticket price175
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
       
      ))} 
       </Col>   
              <Col>
       {['Success'].map((variant) => (
        <Link>
 <Card bg={variant.toLowerCase()}
             key={variant}
             text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
             className="mb-2"
           >
               <Card.Header className='text-center'>
              <span className='mx-2 text-danger'>h5</span>
              24:00  19:00 </Card.Header>
             <Card.Body>
               <Card.Title className='text-center'>VIP train</Card.Title>
               <Card.Text className='text-center'>
               Ticket price175
               </Card.Text>
             </Card.Body>
           </Card>
        </Link>
          
         ))} 
          </Col>   
     </Row>
    </Container>
    </div>
  )
}
export default Compticket;