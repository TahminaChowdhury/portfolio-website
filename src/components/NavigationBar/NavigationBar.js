import React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#home" style={{color: "#C400FF"}}>Tahmina Chowdhury</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavigationBar;