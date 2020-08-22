import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
      <Container style={{position:"fixed", bottom: "0", backgroundColor:"black" }}>
    <footer>
     
         <p style={{color:"white", }} >Lawn Care because you Care</p>
    </footer>
    </Container>
  ); 
}

export default Footer;