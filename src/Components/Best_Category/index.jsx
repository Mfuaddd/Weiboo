import React from "react";
import Best_Category_Card from "../Best_Category_Card";
import "./index.scss";
const index = () => {
  return (
    <section className="best__category">
      <div className="best__category__header">
        <div className="best__category__header__left">
          <span>Best Category</span>
        </div>
        <div className="best__category__header__right">
          <a href="">
            <span>Other Category</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
      <div className="best__category__cards">
        <Best_Category_Card
          h4="Cell Phones"
          li1="iPhone"
          li2="Phone Accessories"
          li3="Phone Cases"
          li4="Postpaid Phones"
          a="All Cell Phones"
          img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/1-3.png"
        />
        <Best_Category_Card
          h4="Monitor"
          li1="Gaming"
          li2="Office"
          li3="TV"
          li4="Ultra Wide"
          a="All Monitor"
          img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/4-3.png"
        />
        <Best_Category_Card
          h4="Pro Headphone"
          li1="Noise Canceling"
          li2="Over-EAR"
          li3="Premium Headphones"
          li4="Sports & Fitness
          "
          a="All Pro Headphone"
          img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/2-3.png"
        />
        <Best_Category_Card
          h4="Smart Watch"
          li1="Sport Watches"
          li2="Timex Watches"
          li3="Watch Brands"
          li4="Women Watches"
          a="All Smart Watch"
          img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/3-3.png"
        />
      </div>
    </section>
  );
};

export default index;
