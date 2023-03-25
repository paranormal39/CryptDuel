import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component }  from 'react';
function BasicForm() {

  //on click here 

  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="alias" placeholder="Name for Leaderboards" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wallet Address</Form.Label>
        <Form.Control type="wallet" placeholder="Enter wallet" />
        <Form.Text className="text-muted">
          We'll never share your wallet info with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Xumm
      </Button>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm;