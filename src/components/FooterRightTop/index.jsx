import React from 'react'
import "./index.scss";
const FooterRightTop = () => {
  return (
    <div className="footerrighttop">
      <div className="footerrighttop_about">
        <h2>About Us</h2>
        <p>Elegant pink origami design three type of dimensional view and decoration co Great for adding a decorative touch to any room’s decor.</p>
        <a href="/#"><span>Get In Touch <i className="fa-solid fa-arrow-right"></i></span></a>
      </div>
      <div className="footerrighttop_information">
        <h2>Information</h2>
        <ul>
          <li><a href="/#">About</a></li>
          <li><a href="/#">FAQ’s</a></li>
          <li><a href="/#">Wishlist</a></li>
          <li><a href="/#">Cart</a></li>
          <li><a href="/#">Checkout</a></li>
        </ul>
      </div>
      <div className="footerrighttop_account">
        <h2>My Account</h2>
        <ul>
          <li><a href="/#">Wishlist</a></li>
          <li><a href="/#">Cart</a></li>
          <li><a href="/#">Checkout</a></li>
          <li><a href="/#">My account</a></li>
          <li><a href="/#">Shop</a></li>
        </ul>
      </div>
      <div className="footerrighttop_mail">
        <h2>Get Newsletter</h2>
        <p>Get 10% off your first order! Hurry up</p>
        <form action="">
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default FooterRightTop