import React from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/my-app/my-app.scss'

const MyApp = () => {
  return (
    <div className='my-app'>
      <div className='header'>
        <img src={ require('../../img/my_app_hi.png') } alt='my-app' />
        <span>城市加油站</span>
      </div>
      <ul className='apps'>
        <li className='app-item'>
          <p><Icon type={ require('../../img/svg/my_app_index.svg') } size='lg' /></p>
          <p>来 &nbsp; 啦</p>
        </li>
      </ul>
    </div>
  )
}

export default MyApp
