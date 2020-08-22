import React from 'react';
import {Navbar, Nav, Form, FormControl,Button} from "react-bootstrap"




function Navigation () {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LCL Lawn Care Limitless</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services" className="link">Services</Nav.Link>
          <Nav.Link href="#pricing" className="link" >Pricing</Nav.Link>
          <Nav.Link href="#pricing" className="link" >Pricing</Nav.Link>
          <Nav.Link href="#contact" className="link">Contact Us</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    )
}

export default Navigation;