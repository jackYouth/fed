import React, { Component } from 'react'
// import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/price-detail.scss'

export default class PriceList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <ul className='pay-detail'>
        <li className='header'>
          <span className='point-green' />
          <span>详情</span>
        </li>
        <li className='container'>
          <p className='container-title'>打印奖励</p>
          <p className='income'>收入</p>
          <div className='price'>¥ <p>3.23<span /></p></div>
          <p className='text tag'>该收入由联邦教育为您提供</p>
          <div className='container-info'>
            <p className='text'>流水号: 2102111989099931239</p>
            <p className='text'>设备号: 0411-ZS-090</p>
            <p className='text'>企业码: FEDIELTS</p>
            <p className='text'>准状态: 已结算</p>
          </div>
          <div className='container-bottom'>
            <img className='lianbang-logo' src={ require('../../img/lianbang_logo.png') } alt='lianbang_logo' />
            <p>进入联邦教育</p>
          </div>
        </li>
        <p className='fed-button' onClick={ () => hashHistory.push('/fed/user/priceList') }>返回资金明细</p>
      </ul>
    )
  }
}
