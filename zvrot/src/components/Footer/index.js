import React from 'react'
import { Nav, Col, Row, Container } from 'react-bootstrap';
import FooterItem from './FooterItem'
import FooterSocialItems from './FooterSocialItems';
function Footer() {
    const items = [ "Kontakt", "Polityka Prywatności", "Cookies", "Regulamin", "O nas", "Reklama"];
    
    return (
        
        <footer className="mt-auto bd-footer bg-white text-center text-sm-left">
            <Container>
                <Row className="pt-2">
                    <Col xs={12} md={6}>
                        <Nav className="navbar justify-content-start align-content-start flex-wrap">
                            {items.map((item, i) => {
                                return <FooterItem key={item} text={item} />
                            })}
                        </Nav>
                    </Col>
                    <Col xs={12} md={6}>
                        <FooterSocialItems />
                        <p className="text-start text-md-end ps-3" style={{fontSize:"14px"}}>
                            © Motshe. Wszystkie prawa zastrzeżone
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
        
    )
}

export default Footer
