import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/withdraw.scss'

export default class Withdraw extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
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
          <p><span>可提现金额</span> <span>88.88</span></p>
        </div>
        <p className='fed-button' onClick={ () => hashHistory.push('/user') }>返回个人中心</p>
        <p className='fed-button' onClick={ () => hashHistory.push('/user/withdrawSuc') }>提现至银行卡</p>
      </div>
    )
  }
}
