import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import Loading from './loading'

import '../../styles/password/password.scss'

export default class PasswordItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordStatus: '按住发送口令',
    }
  }
  handleChangeStatus(time = 1500) {
    this.setState({ passwordStatus: '正在验证' })
    // console.log(time)
    setTimeout(() => this.setState({ passwordStatus: '验证成功' }), time)
    setTimeout(() => hashHistory.push('/main/vertification'), time + 500)
  }
  render() {
    const { passwordStatus } = this.state
    const business = getStore('currentBusiness', 'session') ? getStore('currentBusiness', 'session') : 'repast'
    const type = business === 'repast' ? 'voice' : 'text'
    const codeMoney = getStore('codeMoney', 'session')
    return (
      <div className='password-item'>
        <div className='header'>
          <img src={ require('../../img/password_item_1.png') } alt='password_item_1' />
          <p>{ type === 'voice' ? '语音口令' : '文字口令'}</p>
          <p>口令内容 “联邦雅思15周年校庆感恩回馈活动”</p>
        </div>
        {
          type === 'text' &&
          <div className='middle'>
            <input type='text' defaultValue='联邦雅思15周年校庆感恩回馈活动' />
            <p className='middle-button' onClick={ () => this.handleChangeStatus(0) }>验证</p>
          </div>
        }
        {
          type === 'voice' &&
          <div className='middle-voice' onClick={ () => this.handleChangeStatus() }>
            <div className='item-container'>
              {
                passwordStatus === '正在验证' ?
                  <Loading />
                  : <img src={ require('../../img/coupon_ui_1.png') } alt='按住发送口令' />
              }
              <span>{ passwordStatus }</span>
            </div>
          </div>
        }
        <div className='slogan'>
          <h1>{ `¥ ${ codeMoney }` }</h1>
          <p>{ type === 'voice' ? '识别成功即可自动获得学习基金' : '验证成功即可自动获得学习基金'}</p>
        </div>
      </div>
    )
  }
}
