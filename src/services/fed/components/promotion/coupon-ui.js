import React from 'react'

import '../../styles/promotion/coupon-ui.scss'

const CouponUi = () => {
  const coupons = [
    { name: '按住发送口令', url: require('../../img/coupon_ui_1.png') },
    { name: '正在验证', url: require('../../img/coupon_ui_1.png') },
    { name: '', url: require('../../img/coupon_ui_2.png') },
  ]
  return (
    <ul className='coupon-ui'>
      {
        coupons.map(o => (
          <li key={ o.name }>
            <div className='item-container'>
              <img src={ o.url } alt={ o.name } />
              <span>{ o.name }</span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default CouponUi
