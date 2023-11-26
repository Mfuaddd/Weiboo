import React from "react";
import "./index.scss";

const BestCategoryCard = ({ h4, li1, li2, li3, li4, a, img }) => {
  return (
    <section className="best__category__card">
      <div className="best__category__card__cat">
        <h4>{h4}</h4>
        <ul>
          <li>
            <a href="/#">
              {li1}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              {li2}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              {li3}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="/#">
              {li4}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
        </ul>
        <div className="best__category__card__btn">
          <a href="/#">{a}</a>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>

      <div className="best__category__card__img">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default BestCategoryCard;
