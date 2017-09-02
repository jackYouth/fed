import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/user-center/user-center.scss'

export default class UserCenter extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className='user-center'>
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
            <p>¥<span>88.88</span></p>
            <p><span>提现</span><span>9.91元可领取</span></p>
            <p className='detail'><Icon type={ require('../../img/svg/detail_09.svg') } size='xxs' /><span>明细</span></p>
          </div>
          <div className='my-item'>
            <span className='point-green' />
            <span>我的贡献</span>
            <span className='tips no-read'>未读</span>
          </div>
          <div className='my-item'>
            <span className='point-green' />
            <span>我的我的知识库</span>
          </div>
          <div className='my-item'>
            <span className='point-green' />
            <span>我的成就</span>
            <span className='tips num'>13/90</span>
          </div>
          <div className='my-item'>
            <span className='point-green' />
            <span>我的应用</span>
            <span className='tips new-tips'>新提醒</span>
          </div>
        </div>
      </div>
    )
  }
}
