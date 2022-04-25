import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png"
import "./Header.css"
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Link to="/">
    <img className="header-image" src={logo} alt="header logo" />
    </Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/">Home</Link>
        <Link to="/about">Link</Link>
        <Link to="/">Home</Link>
        <Link to="/about">Link</Link>
      </Nav>
    </Navbar.Collapse>
   <Link to="/shopping-cart">
   <i className="fa-solid fa-cart-arrow-down fa-2x shopping-cart me-5 "></i>
   </Link>
    <button>Login</button>
  </Container>
</Navbar>
  );
};

export default Header;
