import React, { Component } from 'react'
import { setStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/my-app/my-app.scss'

export default class MyAttention extends Component {
  handleToBusiness(i) {
    if (i === 2) {
      setStore('currentBusiness', 'education', 'session')
      hashHistory.push('/business/education')
    }
    if (i === 4) {
      setStore('currentBusiness', 'repast', 'session')
      hashHistory.push('/business/repast')
    }
  }
  render() {
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
          <p onClick={ () => hashHistory.push('/myApps/search') }>
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
              apps.map((o, i) => (
                <li key={ o.name } className='app-item' onClick={ () => this.handleToBusiness(i) }>
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
        <p className='fed-button' onClick={ () => hashHistory.push('') }>返回首页</p>
      </div>
    )
  }
}
