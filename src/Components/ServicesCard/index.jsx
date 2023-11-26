import React from 'react'
import './index.scss'

const ServicesCard = ({icon,text}) => {
  return (
    <div className='servicescard'>
       <div className="servicescard__container">
       <div className="servicescard__container__left">
        <i className={icon}></i>
        </div>
        <div className="servicescard__container__right">
          <p className='servicescard__container__right_header'>{text}</p>
          <p className='servicescard__container__right_descript'>Orders are shipped seamlessly between countries</p>
        </div>
       </div>
    </div>
  )
}

export default ServicesCard