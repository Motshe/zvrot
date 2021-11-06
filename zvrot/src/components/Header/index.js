import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <header>
            <Navbar bg="white" expand="md">
                <Container className="align-items-end">
                    <Navbar.Brand href="#home">
                    <img src="/assets/logo.png" alt="zvrot logo" className="img-fluid App-logo"></img>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                        <Nav className="me-auto justify-content-end">
                            <Nav.Link href="#home" className="pb-0 mt-auto">Ratujemy twoje straty!</Nav.Link>
                            <Nav.Link href="#home" className="pb-0 mt-auto">Zvrot</Nav.Link>
                            <Nav.Link href="#login" className="pb-0 mt-auto">Logowanie</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
