import React, { Component } from 'react'
import { setStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/user.scss'

import { getTotalPrice } from '../../actions/app'

export default class UserCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0,
    }
    this.getTotalPrice = this.getTotalPrice.bind(this)
  }
  componentWillMount() {
    getTotalPrice(this.getTotalPrice)
  }
  getTotalPrice(id, money) {
    console.log('getTotalPrice', id, money)
    this.setState({ money })
    setStore('totalPrice', money, 'session')
  }
  render() {
    const { money } = this.state
    return (
      <div className='user'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <div className='container'>
          <div className='top'>
            <h1>
              <span className='point-green' />
              <span>学习基金</span>
            </h1>
            <p>¥<span>{ money }</span></p>
            <p>
              <span onClick={ () => hashHistory.push('/user/withdraw') }>提现</span>
              <span onClick={ () => hashHistory.push('/user/receiveMoney') }>9.91元可领取</span>
            </p>
            <p className='detail' onClick={ () => hashHistory.push('/user/priceList') }><Icon type={ require('../../img/svg/detail_09.svg') } size='xxs' /><span>明细</span></p>
          </div>
          <div className='my-item' onClick={ () => hashHistory.push('/user/contribution') }>
            <span className='point-green' />
            <span>我的贡献</span>
            <span className='tips no-read'>未读</span>
          </div>
          <div className='my-item' onClick={ () => hashHistory.push('/knowledge') }>
            <span className='point-green' />
            <span>我的知识库</span>
          </div>
          <div className='my-item' onClick={ () => hashHistory.push('/?achieve') }>
            <span className='point-green' />
            <span>我的成就</span>
            <span className='tips num'>13/90</span>
          </div>
          <div className='my-item' onClick={ () => hashHistory.push('/myApps') }>
            <span className='point-green' />
            <span>我的应用</span>
            <span className='tips new-tips'>新提醒</span>
          </div>
          <div className='my-item' onClick={ () => hashHistory.push('/user/setting') }>
            <span className='point-green' />
            <span>个人设置</span>
          </div>
        </div>
      </div>
    )
  }
}
