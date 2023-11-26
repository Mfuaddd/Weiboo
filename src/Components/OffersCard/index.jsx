import React from "react";
import "./index.scss";

const OffersCard = () => {
  return (
    <div className="offerscard">
      <div className="offerscard__lastcall">
        <div className="offerscard__lastcall_textbox">
          <p className="offerscard__lastcall_textbox_header">50% Offer</p>
          <p className="offerscard__lastcall_textbox_info">
            Last call for up to 30% off!
          </p>
          <div className="offerscard__lastcall_textbox_view">
            <p>View Collections </p>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="offerscard__lastcall_img">
          <img
            src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/pot.png"
            alt=""
          />
        </div>
      </div>
      <div className="offerscard__smartphone">
        <div className="offerscard__smartphone_textbox">
          <p className="offerscard__smartphone_textbox_header">-45% Offer</p>
          <p className="offerscard__smartphone_textbox_info">
            New <span>Smartphone</span>
          </p>
          <p className="offerscard__smartphone_textbox_view">
            Don't miss the last opportunity
          </p>
        </div>
        <div className="offerscard__smartphone_img">
          <img
            src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/headphone.webp"
            alt=""
          />
        </div>
      </div>
      <div className="offerscard__electronics">
        <div className="offerscard__electronics_textbox">
          <p className="offerscard__electronics_textbox_header">ELECTRONICS</p>
          <p className="offerscard__electronics_textbox_info">Home Speaker</p>
          <div className="offerscard__electronics_textbox_view">
            <p>Shop Now </p>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <div className="offerscard__electronics_img">
          <img
            src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/machine.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
