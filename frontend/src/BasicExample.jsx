import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component }  from 'react';
import controller from './controller.svg';
function BasicExample() {
  return (
    <>
    <Navbar className='header'>
      <Container style={{color:'white'}}>
        <Navbar.Brand href="/"style={{color:'white'}}>GXG BattleGrounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{color:'white'}}>
            <Nav.Link href="/about" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="/register" style={{color:'white'}}>Register Now</Nav.Link>
            <NavDropdown title="Games"style={{color:'white'}}>
              <NavDropdown.Item href="/game1"  >
                Open Source Demo
              </NavDropdown.Item>
              <NavDropdown.Item href="/game2"  >
                Dragon fly
              </NavDropdown.Item>
              <NavDropdown.Item href="#/">coming soon</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}

export default BasicExample;