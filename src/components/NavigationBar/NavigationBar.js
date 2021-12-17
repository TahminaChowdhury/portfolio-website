import React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/editor-icon-20.jpg'

const NavigationBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="my-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={img}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
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