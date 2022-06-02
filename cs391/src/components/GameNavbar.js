import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const GameNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/">GameDisplay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addgame">Add Game</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default GameNavbar;
