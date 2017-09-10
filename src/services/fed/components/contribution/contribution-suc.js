import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/contribution/contribution-suc.scss'

export default class ContributionSuc extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className='contribution-suc'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <Icon type={ require('../../img/svg/selected_green.svg') } size='lg' />
        <p>提交成功</p>
        <p>您提交的知识我们已经收到了，它将在3个工作日内得到审验，结果将在您的个人中心中得到反馈</p>
        <p className='fed-button' onClick={ () => hashHistory.push('') }>返回首页</p>
      </div>
    )
  }
}
