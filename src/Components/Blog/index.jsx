import React from 'react'
import "./index.scss"
import BlogCards from '../BlogCards'
const Blog = () => {
  return (
    <section id="blog">
    <div className="blog__header">
        <div className="blog__header__right" >
            <h3>Blog & Insights</h3>
        </div>
        <div className="blog__header__left">
            <a href="/#"><span>Other Category  <i className="fa-solid fa-arrow-right"></i></span></a>
        </div>
    </div>
    <BlogCards/>
    </section>
  )
}

export default Blog