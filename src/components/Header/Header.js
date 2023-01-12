import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "#0f1624"}}>
      <Container>
        <Navbar.Brand href="/">
          <DiCssdeck size="3rem" />
          <span>Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#tech">Technologies</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
           <Container>
            <div className="text-white d-flex justify-content-end">
              <div className="px-3">
                <a href="https://github.com/PNdunguMaina"><AiFillGithub size="2rem" className="text-white" /></a>
              </div>
              <div className="px-3">
                <a href="https://www.linkedin.com/in/pndungumaina/"><AiFillLinkedin size="2rem" className="text-white" /></a>
              </div>
            </div>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
