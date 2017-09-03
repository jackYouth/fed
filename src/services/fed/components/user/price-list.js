import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/price-list.scss'

export default class PriceDetail extends Component {
  constructor(props) {
    super(props)
    const filterList = [
      { title: '全部', id: 0 },
      { title: '收入', id: 1 },
      { title: '支出', id: 2 },
      { title: '提现', id: 3 },
    ]
    this.state = {
      filterList,
      currentFilter: 0,
    }
  }
  handleFilterClick(currentFilter) {
    this.setState({ currentFilter })
  }
  render() {
    const { filterList, currentFilter } = this.state
    const priceList = [
      { id: 0, icon: require('../../img/svg/income.svg'), text: '收入·打印奖励', date: '2017-07-29' },
      { id: 1, icon: require('../../img/svg/expense.svg'), text: '支出·购物', date: '2017-07-28' },
      { id: 2, icon: require('../../img/svg/income.svg'), text: '收入·打印奖励', date: '2017-07-28' },
      { id: 3, icon: require('../../img/svg/withdraw.svg'), text: '提现至银行卡', date: '2017-07-28' },
      { id: 4, icon: require('../../img/svg/expense.svg'), text: '支出·购物', date: '2017-07-28' },
      { id: 5, icon: require('../../img/svg/expense.svg'), text: '支出·购物', date: '2017-07-27' },
      { id: 6, icon: require('../../img/svg/income.svg'), text: '收入·打印奖励', date: '2017-07-29' },
      { id: 7, icon: require('../../img/svg/withdraw.svg'), text: '提现至银行卡', date: '2017-07-29' },
      { id: 8, icon: require('../../img/svg/income.svg'), text: '收入·打印奖励', date: '2017-07-29' },
    ]
    return (
      <div className='price-detail'>
        <div className='price-detail-top item'>
          <span className='point-green' />
          <span>资金明细</span>
          <span>收入+198</span>
          <span>支出-130</span>
          <span>净资产+68 ／¥</span>
        </div>
        <ul className='filter-list'>
          {
            filterList.map((o, i) => (
              <li key={ o.id }>
                <span className={ i === currentFilter ? 'active' : '' } onClick={ () => this.handleFilterClick(o.id) }>{ o.title }</span>
              </li>
            ))
          }
          <li>
            <Icon type={ require('../../img/svg/arrow_down_ff.svg') } size='xxs' />
            <span>选择日期</span>
          </li>
        </ul>
        <ul className='price-list'>
          {
            priceList.map(o => (
              <li key={ o.id } className='item' onClick={ () => hashHistory.push('/fed/user/priceDetail') }>
                <Icon type={ o.icon } size='xs' />
                <span>{ o.text }</span>
                <Icon type={ require('../../img/svg/more.svg') } size='md' />
                <span>{ o.date }</span>
              </li>
            ))
          }
        </ul>
        <p className='fed-button' onClick={ () => hashHistory.push('/fed/user') }>返回个人中心</p>
      </div>
    )
  }
}
