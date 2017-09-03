import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/user-set.scss'

export default class Setting extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const addressList = [
      { id: 1, content: '甘井子区山东路华西小区 204-1-18' },
    ]
    return (
      <div className='user-set'>
        <div className='header'>
          <span className='point-green' />
          <span>个人设置</span>
        </div>
        <div className='container'>
          <p className='title'>基础资料</p>
          <div className='list-two'>
            <p className='select-item' style={{ marginBottom: '.2rem' }}>
              <span className='select-item-title star-title'>*</span>
              <span className='select-item-title'>姓名</span>
              <input type='text' defaultValue='江河' />
            </p>
            <div className='select-item'>
              <span className='select-item-title star-title'>*</span>
              <span className='select-item-title'>性别</span>
              <ul className='selectes sex'>
                <li>男</li>
              </ul>
              <Icon type={ require('../../img/svg/arrow_down_09.svg') } size='xxs' />
            </div>
          </div>
          <div className='list-single'>
            <ul className='select-item' style={{ marginBottom: '.2rem' }}>
              <span className='select-item-title star-title'>*</span>
              <span className='select-item-title'>出生日期</span>
              <ul className='selectes year'>
                <li>1989年 8月 30日</li>
              </ul>
              <Icon type={ require('../../img/svg/arrow_down_09.svg') } size='xxs' />
              <Icon className='lion' type={ require('../../img/svg/leo.svg') } size='md' />
              <span>狮子座</span>
            </ul>
            <p className='select-item'>
              <span className='select-item-title star-title'>*</span>
              <span className='select-item-title'>身份证</span>
              <input type='text' defaultValue='210211******000000' />
            </p>
          </div>
        </div>
        <div className='container'>
          <p className='title'>收货地址</p>
          <div className='list-single'>
            <ul className='select-item'>
              {
                addressList.map((o, i) => (
                  <li key={ o.id }>
                    <span className='select-item-title' style={{ marginRight: '.15rem' }}>{ `收货地址${ i + 1 }：` }</span>
                    <p>{ o.content }</p>
                    <p className='right-text' style={{ color: '#eb253d' }}>删除</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <p className='add-container'>
            <Icon type={ require('../../img/svg/add_square.svg') } size='md' />
            <span>添加新收货地址</span>
          </p>
        </div>
        <div className='container'>
          <p className='title'>账户安全</p>
          <p className='select-item'>
            <span className='select-item-title star-title'>*</span>
            <span className='select-item-title'>密保手机</span>
            <input type='text' defaultValue='155****0000' />
            <span className='right-text'>修改</span>
          </p>
        </div>
        <div className='container'>
          <p className='title'>资金账户</p>
          <p className='select-item'>
            <span className='select-item-title star-title'>*</span>
            <span className='select-item-title'>银行卡</span>
            <input type='text' defaultValue='6222******20613888' />
            <img src={ require('../../img/gsbank.png') } alt='gsbank' className='gsbank' />
          </p>
          <p className='add-container'>
            <Icon type={ require('../../img/svg/add_square.svg') } size='md' />
            <span>添加一张新卡</span>
          </p>
        </div>
        <p className='fed-button' onClick={ () => hashHistory.push('/fed/user') }>保存返回</p>
      </div>
    )
  }
}
