import React from 'react'

import '../../styles/user-center/not-receive.scss'

const NotReceive = () => {
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
              <img src={ require('../../img/business_log1.png') } alt='business_log1' />
              <p>{ `${ o.price }元可领取` }</p>
            </li>
          ))
        }
      </ul>
      <p className='fed-button'>返回个人中心</p>
    </div>
  )
}

export default NotReceive
