import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <header>
            <Navbar bg="white" expand="md">
                <Container className="align-items-start">
                    <Navbar.Brand href="#home">
                    <img src="/assets/logo.png" alt="zvrot logo" className="img-fluid App-logo"></img>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-4" />

                    <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                        <Nav className="me-auto align-items-start align-items-md-center justify-content-center">
                            <Nav.Link href="#home" className="me-md-3">
                                <strong>Ratujemy twoje straty!</strong>
                            </Nav.Link>
                            <Nav.Link href="#login">
                                <Button variant="light">Logowanie</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
