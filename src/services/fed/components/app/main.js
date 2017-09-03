import React, { Component } from 'react'
import { Icon, Toast } from 'antd-mobile'
import { get, getStore, setStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import '../../styles/home.scss'

export default class Main extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  handleProduceCode() {
    window.codeTimer = setInterval(this.getCodeStatus, 4000)
    hashHistory.push('/fed/main/code')
  }
  getCodeStatus() {
    get('/polling').then(({ code, data, msg }) => {
      if (code === 200) {
        if (data.type === 1) {
          clearInterval(window.codeTimer)
          setStore('business', 'education', 'session')
          hashHistory.push('/fed/main/password')
        }
        if (data.type === 2) {
          clearInterval(window.codeTimer)
          setStore('business', 'repast', 'session')
          hashHistory.push('/fed/main/password')
        }
      } else {
        Toast.fail(msg)
      }
    })
  }
  render() {
    const isNewCustomer = getStore('isNewCustomer', 'session') ? getStore('isNewCustomer', 'session') : false
    const entradas = [
      { status: 'selected', name: '大连市政便民信息' },
      { status: 'selected', name: '英语-雅思-阅读题' },
      { status: 'disable', name: '二次元-新番' },
      { status: 'disable', name: '初中课程-初三-数学' },
    ]
    return (
      <div className='home'>
        {
          isNewCustomer &&
          <div className='new-customer'>
            <img src={ require('../../img/idx_bg1.png') } alt='dayinji' />
            <p className='title'>首次使用FED将打印使用帮助</p>
            <p className='tips'>(随机1-100现金奖励)</p>
            <div className='use-data'>
              <p><Icon type='down' size='md' />今日已有 1,934,894 通过之知补充知识</p>
              <p>已发放 2,948,593.39 学习基金</p>
            </div>
            <h1>设置知识库</h1>
            <div className='button'>打印使用帮助</div>
          </div>
        }
        {
          !isNewCustomer &&
          <div className='not-new-customer'>
            <div className='use-data'>
              <p><Icon type='down' size='md' />今日已有 1,934,894 通过之知补充知识</p>
              <p>已发放 2,948,593.39 学习基金</p>
            </div>
            {
              entradas.map(item => <SelectedItem key={ item.name } entradaItem={ item } />)
            }
            <div className='use-tips selected-item'>
              <p>本日剩余 <span>2</span> 次取票机会</p>
              <p>取票冷却 <span>360</span> 分钟</p>
            </div>
            <div className='button' onClick={ () => this.handleProduceCode() }>生成二维码</div>
          </div>
        }
      </div>
    )
  }
}

const SelectedItem = ({ entradaItem }) => {
  const { name, status } = entradaItem
  let iconName = 'down'
  if (status === 'noSelected') {
    iconName = 'right'
  } else if (status === 'disable') {
    iconName = 'up'
  }
  return (
    <div className='selected-item'>
      <Icon type={ iconName } size='md' />
      <p className='text'>{ name }</p>
    </div>
  )
}
