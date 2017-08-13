import React from 'react'
import { Icon } from 'antd-mobile'

import CouponItem from './promotion/coupon-item'

import '../styles/promotion.scss'

const Promotion = ({ promotions, filters, currenFilter, handleChangeFilter }) => {
  return (
    <div className='promotion'>
      <div className='common-header'>
        <div className='content'>
          <Icon type={ require('../img/svg/business_yhq.svg') } size='lg' />
          <span>优惠券（通用版）</span>
        </div>
      </div>
      <ul className='coupons'>
        <ul className='filter'>
          {
            filters.map(item => {
              const { attr } = item
              console.log('attr', attr, currenFilter, currenFilter === attr)
              return <li onClick={ item.attr !== currenFilter ? () => handleChangeFilter(item.attr) : '' } key={ item.name } style={ item.attr === currenFilter ? { color: '#ef461b' } : {} }>{ item.name }</li>
            })
          }
        </ul>
        {
          promotions.map(i => {
            return (
              <CouponItem key={ i.id } couponData={ i } />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Promotion
