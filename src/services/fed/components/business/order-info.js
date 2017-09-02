import React, { Component } from 'react'
// import { moment } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/business/order-info.scss'

/*
  list的参数信息：
  id:20000000004
  people:3
  phone"18767676768 (张先生)"
  position:"中山区港汇店（港汇中心4楼）"
  status:1
  time:"下午 6:00"
  title:"成人纪念（18岁生日）"

  businessList:
  time: "01:25",
  tips: ["不吃花椒"],
  "businessList":[{"id":100000000042,"title":"毛豆肉丝","description":"宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。","discount":"4","price":"98","num":1}],
  totalNum,
  totalPrice
*/

export default class OrderInfo extends Component {
  constructor(props) {
    super(props)
    const { orderList } = props
    // 设置默认预约状态，1:待确认，2:已确认，3:主动取消
    orderList.forEach((o, i) => {
      orderList[i].status = i % 3
    })
    this.state = { orderList }
    this.handelCancelOrder = this.handelCancelOrder.bind(this)
  }

  handelCancelOrder(id) {
    const { orderList } = this.state
    orderList.forEach((o, i) => {
      if (o.id === id) {
        orderList[i].status = 3
      }
    })
    this.setState({ orderList })
  }
  render() {
    const { orderList } = this.state
    const { title, isbusiness } = this.props
    return (
      <div className='order-info'>
        <div className='order-header'>
          <div className='order-header-container'>
            <Icon type={ isbusiness ? require('../../img/svg/business_info_title.svg') : require('../../img/svg/order.svg') } size='md' />
            <span>{ title }</span>
          </div>
        </div>
        <ul className='order-item-container'>
          {
            !isbusiness &&
            orderList.map(o => <OrderItem handelCancelOrder={ this.handelCancelOrder } orderInfo={ o } key={ o.id } />)
          }
          {
            isbusiness &&
            orderList.map(o => <businessItem orderInfo={ o } key={ o.id } />)
          }
        </ul>
      </div>
    )
  }
}

const addTime = time => {
  let h = Number(time.split(':')[0])
  let m = Number(time.split(':')[1]) + 30
  if (m >= 60) {
    m -= 60
    h++
  }
  if (h >= 24) h -= 24
  return `${ h }:${ m }`
}

const businessItem = ({ orderInfo }) => {
  const { id, time, status = 1, businessList, totalPrice } = orderInfo
  const name = businessList[0].title
  let currentIcon = require('../../img/svg/time.svg')
  let currentText = '等待确认'
  if (status === 2) {
    currentIcon = require('../../img/svg/selected_green.svg')
    currentText = '商家已确认'
  }
  if (status === 3) {
    currentIcon = require('../../img/svg/cross.svg')
    currentText = '主动取消'
  }

  const nextTime = addTime(time)
  const orderStatus = [
    { name: '骑手已取货', time: nextTime, icon: require('../../img/svg/business_info_1.svg') },
    { name: '已出发,前往派送', time: addTime(nextTime), icon: require('../../img/svg/business_info_2.svg') },
    { name: '已送达', time: addTime(addTime(nextTime)), icon: require('../../img/svg/business_info_3.svg') },
  ]
  return (
    <li className='order-item'>
      <div className='left'>
        <p>{ `订单编号：${ id }` }</p>
        <p>{ `订单信息：${ name }` }</p>
        <p>{ `送达时间：${ time }-${ nextTime }` }</p>
        <p>订单总价：<span>¥</span> <span>{ totalPrice }</span></p>
      </div>
      <div className='right'>
        <div className='right-container'>
          <Icon type={ currentIcon } size='xxs' />
          <p>{ currentText }</p>
        </div>
      </div>
      <div className='order-item-bottom'>
        <ul className='order-item-bottom-container'>
          {
            status !== 1 &&
            orderStatus.map((o, i) => (
              <div className='div-container' key={ o.name }>
                <li>
                  <p>
                    <Icon type={ o.icon } size='xxs' />
                    <span>{ o.name }</span>
                  </p>
                  <p>{ time }</p>
                </li>
                {
                  i < 2 &&
                  <li>&gt;&gt;</li>
                }
              </div>
            ))
          }
        </ul>
      </div>
    </li>
  )
}


const OrderItem = ({ orderInfo, handelCancelOrder }) => {
  const { id, time, phone, status = 1, people } = orderInfo
  let currentIcon = require('../../img/svg/time.svg')
  let currentText = '等待确认'
  if (status === 2) {
    currentIcon = require('../../img/svg/selected_green.svg')
    currentText = '商家已确认'
  }
  if (status === 3) {
    currentIcon = require('../../img/svg/cross.svg')
    currentText = '主动取消'
  }
  return (
    <li className='order-item'>
      <div className='left'>
        <p>{ `预约编号：${ id }` }</p>
        <p>{ `预约信息：9月15日 ${ people }人桌` }</p>
        <p>{ `到店时间：${ time } 最终保留时间${ time.split(':')[0] + (Number(time.split(':')[1]) + 15) }` }</p>
        <p>{ `延误联系：${ phone }` }</p>
      </div>
      <div className='right'>
        <div className='right-container'>
          <Icon type={ currentIcon } size='xxs' />
          <p>{ currentText }</p>
          {
            status === 1 &&
            <p onClick={ () => handelCancelOrder(id) } className='cancel'>取消预约</p>
          }
        </div>
      </div>
    </li>
  )
}
