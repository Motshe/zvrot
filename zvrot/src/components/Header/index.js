import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="white" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                <img src="/assets/logo.png" alt="zvrot logo" className="img-fluid App-logo"></img>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="me-auto justify-content-end">
                        <Nav.Link href="#home">Ratujemy twoje straty!</Nav.Link>
                        <Nav.Link href="#home">Zvrot</Nav.Link>
                        <Nav.Link href="#login">Logowanie</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
