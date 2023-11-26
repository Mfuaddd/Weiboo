import React from "react";
import "./index.scss";
const SuperD_Slider = () => {
  return (
    <section className="superd__slider">
      <div className="superd__slider__imgs">
        <img
          src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/10-3.webp"
          alt=""
        />
        <img
          src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/8-3.webp"
          alt=""
        />
        <img
          src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/1-2.webp"
          alt=""
        />
        <img
          src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/2-3.webp"
          alt=""
        />
      </div>
      <div className="superd__slider__card">
        <div className="superd__slider__img">
          <img
            src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/10-3.webp"
            alt=""
          />
        </div>
        <div className="superd__slider__txt">
          <div className="superd__slider__stars">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <span>(0 Reviews)</span>
          </div>
          <div className="superd__slider__tag">
            <h4>Smart TV</h4>
            <span>$3,050.00</span>
          </div>
          <div className="superd__slider__add">
            <i className="fa-solid fa-cart-shopping"></i>
            <a href="/#">Add to cart</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperD_Slider;
