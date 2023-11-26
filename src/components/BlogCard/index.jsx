import React from 'react'
import "./index.scss"
const BlogCard = ({img,text}) => {
  return (
    <>
    <div className="blog__card">
      <div className="blog__card__img">
        <img src={img} alt="" />
        <span className="blog__card__img_date"><p>25</p><span>July</span></span>
      </div>
      <div className="blog__card_text">
        <div className="blog__card_text_content">
          <p>Winter Dress</p>
          <h3>{text}</h3>
          <div className="blog__card_text_content_footer">
            <div className="blog__card_text_content_footer_img">
              <img src="https://secure.gravatar.com/avatar/a6ece554da6d5395d6720406403e3951?s=51&d=mm&r=g" alt="" />
            </div>
            <div className="blog__card_text_content_footer_text">
              <p>reacthemes</p>
              <span>Author</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCard