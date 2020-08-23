import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
      <Container style={{position:"fixed", bottom: "0", backgroundColor:"black" }}>
    <footer>
     
         <p style={{color:"white", textAlign:"center", fontFamily:"sans-serif", fontSize:"20px" }} >Lawn Care because We Care</p>
    </footer>
    </Container>
  ); 
}

export default Footer;