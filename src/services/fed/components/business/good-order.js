import React, { Component } from 'react'
import { getStore, setStore, moment } from '@boluome/common-lib'
import { Icon, TextareaItem } from 'antd-mobile'
import { createForm } from 'rc-form'
import { contains } from 'ramda'

import '../../styles/business/good-order.scss'

const handleTotal = businessList => {
  let totalPrice = 0
  let totalNum = 0
  businessList.forEach(o => {
    totalPrice += o.price * o.num
    totalNum += o.num
  })
  return { totalPrice, totalNum }
}

class GoodOrder extends Component {
  constructor(props) {
    super(props)
    const businessList = getStore('businessList', 'session')
    const total = handleTotal(businessList)
    this.state = {
      currentTime:     '立即配送',
      currentSelectes: [],
      businessList,
      ...total,
    }
  }
  handleChangeTime(currentTime) {
    this.setState({ currentTime })
  }
  handleChangeSelectes(item) {
    let { currentSelectes } = this.state
    if (contains(item)(currentSelectes)) {
      currentSelectes = currentSelectes.filter(o => o !== item)
    } else {
      currentSelectes.push(item)
    }
    this.setState({ currentSelectes })
  }
  handleDelGood(index) {
    let { businessList } = this.state
    businessList = businessList.filter((o, i) => {
      console.log(o[0])
      return i !== index
    })
    const total = handleTotal(businessList)
    this.setState({ businessList, ...total })
  }
  handlePay(businessList) {
    const { currentTime, currentSelectes, totalPrice, totalNum } = this.state
    let time = currentTime[0]
    if (!parseFloat(time)) time = 0
    time = moment('HH:mm')((new Date()).getTime() + Number(time * 60 * 60 * 1000))
    const businessInfoList = getStore('businessInfoList', 'session') ? getStore('businessInfoList', 'session') : []
    const businessInfo = {
      time,
      businessList,
      totalPrice,
      totalNum,
      tips: currentSelectes,
      id:   businessInfoList.length + 10000000,
    }
    businessInfoList.push(businessInfo)
    setStore('businessList', businessList, 'session')
    setStore('businessInfoList', businessInfoList, 'session')
  }
  render() {
    const { form } = this.props
    const { getFieldProps } = form
    const { currentTime, currentSelectes, businessList, totalPrice, totalNum } = this.state
    return (
      <div className='good-order'>
        <div className='common-header'>
          <div className='content'>
            <Icon type={ require('../../img/svg/good_order_1.svg') } size='lg' />
            <span>结算</span>
          </div>
        </div>
        <div className='container top'>
          <div className='good-order-header'>
            <Icon type={ require('../../img/svg/order.svg') } size='xs' />
            <span>结算</span>
          </div>
          <ul className='good-list'>
            {
              businessList.map((o, i) => <GoodItem index={ i } handleDelGood={ index => this.handleDelGood(index) } key={ o.id } goodInfo={ o } />)
            }
          </ul>
        </div>

        <div className='container tips'>
          <div className='good-order-header'>
            <Icon type={ require('../../img/svg/tips_4a.svg') } size='xs' />
            <span>备注</span>
          </div>
          <div className='time'>
            <p className='title'>
              <Icon type={ require('../../img/svg/time_4a.svg') } size='xxs' />
              <span>配送时间</span>
            </p>
            <ul className='time-list'>
              {
                ['立即配送', '1个小时后', '2个小时后', '3个小时后'].map(o => (
                  <li onClick={ () => this.handleChangeTime(o) } key={ o } className={ currentTime === o ? 'active' : '' }>
                    <p><span /></p>
                    <p>{ o }</p>
                  </li>
                ))
              }
            </ul>
            <p className='title'>
              <Icon type={ require('../../img/svg/tips_4a.svg') } size='xxs' />
              <span>备注</span>
            </p>
            <TextareaItem
              {
                ...getFieldProps('count')
              }
              rows={ 1 }
              count={ 30 }
              placeholder='不要放太多辣椒 请准备3套餐具 谢谢'
            />
            <ul className='tips-selectes'>
              {
                ['多加米饭', '不吃花椒', '少辣'].map(o => (
                  <li onClick={ () => this.handleChangeSelectes(o) } key={ o } className={ contains(o)(currentSelectes) ? 'active' : '' }>{ o }</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='footer'>
          <p className='title'>订单合计:</p>
          <div className='middle'>
            <p>
              { `菜品¥${ totalPrice }+餐盒费${ totalNum * 2 }+配送费¥15` }
            </p>
            <p>
              合计应付：¥
              <span>{ totalPrice + (totalNum * 2) }</span>
            </p>
          </div>
          <p className='bottom'>满¥90 免餐盒 免配送费</p>
        </div>
        <p onClick={ () => this.handlePay(businessList) } className='fed-button'>前往支付</p>
      </div>
    )
  }
}

export default createForm()(GoodOrder)


const GoodItem = ({ goodInfo, index, handleDelGood }) => {
  const { title, description, price, num } = goodInfo
  return (
    <li className='good-item'>
      <img className='good-img' src={ require('../../img/good_img.png') } alt='good-img' />
      <div className='center'>
        <p>{ title }</p>
        <p>{ description }</p>
        <p>
          ¥
          <span>{ price }</span>
          <span>{ ` *${ num }份` }</span>
        </p>
      </div>
      <div className='right'>
        <div className='right-container'>
          <Icon type={ require('../../img/svg/del.svg') } size='xxs' />
          <span onClick={ () => handleDelGood(index) }>移除</span>
        </div>
      </div>
    </li>
  )
}
