import React from "react";
import "./index.scss";
const ProductsCard = ({
  img,
  text1,
  text2,
  text3,
  text4,
  text5,
  name,
  price,
}) => {
  return (
    <div className="productscard">
      <div className="productscard__img">
        <img src={img} alt="" />
      </div>
      <div className="productscard__info">
        <div className="productscard__info_category">
          <a href="\#">{text1}</a>
          <a href="\#">{text2}</a>
          <a href="\#">{text3}</a>
          <a href="\#">{text4}</a>
          <a href="\#">{text5}</a>
        </div>
        <p className="productscard__info_name">{name}</p>
        <div className="productscard__info_price">
          <ul>
            <li>{price}</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>Add to Card
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
