import React from 'react'
import ServicesCard from '../ServicesCard'
import './index.scss'

const ServicesCards = () => {
  return (
    <div className='servicescards'>
        <ServicesCard icon='fa-solid fa-shield-halved' text='International Shipment'></ServicesCard>
        <ServicesCard icon='fa-solid fa-cart-flatbed-suitcase' text='Online Support 24/7'></ServicesCard>
        <ServicesCard icon='fa-solid fa-rotate-left' text='Money Return'></ServicesCard>
        <ServicesCard icon='fa-solid fa-bag-shopping' text='Member Discount'></ServicesCard>
    </div>
  )
}

export default ServicesCards