import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import logo from './logo.png';

export default function Header() {
    return (
        <header>
            <Navbar bg="white" expand="md">
                <Container className="align-items-start">
                    <Navbar.Brand href="#">
                    <img src={logo} alt="zvrot logo" className="img-fluid App-logo"></img>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-4" />

                    <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                        <Nav className="me-auto align-items-start align-items-md-center justify-content-center">
                            <Nav.Link href="https://app.getresponse.com/site2/5420954d712159a6d277ee2ceb3f57bd/?u=QGscR&webforms_id=SyU4G" className="me-md-3">
                                <strong>Ratujemy twoje straty!</strong>
                            </Nav.Link>
                            <Nav.Link href="https://app.getresponse.com/site2/5420954d712159a6d277ee2ceb3f57bd/?u=QGscR&webforms_id=SyU4G">
                                <Button variant="light">Logowanie</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
