import React from 'react'
import "./index.scss";
const FooterLeft = () => {
    return (
        <div className="footerleft">
            <div className="footerleft_content">
                <div className="footerleft_content_img">
                    <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/logo-light-1.svg" alt="" />
                </div>
                <div className="footerleft_content_text">
                    <p>Solid is the information & experience directed at an end-use.</p>
                </div>
                <div className="footerleft_content_date">
                    <div className="footerleft_content_date_icon">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="footerleft_content_date_text">
                        <span>Mon - Fri: 9:00-20:00</span>
                        <p>0020 500 - CALL - 000</p>
                    </div>
                </div>
                <div className="footerleft_content_mail">
                    <div className="footerleft_content_mail_icon">
                        <i className="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <div className="footerleft_content_mail_text">
                        <span>Get Support</span>
                        <p>info@webmail.com</p>
                    </div>
                </div>
                <div className="footerleft_content_icon">
                    <div className="footerleft_content_icon_content ">
                        <div className="footerleft_content_icon_content_facebook footer__icon" >
                        <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="footerleft_content_icon_content_youtube footer__icon">
                        <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div className="footerleft_content_icon_content_twitter footer__icon">
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="footerleft_content_icon_content_linkedin footer__icon">
                        <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterLeft