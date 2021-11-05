import React from 'react'
import { Nav } from 'react-bootstrap';
import FooterItem from './FooterItem'
import FooterSocialItems from './FooterSocialItems';
function Footer() {
    const items = [ "Kontakt", "Polityka Prywatności", "Cookies", "Regulamin", "O nas", "Reklama"];
    
    return (
        <footer className="mt-auto bd-footer p-3 p-md-5 mt-5 bg-white text-center text-sm-left d-flex justify-content-between">
                <Nav className="navbar justify-content-start">
                    {items.map((item, i) => {
                        return <FooterItem key={item} text={item} />
                    })}
                </Nav>
                <FooterSocialItems />
        </footer>
    )
}

export default Footer
