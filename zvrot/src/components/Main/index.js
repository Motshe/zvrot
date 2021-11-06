import React from 'react'
import { Button, Card, Col, Container, Form, Image, Row, Text } from 'react-bootstrap'
import Description from './Description'
import RegistrationForm from './RegistrationForm'

function Main() {
    return (
        <Container className="mt-5 text-start d-flex flex-column h-100">
            
            <Row>
                <Col xs={12} md={6} className="text-white">
                    <Description />
                </Col>
                <Col xs={12} md={6}>
                    <Card style={{backgroundColor:"#fff9"}}>
                        <Card.Body className="p-5">
                            <RegistrationForm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row className="mt-auto" xs={12} md={8}>
                <div class="search my-5"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input type="text" class="form-control" placeholder="Szukaj w magazynach w całej Polsce"></input> 
                </div>
            </Row>
            
            
        </Container>
    )
}

export default Main
