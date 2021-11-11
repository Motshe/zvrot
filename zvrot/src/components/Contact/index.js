import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';

function loadError(onError) {
    console.error(`Failed ${onError.target.src} didn't load correctly`);
}

function Contact() {
    const getResponseForm = useRef(null);
    useEffect(() => {
        const loadScript = async () => {
            console.log("laoding")
            const externalScript = document.createElement("script");
            externalScript.onerror = loadError;
            externalScript.async = true;
            externalScript.type = "text/javascript";
            externalScript.setAttribute("data-webform-id", "SyY1g");
            externalScript.src = `https://app.getresponse.com/view_webform_v2.js?u=QGscR&webforms_id=SyY1g`;
            console.log(getResponseForm)
            if(getResponseForm.current.childNodes.length === 0) getResponseForm.current.appendChild(externalScript);
            console.log(getResponseForm)
        }
        loadScript()
    }, [])
    return (
        <Container ref={getResponseForm} className="newsletter-form h-100 d-flex"></Container>
    )
}

export default Contact
