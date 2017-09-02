import React from 'react'

import '../../styles/promotion/password.scss'

const PasswordItem = ({ attr }) => {
  return (
    <div className='password-item'>
      <div className='header'>
        <img src={ require('../../img/password_item_1.png') } alt='password_item_1' />
        <p>文字口令</p>
        <p>口令内容 “联邦雅思15周年校庆感恩回馈活动”</p>
      </div>
      {
        attr === 'text' &&
        <div className='middle'>
          <p>联邦雅思15周年校庆感恩回馈活动</p>
          <p className='middle-button'>验证</p>
        </div>
      }
      {
        attr === 'voice' &&
        <div className='middle-voice'>
          <div className='item-container'>
            <img src={ require('../../img/coupon_ui_1.png') } alt='按住发送口令' />
            <span>按住发送口令</span>
          </div>
        </div>
      }
      <div className='slogan'>
        <h1>¥ 4.39</h1>
        <p>{ attr === 'voice' ? '识别成功即可自动获得学习基金' : '验证成功即可自动获得学习基金'}</p>
      </div>
      <p className='fed-button'>返回</p>
    </div>
  )
}

export default PasswordItem
