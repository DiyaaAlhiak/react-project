import React from 'react'
import './Input.css'
import Form from 'react-bootstrap/Form';

function Input(props) {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="" {...props}  />
      </Form.Group>
    </Form>
    </div>
  )
}
export default  Input;