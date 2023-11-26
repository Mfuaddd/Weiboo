import React from 'react'
import "./index.scss"

function Welcome() {
  return (
    <section id='welcome' className='welcome'>   
        <div className="welcome__top">
            <div className="welcome__container">
                <div className="welcome__top__left">
                    <div className="welcome__top__left__img">
                        <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/laptop.webp" alt="" />
                    </div>
                    <div className="welcome__top__left__text">
                            <p>Weekend Discount</p>
                            <h2>Big screens in <br/> incredibly slim <br/> designs...</h2>
                            <a href="/#">Shop Now <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="welcome__top__left__btns">
                        <i className="fa-solid fa-arrow-up"></i>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>                  
                </div>
                <div className="welcome__top__right">
                    <div className="welcome__top__right__first">
                        <div className="welcome__top__right__first__text">
                            <span>-45% Offer</span>
                            <h3>New <span>Smartfone</span></h3>
                            <p>Don't miss the last opportunity</p>
                        </div>
                        <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/iphone-13.webp" alt="" />
                    </div>
                    <div className="welcome__top__right__second">
                        <div className="welcome__top__right__second__text">
                            <span>Great Stores</span>
                            <h3>Call for up to 30% off!</h3>
                            <p>View Colections <i className="fa-solid fa-arrow-right-long"></i></p>
                        </div>
                        <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/headphone.webp" alt="" />
                    </div>
                    <div className="welcome__top__right__third">
                        <div className="welcome__top__right__third__text">
                            <span>SUPER DISCOUNT</span>
                            <h3>Home Speaker</h3>
                            <p>Shop Now <i className="fa-solid fa-arrow-right-long"></i></p>
                        </div>
                        <img src="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/speaker.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome