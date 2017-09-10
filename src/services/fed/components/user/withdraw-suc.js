import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/withdraw-suc.scss'

export default class WithdrawSuc extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className='withdraw-suc'>
        <Icon type={ require('../../img/svg/selected_green.svg') } size='lg' />
        <p>提现成功 预计2小时内到账</p>
        <p className='fed-button' onClick={ () => hashHistory.push('/user') }>返回个人中心</p>
      </div>
    )
  }
}
