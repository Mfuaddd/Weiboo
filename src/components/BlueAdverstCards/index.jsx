import React from 'react'
import "./index.scss"
import BlueAdverstCard from '../BlueAdverstCard'
const BlueAdverstCards = () => {
  return (
    <div className="blue__adverts__cards">
        <BlueAdverstCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/1.png"/>
        <BlueAdverstCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/2.png" />
        <BlueAdverstCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/3.png" />
        <BlueAdverstCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/4.png" />
        <BlueAdverstCard img="https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/06/5.png" />
    </div>
  )
}

export default BlueAdverstCards