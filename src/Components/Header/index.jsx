import React from "react";
import "./index.scss";

function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="header__top">
          <div className="header__container">
            <div className="header__top__left">
              <p>
                <i className="fa-solid fa-truck"></i>Free shipping for all
                orders of 150$
              </p>
            </div>
            <div className="header__top__right">
              <ul>
                <li className="header__top__right__after">
                  <p>
                    <i className="fa-solid fa-shop"></i>Store Locator
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Track Order
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header__middle">
          <div className="header__container">
            <div className="header__middle__left">
              <select name="categories" id="categories">
                <option value="categories">Categories</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <input type="text" placeholder="Keyword here..." />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
              </button>
            </div>
            <div className="header__middle__center">
              <img
                src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/logo-white-elec.png"
                alt=""
              />
            </div>
            <div className="header__middle__right">
              <div className="header__middle__right__btns">
                <select name="language" id="language">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <select name="currency" id="currency">
                  <option value="usd">USD</option>
                  <option value="euro">Euro</option>
                  <option value="gbp">GBP</option>
                </select>
              </div>
              <div className="header__middle__right__icons">
                <i className="fa-solid fa-cart-shopping">
                  <sup>0</sup>
                </i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header__bottom">
        <div className="header__container">
          <div className="header__bottom__left">
            <i className="fa-solid fa-tag"></i>
            <div className="header__bottom__left__text">
              <span>COUPON CODE</span>
              <p>Weiboo 45%</p>
            </div>
          </div>
          <div className="header__bottom__center">
            <nav>
              <ul className="header__bottom__center__navbar">
                <li className="header__bottom__center__navbar__home">
                  <span>Home</span>
                  <ul className="header__bottom__center__navbar__menu">
                    <li>
                      <a href="/#">Main Home</a>
                    </li>
                    <li>
                      <a href="/#">Fashion Home</a>
                    </li>
                    <li>
                      <a href="/#">Fashion Home 2</a>
                    </li>
                    <li>
                      <a href="/#">Furniture Home</a>
                    </li>
                    <li>
                      <a href="/#">Decor Home</a>
                    </li>
                    <li>
                      <a href="/#">Electronics Home</a>
                    </li>
                    <li>
                      <a href="/#">Glocery Home</a>
                    </li>
                    <li>
                      <a href="/#">Footwear Home</a>
                    </li>
                    <li>
                      <a href="/#">Gaming Home</a>
                    </li>
                  </ul>
                </li>
                <li className="header__bottom__center__navbar__shop">
                  <span>Shop</span>
                  <ul className="header__bottom__center__navbar__shop__menu">
                    <ul>
                      <li>
                        <a href="/#">Shop</a>
                      </li>
                      <li>
                        <a href="/#">Left Slider Shop</a>
                      </li>
                      <li>
                        <a href="/#">Right Slider Shop</a>
                      </li>
                      <li>
                        <a href="/#">Full Width Shop</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/#">Product Layout One</a>
                      </li>
                      <li>
                        <a href="/#">Product Layout Two</a>
                      </li>
                      <li>
                        <a href="/#">Product Layout Three</a>
                      </li>
                      <li>
                        <a href="/#">Variable Product</a>
                      </li>
                      <li>
                        <a href="/#">Grouped Product</a>
                      </li>
                      <li>
                        <a href="/#">Affiliate Product</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/#">Cart</a>
                      </li>
                      <li>
                        <a href="/#">Checkout</a>
                      </li>
                      <li>
                        <a href="/#">My account</a>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className="header__bottom__center__navbar__pages">
                  <span>Pages</span>
                  <ul className="header__bottom__center__navbar__menu">
                    <li>
                      <a href="/#">About</a>
                    </li>
                    <li>
                      <a href="/#">FAQ's</a>
                    </li>
                    <li>
                      <a href="/#">Error 404</a>
                    </li>
                    <li>
                      <a href="/#">Search Result</a>
                    </li>
                  </ul>
                </li>
                <li className="header__bottom__center__navbar__blog">
                  <span>Blog</span>
                  <ul className="header__bottom__center__navbar__menu">
                    <li>
                      <a href="/#">Blog</a>
                    </li>
                    <li>
                      <a href="/#">Blog Grid</a>
                    </li>
                    <li>
                      <a href="/#">Blog Grid Style 2</a>
                    </li>
                    <li>
                      <a href="/#">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="header__bottom__center__navbar__contact">
                  <span>Contact</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__bottom__center__menu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="header__bottom__right">
            <div className="header__bottom__right__text">
              <span>Get Support</span>
              <p>info@webexample.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
