import React from 'react'
import { getStore } from '@boluome/common-lib'

import OrderInfo from './order-info'

const ReserveInfo = () => {
  const reserveList = getStore('reserveList', 'session') ? getStore('reserveList', 'session') : []
  return (
    <OrderInfo title='预约信息' orderList={ reserveList } />
  )
}

export default ReserveInfo
