import React from 'react'
import { getStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import { List, Icon } from 'antd-mobile'

import '../../styles/business/business-center.scss'

const LItem = List.Item

const Center = () => {
  const business = getStore('business', 'session')
  return (
    <div className='business-center'>
      <ul className='header'>
        <li />
        <li>
          <p>USER_ID000</p>
          <p>
            LV10 &nbsp;
            <span className='lev-icon'><span /></span>
          </p>
          <p>再消费¥1900 即可升级</p>
        </li>
        <li><span>1900 </span>积分</li>
      </ul>

      <ul className='bottom'>
        {
          ['预约信息', '外卖订单'].map((o, i) => (
            <LItem extra='查看详细' key={ o } arrow='horizontal' onClick={ () => hashHistory.push(`/fed/business/${ business }/center/${ i === 0 ? 'reserveInfo' : 'waimaiInfo' }`) }>
              <div className='business-item'>
                <Icon type={ i === 1 ? require('../../img/svg/waimai_info_title.svg') : require('../../img/svg/reserve.svg') } size='md' />
                <span>{ o }</span>
              </div>
            </LItem>
          ))
        }
      </ul>
    </div>
  )
}

export default Center
