import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/business/reserve-suc.scss'

const ReserveSuc = () => {
  const business = getStore('currentBusiness', 'session')
  const isEducation = business === 'education'
  return (
    <div className='reserve-suc'>
      <div className={ isEducation ? 'education-bg common-header' : 'common-header' }>
        <div className='content'>
          <Icon type={ require('../../img/svg/reserve_white.svg') } size='lg' />
          <span>预约服务（餐饮版）</span>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='top'>
            <Icon type={ isEducation ? require('../../img/svg/selected_0b.svg') : require('../../img/svg/selected.svg') } size='md' />
            <span>预约成功</span>
          </div>
          <div className='bottom'>
          我们已经收到了您的预约信息在接下来会为您安排好公开课时间
          </div>
        </div>
      </div>
      <p className={ isEducation ? 'education-bg fed-button' : 'fed-button' } onClick={ () => hashHistory.push(`/fed/business/${ business }`) }>返回商家</p>
    </div>
  )
}

export default ReserveSuc
