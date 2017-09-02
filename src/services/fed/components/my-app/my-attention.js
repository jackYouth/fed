import React from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/my-app/my-app.scss'

const MyAttention = () => {
  const apps = [{ name: '奔腾汽车', url: require('../../img/apps_1.png'), hasCoupon: true }, { name: '中国石油', url: require('../../img/apps_2.png') }, { name: '联邦教育', url: require('../../img/apps_3.png') }, { name: '华晨影城', url: require('../../img/apps_4.png') }, { name: '安吉印象', url: require('../../img/apps_5.png'), hasCoupon: true }]

  return (
    <div className='my-attention'>
      <div className='header'>
        <Icon type={ require('../../img/svg/my_app_index.svg') } size='md' />
        <span>来 啦</span>
      </div>
      <div className='middle'>
        <p><span /></p>
        <p>我关注的企业</p>
        <p>
          <span>搜索企业</span>
          <Icon type={ require('../../img/svg/search.svg') } size='xxs' />
        </p>
      </div>
      <div className='bottom'>
        <ul className='selectes'>
          {
            ['经常使用', '按添加顺序', '按热门顺序'].map((o, i) => (
              <li key={ o }>
                <Icon type={ i === 0 ? require('../../img/svg/arrow_up.svg') : require('../../img/svg/arrow_down.svg') } size='xxs' />
                <span>{ o }</span>
              </li>
            ))
          }
        </ul>
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

export default MyAttention
