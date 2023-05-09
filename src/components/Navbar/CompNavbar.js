import React from 'react'
import './CompNavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

 function CompNavbar() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <h3 className='text-primary' >LOGO</h3>
          <Nav className="me-auto">
            <NavLink className="ms-5" to="/">Home</NavLink>
            <NavLink  className="mx-3" to="CompConnectors">Connectors</NavLink>
            <NavLink className="mx-3" to="Compticket">ticket</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default CompNavbar;