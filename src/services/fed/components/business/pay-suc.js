import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/business/pay-suc.scss'

const PaySuc = () => {
  const price = getStore('totalPrice', 'session')
  const business = getStore('currentBusiness', 'session')
  return (
    <div className='pay-suc'>
      <div className='common-header'>
        <div className='content'>
          <Icon type={ require('../../img/svg/business_yhq.svg') } size='lg' />
          <span>预约服务（餐饮版）</span>
        </div>
      </div>
      <div className='container'>
        <p>
          <Icon type={ require('../../img/svg/selected.svg') } size='md' />
          <span>支付成功</span>
        </p>
        <p>¥<span>{ price }</span></p>
        <p onClick={ () => hashHistory.push(`/business/${ business }/center/waimaiInfo`) }>查看订单</p>
      </div>
      <p className='fed-button' onClick={ () => hashHistory.push(`/business/${ business }`) }>返回商家</p>
    </div>
  )
}

export default PaySuc
