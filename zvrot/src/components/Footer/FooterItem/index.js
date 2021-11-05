import React from 'react'
import { Nav } from 'react-bootstrap'
function FooterItem({text}) {
    return (
        <Nav.Item>
            <Nav.Link href="#">{text}</Nav.Link>
        </Nav.Item>
    )
}

export default FooterItem
