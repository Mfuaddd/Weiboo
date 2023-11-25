import React from 'react'
import "./index.scss"

function Header() {
  return (
    <>
    <header className='.header'>
        <div className="header__top">
            <div className="header__container">
                <div className="header__top__left">
                    <p><i className='fa-solid fa-truck'></i>Free shipping for all orders of 150$</p>
                </div>
                <div className="header__top__right">
                    <ul >
                        <li className='header__top__right__after'>
                            <p><i className='fa-solid fa-shop'></i>Store Locator</p>
                        </li>
                        <li>
                            <p><i className='fa-solid fa-location-dot'></i>Track Order</p>
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
                    <input type="text" placeholder='Keyword here...'/>
                    <button>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <span>Search</span>
                    </button>
                </div>
                <div className="header__middle__center">
                    <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/logo-white-elec.png" alt="" />
                </div>
                <div className="header__middle__right">
                    <div className="header__middle__right__btns">
                        <button>
                            <span>English</span>
                            <i className='fa-solid fa-angle-down'></i>
                        </button>
                        <button>
                            <span>USD</span>
                            <i className='fa-solid fa-angle-down'></i>
                        </button>  
                    </div>
                    <div className="header__middle__right__icons">
                        <i className='fa-solid fa-cart-shopping'><sup>0</sup></i>
                        <i className='fa-regular fa-heart'></i>
                        <i className='fa-regular fa-user'></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="header__bottom">
            <div className="header__container">
            <div className="header__bottom__left">
                <i className='fa-solid fa-tag'></i>
                <div className="header__bottom__left__text">
                    <span>COUPON CODE</span>
                    <p>Weiboo 45%</p>
                </div>
            </div>
            <div className="header__bottom__center">
                <nav>
                    <ul className='header__bottom__center__navbar'>
                        <li className='header__bottom__center__navbar__home'>
                            <a href="/#">Home</a>
                        </li>
                        <li className='header__bottom__center__navbar__shop'>
                            <a href="/#">Shop</a>
                        </li>
                        <li className='header__bottom__center__navbar__pages'>
                            <a href="/#">Pages</a>
                        </li>
                        <li className='header__bottom__center__navbar__blog'>
                            <a href="/#">Blog</a>
                        </li>
                        <li className='header__bottom__center__navbar__contact'>
                            <a href="/#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='header__bottom__center__menu'>
                <i className='fa-solid fa-bars'></i>
            </div>
            <div className='header__bottom__right'>
                <div className="header__bottom__right__text">
                    <span>Get Support</span>
                    <p>info@webexample.com</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header