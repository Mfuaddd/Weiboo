import React from "react";
import "./index.scss";
const SuperD_Card = () => {
  return (
    <section className="superd__card">
      <div className="superd__card__img">
        <img
          src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/9-3.webp"
          alt=""
        />
      </div>
      <div className="superd__card__detail">
        <div className="superd__card__detail_text">
          <h4 className="superd__basket__cat">Gaming, Office, TV</h4>
          <h4 className="superd__basket__name">HP Monitor</h4>
          <span>$3,000.00</span>
        </div>
        <div className="superd__basket__icon">
        <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </section>
  );
};

export default SuperD_Card;
