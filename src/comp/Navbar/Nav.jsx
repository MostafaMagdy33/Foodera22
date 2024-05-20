import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import "./Nav.css";


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <HashLink to="#Header"><img src="img/logo.png" /></HashLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">



          <Nav className="ms-auto">
            <HashLink to="#ContactUs">Contact Us</HashLink>
            <HashLink to="#Center">About Us</HashLink>
            <HashLink to="#ExploreFoods">Explore Foods</HashLink>
            <HashLink to="#Testimonials">Reviews </HashLink>
            <HashLink to="#FAQ">FAQ </HashLink>
            <Nav.Link href="#"><button>18009070</button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;