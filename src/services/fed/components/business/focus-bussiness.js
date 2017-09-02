import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon, WhiteSpace } from 'antd-mobile'

import '../../styles/business/focus-bussiness.scss'

const FocusBussiness = () => {
  const businessActivities = [
    '关注9种抵值券可领 折扣价值¥3999',
    '订坐、外卖、折扣、活动等9种功能可用',
    '预订餐服务已开通，预支付订单总价40%',
    '会员中心服务可用，消费任意金额即可成为“Level 1”会员',
  ]
  const featureDatas = [
    { title: 'wifi', icon: require('../../img/svg/feature_1.svg') },
    { title: '停车场', icon: require('../../img/svg/feature_2.svg') },
    { title: '38包间', icon: require('../../img/svg/feature_3.svg') },
    { title: '婚礼宴请', icon: require('../../img/svg/feature_4.svg') },
    { title: '私厨', icon: require('../../img/svg/feature_5.svg') },
    { title: '会议接待', icon: require('../../img/svg/feature_6.svg') },
  ]
  const businessSlogan = { titleLeft: '安吉印象', titleRight: '精致土菜专营店', content: '首次关注送¥1.00学习基金' }
  const currentBusiness = getStore('currentBusiness', 'session')
  return (
    <div className='focus-bussiness'>
      <div className='header' />
      <WhiteSpace size='md' />
      <ul className='activities'>
        {
          businessActivities.map(o => (
            <li key={ o }>
              <Icon type={ require('../../img/svg/selected_green.svg') } size='xxs' />
              <span>{ o }</span>
            </li>
          ))
        }
      </ul>
      <div className='feature-service'>
        <div className='s_title'>
          <p />
          <h1>特色服务</h1>
        </div>
        <ul>
          {
            featureDatas.map(o => (
              <li key={ o.title }>
                <Icon type={ o.icon } size='lg' />
                <p>{ o.title }</p>
              </li>
            ))
          }
        </ul>
        <div className='slogan'>
          <h1>{ businessSlogan.titleLeft }<span>.</span>{ businessSlogan.titleRight }</h1>
          <p>{ businessSlogan.content }</p>
        </div>
      </div>
      <p className='fed-button'>{ `关注${ currentBusiness }` }</p>
    </div>
  )
}

export default FocusBussiness
