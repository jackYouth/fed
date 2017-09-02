import React from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/my-app/my-app.scss'

const BussinessSearch = () => {
  const apps = [{ name: '奔腾汽车', url: require('../../img/apps_1.png') }, { name: '中国石油', url: require('../../img/apps_2.png') }, { name: '联邦教育', url: require('../../img/apps_3.png') }, { name: '华晨影城', url: require('../../img/apps_4.png') }, { name: '安吉印象', url: require('../../img/apps_5.png') }]

  return (
    <div className='my-attention bussiness-search'>
      <div className='header'>
        <h1 className='title'>FED SYN</h1>
        <div className='search'>
          <input type='text' placeholder='搜索企业 支持模糊查询 如：英语学校' />
          <p><Icon type={ require('../../img/svg/search.svg') } size='md' /></p>
        </div>
      </div>
      <div className='middle'>
        <p><span /></p>
        <p>您的生活需要他它们</p>
      </div>
      <div className='bottom'>
        <ul className='apps'>
          {
            apps.map(o => (
              <li key={ o.name } className='app-item'>
                <p><img src={ o.url } alt={ o.name } /></p>
                <p>{ o.name }</p>
                {
                  o.hasCoupon &&
                  <p>红包</p>
                }
              </li>
            ))
          }
        </ul>
      </div>
      <p className='fed-button'>返回首页</p>
    </div>
  )
}

export default BussinessSearch
