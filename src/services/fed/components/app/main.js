import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { getStore, setStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import { getFedIndex, getResult } from '../../actions/app'

import '../../styles/home.scss'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entradas:     [],
      currentIndex: 1,
    }
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
  }
  componentDidMount() {
    const callback = data => {
      data.unshift({ id: 'a', title: '大连市政便民信息' })
      this.setState({ entradas: data })
    }
    getFedIndex(callback)
  }
  handleProduceCode(subCategoriesId) {
    setStore('subCategoriesId', subCategoriesId, 'session')
    window.codeTimer = setInterval(getResult(this.getCodeStatus), 4000)
    hashHistory.push('/main/code')
  }
  getCodeStatus(type) {
    if (type === 1) {
      clearInterval(window.codeTimer)
      setStore('business', 'education', 'session')
      hashHistory.push('/main/password')
    }
    if (type === 2) {
      clearInterval(window.codeTimer)
      setStore('business', 'repast', 'session')
      hashHistory.push('/main/password')
    }
  }
  handleChangeStatus(currentIndex) {
    this.setState({ currentIndex })
  }
  render() {
    const isNewCustomer = getStore('isNewCustomer', 'session') ? getStore('isNewCustomer', 'session') : false
    const { entradas, currentIndex } = this.state
    console.log('entradas', entradas)
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
              <p><Icon style={{ transform: 'translateY(10px)' }} type={ require('../../img/svg/fire.svg') } size='md' />今日已有 1,934,894 通过之知补充知识</p>
              <p>已发放 2,948,593.39 学习基金</p>
            </div>
            {
              entradas &&
              entradas.map((item, i) => <SelectedItem handleChangeStatus={ this.handleChangeStatus } data={ item } index={ i } active={ i === currentIndex || i === 0 } key={ item.title } />)
            }
            <div className='use-tips selected-item'>
              <p>本日剩余 <span>2</span> 次取票机会</p>
              <p>取票冷却 <span>360</span> 分钟</p>
            </div>
            <div className='button' onClick={ () => this.handleProduceCode(entradas[currentIndex].id) }>生成二维码</div>
          </div>
        }
      </div>
    )
  }
}

const SelectedItem = ({ data, index, handleChangeStatus, active }) => {
  const { title } = data
  return (
    <div className='selected-item'>
      <Icon onClick={ !active ? () => handleChangeStatus(index) : '' } type={ active ? require('../../img/svg/circle_a.svg') : require('../../img/svg/circle_7b.svg') } size='md' />
      <p className='text'>{ title }</p>
    </div>
  )
}
