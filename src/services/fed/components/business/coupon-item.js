import React from 'react'
import { Mask } from '@boluome/oto_saas_web_app_component'
import { Icon } from 'antd-mobile'

const CouponItem = ({ couponData }) => {
  const { price, title, content, expired, status } = couponData
  // , isQp
  let bg = require('../../img/coupon_red.png')
  let text = '领取'
  let bgColor = '#ef461b'
  if (status === 'has') {
    bg = require('../../img/coupon_blue.png')
    text = '使用'
    bgColor = '#08b5ff'
  }
  if (status === 'expired') {
    bg = require('../../img/coupon_grey.png')
    text = '过期'
    bgColor = '#9b9b9b'
  }
  if (status === 'used') {
    bg = require('../../img/coupon_black.png')
    text = '已用'
    bgColor = '#4a4a4a'
  }
  return (
    <li className='coupon-item' onClick={ () => { if (status === 'has') Mask(<UsePromotion { ...{ price } } />) } }>
      <div className='left' style={{ background: `url(${ bg }) repeat-y` }}>
        ¥
        <span>{ price }</span>
      </div>
      <div className='right'>
        <p>{ title }</p>
        <p>{ content }</p>
        <p>
          { `有效期：${ expired }` }
          <span style={{ background: `${ bgColor }` }}>{ text }</span>
        </p>
      </div>
    </li>
  )
}

// {
//   isQp &&
//   <span style={{ borderColor: `${ bgColor }`, color: `${ bgColor }` }}>取票专享</span>
// }

export default CouponItem

const UsePromotion = ({ price, handleContainerClose }) => {
  return (
    <div className='use-promotion'>
      <p>使用优惠券</p>
      <p>
        ¥
        <span>{ price }</span>
        ／低值
      </p>
      <p>使用方法:在结账时向商家提供下方二维码商家扫码后即可完成对账单的抵现.</p>
      <img src={ require('../../img/code.png') } alt='code' />
      <p onClick={ handleContainerClose }><Icon type={ require('../../img/svg/close.svg') } size='md' /></p>
    </div>
  )
}
