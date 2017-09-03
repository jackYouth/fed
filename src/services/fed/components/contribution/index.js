import React, { Component } from 'react'
import { Icon, TextareaItem } from 'antd-mobile'
import { createForm } from 'rc-form'
import { hashHistory } from 'react-router'

import '../../styles/contribution/contribution.scss'

class Contribution extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const list = [
      { title: '选择主知识库', feature: '创建知识库' },
      { title: '选择知识库分类', feature: '创 建 分 类' },
    ]
    const { getFieldProps } = this.props.form
    return (
      <div className='contribution'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <div className='container'>
          <p>完善/创建知识库</p>
          <p>
            <span className='point-green' />
            <span>对知识库的内容贡献我们会给予充分的奖励，您的贡献将永远在这里得到展现。</span>
          </p>
          <p>
            <span className='point-green' />
            <span>无论是否采纳您的内容，我们都会积极的在您的个人中心进行反馈。</span>
          </p>
          {
            list.map(o => (
              <p key={ o.title }>
                <Icon type={ require('../../img/svg/arrow_down_09.svg') } size='xs' />
                <span>{ o.title }</span>
                <span>{ o.feature }</span>
              </p>
            ))
          }
          <TextareaItem
            {
              ...getFieldProps('count', {})
            }
            rows={ 12 }
            count={ 400 }
            placeholder='请为该库创建第一条知识，我们采纳后会为您丰富它，如果您愿意与我们一同完成它，我们会非常积极的与您共同完成。'
          />
        </div>
        <p className='fed-button' onClick={ () => hashHistory.push('/fed/contribution/suc') }>提交到知识库</p>
      </div>
    )
  }
}

export default createForm()(Contribution)
