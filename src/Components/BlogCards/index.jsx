import React from 'react'
import "./index.scss"
import BlogCard from '../BlogCard'
const BlogCards = () => {
  return (
    <div className="blog__cards">
        <BlogCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/blog-1-1-768x526.jpg" text="ONCE DETERMINED YOU NEED TO COME UP WITH A NAME" />
        <BlogCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/blog-2-1-768x527.jpg" text="LEGAL STRUCTURE, CAN MAKE PROFIT BUISNESS" />
        <BlogCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/blog-3-768x527.jpg" text="AT THE LIMIT, STATICALLY GENERATED, EDGE A FOOD" />
    </div>
  )
}

export default BlogCards