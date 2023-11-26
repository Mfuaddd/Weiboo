import React from 'react'
import "./index.scss";
import FooterRightTop from '../FooterRightTop';
import FooterRightBottom from '../FooterRightBottom';
const FooterRight = () => {
  return (
    <div className="footerright">
        <FooterRightTop/>
        <FooterRightBottom/>
    </div>
  )
}

export default FooterRight