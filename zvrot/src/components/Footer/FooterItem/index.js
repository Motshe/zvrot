import React from 'react'
import { Nav } from 'react-bootstrap'
function FooterItem({text}) {
    return (
        <Nav.Item className="text-start">
            {/* <Nav.Link href="https://app.getresponse.com/site2/5420954d712159a6d277ee2ceb3f57bd/?u=QGscR&webforms_id=SyU4G">{text}</Nav.Link> */}
            <Nav.Link href="/contact">{text}</Nav.Link>
        </Nav.Item>
    )
}

export default FooterItem
