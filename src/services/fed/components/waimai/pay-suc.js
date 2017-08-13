import React from 'react'
import { parseQuery } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/waimai/pay-suc.scss'

const PaySuc = () => {
  const price = parseQuery(location.search).price
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
        <p>查看订单</p>
      </div>
      <p className='fed-button'>返回商家</p>
    </div>
  )
}

export default PaySuc
