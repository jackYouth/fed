import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/withdraw.scss'

import { updateTotalPrice } from '../../actions/app'

export default class Withdraw extends Component {
  handleWithdraw() {
    updateTotalPrice(0, this.updateTotalPrice)
  }
  updateTotalPrice() {
    hashHistory.push('/user/withdrawSuc')
  }
  render() {
    const totalPrice = getStore('totalPrice', 'session')
    console.log('totalPrice', totalPrice)
    return (
      <div className='withdraw'>
        <p className='fed-button'>提现至银行卡</p>
        <div className='container'>
          <p>
            <Icon type={ require('../../img/svg/safe_09.svg') } size='lg' />
            <span>FED云付</span>
          </p>
          <p>EO云支付安全环境已开启</p>
          <input className='ipt' type='text' placeholder='输入提现金额' />
          <p>
            <Icon type={ require('../../img/svg/gsbank.svg') } size='xxs' />
            <span>已选银行卡 尾号**3823</span>
            <Icon type={ require('../../img/svg/arrow_down_09.svg') } size='xxs' />
          </p>
          <p><span>可提现金额</span> <span>{ totalPrice }</span></p>
        </div>
        <p className='fed-button' onClick={ () => hashHistory.push('/?tab4') }>返回个人中心</p>
        <p className='fed-button' onClick={ () => this.handleWithdraw() }>提现至银行卡</p>
      </div>
    )
  }
}
