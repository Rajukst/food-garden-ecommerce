import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png"
import "./Header.css"
const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link className="my-img-ling ms-4" to="/">
         <img src={logo} alt="header logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            <Link className="my-link ms-4" to="/test">
              Testing Unit
            </Link>
            <Link className="my-link ms-4" to="/test">
              Testing Unit
            </Link>
            <Link className="my-link ms-4" to="/about">
              About Us
            </Link>
            <Link className="my-link ms-4" to="/dashboard">
              Dashboard
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Header;
