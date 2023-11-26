import React from "react";
import ProductsCard from "../ProductsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsCards = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="productscards">
      <Slider {...settings}>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/7-3.webp"
            text1="Gaming,"
            text2="Monitor,"
            text3="Office,"
            text4="TV,"
            text5="Ultra Wide"
            name="Monitor"
            price="$400.00"
          ></ProductsCard>
        </div>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/4-3.webp"
            text1="Gaming,"
            text2="Office,"
            text3="Sport Watches,"
            text4="TV"
            name="Hard Disk"
            price="$3,600.00"
          ></ProductsCard>
        </div>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/5-3.webp"
            text1="Accessories,"
            text2="Sport Watches,"
            text3="TV"
            name="Small Cooling Fan"
            price="$3,060.00"
          ></ProductsCard>
        </div>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/9-3.webp"
            text1="Gaming,"
            text2="Office,"
            text3="TV"
            name="HP Moitor"
            price="$3,000.00"
          ></ProductsCard>
        </div>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/7-3.webp"
            text1="Gaming,"
            text2="Monitor,"
            text3="Office,"
            text4="TV,"
            text5="Ultra Wide"
            name="Monitor"
            price="$400.00"
          ></ProductsCard>
        </div>
        <div>
          <ProductsCard
            img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/4-3.webp"
            text1="Gaming,"
            text2="Office,"
            text3="Sport Watches,"
            text4="TV"
            name="Hard Disk"
            price="$3,600.00"
          ></ProductsCard>
        </div>
      </Slider>
    </div>
  );
};

export default ProductsCards;
