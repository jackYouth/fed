import React from 'react'
import { hashHistory } from 'react-router'

import '../../styles/user/not-receive.scss'

const ReceiveMoney = () => {
  const priceList = [
    { id: '1', price: '2.68' },
    { id: '2', price: '1.68' },
    { id: '3', price: '0.68' },
    { id: '4', price: '3.68' },
  ]
  return (
    <div className='not-receive'>
      <div className='header'>
        <span className='point-green' />
        <p>尚未领取的学习基金</p>
      </div>
      <ul className='receive-list'>
        {
          priceList.map(o => (
            <li key={ o.id }>
              <img src={ require('../../img/waimai_log1.png') } alt='business_log1' />
              <p>{ `${ o.price }元可领取` }</p>
            </li>
          ))
        }
      </ul>
      <p className='fed-button' onClick={ () => hashHistory.push('/?tab4') }>返回个人中心</p>
    </div>
  )
}

export default ReceiveMoney
