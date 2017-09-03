import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'


import '../../styles/business/pay-info.scss'

const Pay = () => {
  // const businessInfoList = getStore('businessInfoList', 'session') ? getStore('businessInfoList', 'session') : []
  const price = getStore('orderPrice', 'session')
  const orderInfo = [
    { name: '商家名称', describle: '安吉印象（港汇中心点）', icon: require('../../img/svg/business_icon.svg') },
    { name: '水单编号', describle: 'DLZS2017072088194749', icon: require('../../img/svg/order_70.svg') },
    { name: '配送内容', describle: '宫保鸡丁(微辣) * 1份 ¥98）', icon: require('../../img/svg/waimai_info_70.svg') },
    { name: '配送时间', describle: '立即(预计到达时间10:00)', icon: require('../../img/svg/time_70.svg') },
    { name: '备   注', describle: '3人餐具 别放花椒 多加米饭', icon: require('../../img/svg/tips_70.svg') },
  ]
  return (
    <div className='pay-info'>
      <div className='common-header'>
        <div className='content'>
          <Icon type={ require('../../img/svg/safe.svg') } size='lg' />
          <span>FED云付</span>
        </div>
      </div>
      <ul className='container'>
        <li>
          <div className='div-container'>
            <p>
              <Icon type={ require('../../img/svg/price.svg') } size='md' />
              <span>外卖结账单</span>
            </p>
          </div>
        </li>
        <li>
          <div className='div-container'>
            {
              orderInfo.map(o => (
                <div className='info-item' key={ o.name }>
                  <Icon type={ o.icon } size='xxs' />
                  <span>{ `${ o.name }: ${ o.describle }` }</span>
                </div>
              ))
            }
          </div>
        </li>
        <li>
          <p>
            <Icon type={ require('../../img/svg/shalou.svg') } size='xs' />
            <span>待支付总额：</span>
          </p>
          <p>
            ¥
            <span>{ price }</span>
          </p>
        </li>
      </ul>
      <div className='pay-style'>
        <div className='pay-style-container'>
          <Icon type={ require('../../img/svg/pay_style.svg') } size='md' />
          <span>余额支付（剩余198.68)</span>
          <span>支付方式</span>
          <Icon type={ require('../../img/svg/arrow_down.svg') } size='xxs' />
        </div>
      </div>
      <p className='fed-button' onClick={ () => hashHistory.push(`/fed/business/${ getStore('business', 'session') }/waimai/paySuc`) }>立即支付</p>
    </div>
  )
}

export default Pay
