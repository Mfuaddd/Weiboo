import React from "react";
import SuperD_Card from "../SuperD_Card";
import SuperD_Count from "../SuperD_Count";
import SuperD_Slider from "../SuperD_Slider";
import "./index.scss";

const Super_Deal = () => {
  return (
    <section className="superd">
      <div className="superd__header">
        <div className="superd__header__left">
          <h3>Super Deals Of The Week</h3>
          <div className="superd__header__counter">
            <SuperD_Count />
            <SuperD_Count />
            <SuperD_Count />
            <SuperD_Count />
          </div>
        </div>
        <div className="superd__header__right">
          <a href="/#">
            <span>All Products</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
      <div className="superd__cards">
        <SuperD_Slider />
        <SuperD_Card />
      </div>
    </section>
  );
};

export default Super_Deal;
