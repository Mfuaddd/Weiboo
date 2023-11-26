import React from 'react'
import ProductsCard from '../ProductsCard'
import './index.scss'

const ProductsCards = () => {
  return (
    <div className='productscards'>
        <ProductsCard img='https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/7-3.webp' text1='Gaming,' text2='Monitor,' text3='Office,' text4='TV,' text5='Ultra Wide' name='Monitor' price='$400.00'></ProductsCard>
        <ProductsCard img='https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/4-3.webp' text1='Gaming,' text2='Office,' text3='Sport Watches,' text4='TV' name='Hard Disk' price='$3,600.00'></ProductsCard>
        <ProductsCard img='https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/5-3.webp' text1='Accessories,' text2='Sport Watches,' text3='TV' name='Small Cooling Fan' price='$3,060.00'></ProductsCard>
        <ProductsCard img='https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/9-3.webp' text1='Gaming,' text2='Office,' text3='TV' name='HP Moitor' price='$3,000.00'></ProductsCard>
        <ProductsCard img='https://reactheme.com/products/wordpress/weiboo/wp-content/uploads/2022/07/7-3.webp' text1='Gaming,' text2='Monitor,' text3='Office,' text4='TV,' text5='Ultra Wide' name='Monitor' price='$400.00'></ProductsCard>

    </div>
  )
}

export default ProductsCards