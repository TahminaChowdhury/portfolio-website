import React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';

const NavigationBar = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="my-3">
        <Container>
        <LightSpeed>
        <Navbar.Brand href="#home" style={{color: "#C67ACE"}}>𝓣𝓪𝓱𝓶𝓲𝓷𝓪</Navbar.Brand>
        </LightSpeed>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">HOME</Nav.Link>
            <Nav.Link href="#about" className="text-white">ABOUT</Nav.Link>
            <Nav.Link href="#portfolio" className="text-white">PORTFOLIO</Nav.Link>
            <Nav.Link href="#blog" as={Link} to="/blog" className="text-white">BLOG</Nav.Link>
            <Nav.Link href="#contact" className="text-white">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavigationBar;