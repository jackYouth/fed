import React, { Component } from 'react'
import { setStore, getStore } from '@boluome/common-lib'
import { Mask } from '@boluome/oto_saas_web_app_component'
import { Flex, Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import Specification from './specification'

import '../../styles/business/goods.scss'

const FItem = Flex.Item

export default class Goods extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartNum:  0,
      allPrice: 0,
      goodList: [],
    }
    this.handleAddGood = this.handleAddGood.bind(this)
  }
  handleAddGood(goodInfo) {
    let { cartNum, allPrice } = this.state
    const { goodList } = this.state
    cartNum = Number(cartNum)
    allPrice = Number(allPrice)
    cartNum++
    allPrice += Number(goodInfo.price)
    let inList = false
    goodList.forEach(o => {
      if (o.id === goodInfo.id) {
        o.num++
        inList = true
        return true
      }
    })
    if (!inList) {
      goodInfo.num = 1
      goodList.push(goodInfo)
    }
    this.setState({ cartNum, allPrice, goodList })
  }
  handleToOrder(goodList) {
    const business = getStore('business', 'session')
    setStore('businessList', goodList, 'session')
    hashHistory.push(`/fed/business/${ business }/waimai/order`)
  }
  render() {
    const goodsData = [
      { id: 100000000041, title: '宫保鸡丁', description: '宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。', discount: '8', price: '98', spec: true },
      { id: 100000000042, title: '毛豆肉丝', description: '宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。', discount: '4', price: '98' },
      { id: 100000000043, title: '蚂蚁上树', description: '宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。', discount: '6', price: '98', spec: true },
      { id: 100000000044, title: '小鸡炖蘑菇', description: '宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。', discount: '8', price: '98', spec: true },
      { id: 100000000045, title: '猪肉炖粉条', description: '宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。', discount: '8', price: '98' },
    ]
    const { cartNum, allPrice, goodList } = this.state
    return (
      <div className='goods'>
        <div className='common-header'>
          <div className='content'>
            <Icon type={ require('../../img/svg/business_yhq.svg') } size='lg' />
            <span>预约服务（餐饮版）</span>
          </div>
        </div>
        <div className='container'>
          <Flex className='selectes'>
            {
              ['全部菜品', '菜品', '主食', '套餐', '酒水'].map((o, i) => (
                <FItem key={ o } className={ i === 0 ? 'active' : '' }>{ o }</FItem>
              ))
            }
          </Flex>
          <p className='notice'>
            <span />
            外卖配送起止时间9:00-22:00(仅限四区）
          </p>
        </div>
        <ul>
          {
            goodsData.map(o => <GoodItem key={ o.id } goodInfo={ o } handleAddGood={ this.handleAddGood } { ...o } />)
          }
        </ul>
        <div className='footer'>
          <p className='left'>
            <span>{ cartNum }</span>
            <Icon type={ require('../../img/svg/cart.svg') } size='md' />
          </p>
          <div className='center'>
            <p>{ `共¥${ allPrice } (满100 减20）` }</p>
            <p>本单配送费10 满150免费配送</p>
          </div>
          <p onClick={ () => this.handleToOrder(goodList) } className='right'>去结算</p>
        </div>
      </div>
    )
  }
}

const GoodItem = ({ goodInfo, handleAddGood }) => {
  const { title, description, discount, price, spec } = goodInfo
  return (
    <li className='good-item'>
      <p className='img-container'><img className='good-img' src={ require('../../img/good_img.png') } alt='good-img' /></p>
      <div className='right'>
        <p>{ title }</p>
        <p>{ description }</p>
        {
          discount &&
          <span className='discount'>{ `新品${ discount }折` }</span>
        }
        <p>
          ¥ &nbsp;
          <span>{ price }</span>
        </p>
        {
          spec &&
          <span onClick={ () => Mask(<Specification goodInfo={ goodInfo } handleAddGood={ handleAddGood } />) } className='spec'>选择规格</span>
        }
        {
          !spec &&
          <Icon onClick={ () => handleAddGood(goodInfo) } className='add-good' type={ require('../../img/svg/add.svg') } size='md' />
        }
      </div>
    </li>
  )
}
