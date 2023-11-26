import React from 'react'
import "./index.scss";
import FooterLeft from '../FooterLeft';
import FooterRight from '../FooterRight';
const Footer = () => {
    return (
        <section id="footer">
            <div className="footer_content">
                <FooterLeft />
                <FooterRight />
            </div>
        </section>
    )
}

export default Footer