import React from 'react'
import { setStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../styles/reserve.scss'

export default class Reserve extends React.Component {
  constructor(props) {
    super(props)
    const mdxz = {
      keyName:  'mdxz',
      title:    '门店选择',
      name:     '中山区港汇店（港汇中心4楼）',
      list:     ['中山区港汇店（港汇中心4楼）', '长寿路140号(江宁路口)', '新闸路483号(近万航渡路)', '上海市徐汇区南丹东路129号'],
      showList: false,
    }
    const ycsj = {
      keyName:  'ycsj',
      title:    '用餐时间',
      name:     '下午 6:00',
      list:     ['下午 6:00', '下午 6:30', '下午 7:00', '下午 7:30', '下午 8:00', '下午 8:30', '下午 9:00'],
      showList: false,
    }
    const ewfw = {
      keyName:  'ewfw',
      title:    '额外服务',
      name:     '成人纪念（18岁生日）',
      list:     ['成人纪念（18岁生日）', '谢师宴', '百日宴', '生日宴', '其他'],
      showList: false,
    }
    const datas = [mdxz, ycsj, ewfw]
    this.state = {
      datas,
      currentOptionIndex: 0,
    }
    setStore('address', '中山区港汇店（港汇中心4楼）', 'session')
    setStore('phone', '(0411)83681111', 'session')
    this.handleChangeSelector = this.handleChangeSelector.bind(this)
  }
  handleChangeSelector(key, value) {
    const { datas } = this.state
    datas.forEach(item => {
      if (key === item.keyName) {
        item.showList = !item.showList
        if (value) item.name = value
        if (key === 'mdxz') {
          setStore('address', value, 'session')
        }
      } else {
        item.showList = false
      }
    })
    this.setState({ datas })
  }
  handleChangeOption(currentOptionIndex) {
    this.setState({ currentOptionIndex })
  }

  render() {
    const { datas, currentOptionIndex } = this.state
    return (
      <div className='reserve'>
        <div className='common-header'>
          <div className='content'>
            <Icon type={ require('../img/svg/business_yhq.svg') } size='lg' />
            <span>预约服务（餐饮版）</span>
          </div>
        </div>
        <ul className='container'>
          <li className='list-item'>
            <div><p style={{ color: '#ef461b', borderBottom: '1px solid #ef461b' }}>预定席位</p></div>
            <div><p>其他预定</p></div>
          </li>
          <LItem attr='mdxz' handleChangeSelector={ this.handleChangeSelector } key={ 'mdxz' } { ...datas[0] } />
          <li className='list-item'>
            <p className='title'>用餐人数</p>
            <div className='content'>
              <p>
                <input type='text' defaultValue='3' />
                <span>/人</span>
                <Icon type={ require('../img/svg/write.svg') } size='xs' />
              </p>
            </div>
          </li>
          <LItem attr='ycsj' handleChangeSelector={ this.handleChangeSelector } key={ 'ycsj' } { ...datas[1] } />
          <LItem attr='ewfw' handleChangeSelector={ this.handleChangeSelector } key={ 'exfw' } { ...datas[2] } />
          <li className='list-item'>
            <p className='title'>手机号码</p>
            <div className='content'>
              <p>
                <input style={{ width: 'auto', textAlign: 'left' }} type='text' defaultValue='18767676768' />
                <Icon type={ require('../img/svg/write.svg') } size='xs' />
              </p>
            </div>
          </li>
          <li className='options'>
            <p className='title'>选填项目</p>
            <ul>
              {
                ['有幼儿', '接送服务', '乐手服务'].map((item, index) => (
                  <li key={ item }>
                    <p onClick={ () => this.handleChangeOption(index) } style={ currentOptionIndex === index ? { borderColor: '#ef461b' } : {} }>
                      {
                        currentOptionIndex === index &&
                        <span />
                      }
                    </p>
                    <p>{ item }</p>
                  </li>
                ))
              }
            </ul>
          </li>
          <p className='fed-button'>提交预定</p>
        </ul>
      </div>
    )
  }
}

const LItem = ({ title, name, list, showList, attr, handleChangeSelector }) => {
  return (
    <li className='list-item'>
      <p className='title'>{ title }</p>
      <div className='content'>
        <p onClick={ () => handleChangeSelector(attr) }>
          <span>{ name }</span>
          <Icon type='down' size='xxs' />
        </p>
        {
          showList &&
          <ul>
            {
              list.map(i => <li key={ i } onClick={ () => handleChangeSelector(attr, i) }>{ i }</li>)
            }
          </ul>
        }
      </div>
    </li>
  )
}
