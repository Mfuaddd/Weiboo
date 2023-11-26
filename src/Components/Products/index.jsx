import React from 'react'
import ProductsCards from '../ProductsCards'
import './index.scss'

const Products = () => {
  return (
    <section id='products'>
        <div className='products__header'>
            <div className="products__header_left">
            <h1>Featured Products</h1>
            </div>
            <div className="products__header_right">
            <p>All Products</p>
            <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <ProductsCards></ProductsCards>
    </section>
  )
}

export default Products