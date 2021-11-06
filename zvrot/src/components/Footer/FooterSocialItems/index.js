import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterSocialItems() {
    return (
        <Nav className="navbar justify-content-md-end justify-content-start social">
            <Nav.Item>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/Motshe/zvrot"  className="pe-0">
                    <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default FooterSocialItems
