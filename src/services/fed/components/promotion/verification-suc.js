import React from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/promotion/verification-suc.scss'

const VerificationSuc = () => {
  const businessSlogan = { titleLeft: 'FEDU', titleRight: '联邦教育', content: '首次关注送¥ 1.00学习基金' }
  return (
    <div className='verification-suc'>
      <div className='header'>
        <Icon type={ require('../../img/svg/selected_ef.svg') } size='lg' />
        <p>宾果</p>
        <p>
          ¥
          <span> 4.39</span>
        </p>
        <p>联邦教育向您赠予学习基金</p>
      </div>
      <div className='slogan'>
        <h1>{ businessSlogan.titleLeft }<span>.</span>{ businessSlogan.titleRight }</h1>
        <p>{ businessSlogan.content }</p>
      </div>
      <p className='fed-button'>完成</p>
    </div>
  )
}

export default VerificationSuc
