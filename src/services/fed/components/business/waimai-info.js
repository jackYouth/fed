import React from 'react'
import { getStore } from '@boluome/common-lib'

import OrderInfo from './order-info'

const businessInfo = () => {
  const businessInfoList = getStore('businessInfoList', 'session') ? getStore('businessInfoList', 'session') : []
  return (
    <OrderInfo title='外卖订单' orderList={ businessInfoList } isWaimai={ 1 } />
  )
}

export default businessInfo
