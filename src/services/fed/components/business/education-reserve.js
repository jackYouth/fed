import React from 'react'
import { setStore, getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/reserve.scss'

export default class Reserve extends React.Component {
  constructor(props) {
    super(props)
    const xqxz = {
      keyName:  'xqxz',
      title:    '校区选择',
      name:     '友好小区（友好大厦21层）',
      list:     ['友好小区（友好大厦21层）', '长寿路140号(江宁路口)', '新闸路483号(近万航渡路)', '上海市徐汇区南丹东路129号'],
      showList: false,
    }
    const xygx = {
      keyName:  'xygx',
      title:    '与学员关系',
      name:     '父子',
      list:     ['父子', '父女', '母子', '母女'],
      showList: false,
    }
    const datas = [xqxz, xygx]
    this.state = {
      datas,
      name:  '张三',
      age:   18,
      phone: '15555555555',
    }
    setStore('education_address', '友好小区（友好大厦21层）', 'session')
    setStore('education_phone', '(0411)83681111', 'session')
    this.handleChangeSelector = this.handleChangeSelector.bind(this)
  }
  handleChangeSelector(key, value) {
    const { datas } = this.state
    datas.forEach(item => {
      if (key === item.keyName) {
        item.showList = !item.showList
        if (value) item.name = value
        if (key === 'xqxz') {
          setStore('education_address', value, 'session')
        }
      } else {
        item.showList = false
      }
    })
    this.setState({ datas })
  }
  handleName(name) {
    this.setState({ name: name.target.value })
  }
  handlePhone(phone) {
    this.setState({ phone: phone.target.value })
  }
  handleAge(age) {
    this.setState({ age: age.target.value })
  }
  placeReserve(reserveInfo) {
    const educationReserveList = getStore('educationReserveList', 'session') ? getStore('educationReserveList', 'session') : []
    reserveInfo.id = 20000000000 + educationReserveList.length
    educationReserveList.push(reserveInfo)
    setStore('educationReserveList', educationReserveList, 'session')
    console.log('educationReserveList', educationReserveList)
  }
  handlePhoneIconClick() {
    this.phoneIpt.focus()
  }
  handleAgeIconClick() {
    this.ageIpt.focus()
  }
  handleNameIconClick() {
    this.nameIpt.focus()
  }

  render() {
    const { datas, name, phone, age } = this.state
    const paras = {
      name,
      phone,
      age,
      position:     datas[0].name,
      relationShip: datas[1].name,
    }
    return (
      <div className='reserve'>
        <div className='common-header education-bg'>
          <div className='content'>
            <Icon type={ require('../../img/svg/reserve_white.svg') } size='lg' />
            <span>预约服务（教育版）</span>
          </div>
        </div>
        <ul className='container'>
          <li className='list-item'>
            <div style={{ width: '100%' }}><p style={{ borderBottom: '2px solid #0b3688', width: '150px', textAlign: 'center', color: '#0b3688' }}>预定公开课</p></div>
          </li>

          <LItem attr='xqxz' handleChangeSelector={ this.handleChangeSelector } key={ 'xqxz' } { ...datas[0] } />
          <li className='list-item'>
            <p className='title'>学员姓名</p>
            <div className='content'>
              <p>
                <input value={ name } style={{ width: 'auto', textAlign: 'left' }} ref={ node => this.nameIpt = node } type='text' onChange={ val => this.handleName(val) } />
                <Icon onClick={ () => this.handleNameIconClick() } type={ require('../../img/svg/write_0b.svg') } size='xs' />
              </p>
            </div>
          </li>
          <LItem attr='xygx' handleChangeSelector={ this.handleChangeSelector } key={ 'xygx' } { ...datas[1] } />
          <li className='list-item age'>
            <p className='title'>学员年龄</p>
            <div className='content'>
              <p>
                <input value={ age } style={{ textAlign: 'left' }} ref={ node => this.ageIpt = node } onChange={ val => this.handleAge(val) } type='text' />
                <span>周岁</span>
                <Icon type={ require('../../img/svg/write_0b.svg') } size='xs' onClick={ () => this.handleAgeIconClick() } />
              </p>
            </div>
          </li>
          <li className='list-item' style={{ marginBottom: '2rem' }}>
            <p className='title'>联络电话</p>
            <div className='content'>
              <p>
                <input maxLength='11' ref={ node => this.phoneIpt = node } onChange={ val => this.handlePhone(val) } style={{ width: 'auto', textAlign: 'left' }} type='text' defaultValue={ phone } />
                <Icon type={ require('../../img/svg/write_0b.svg') } size='xs' onClick={ () => this.handlePhoneIconClick() } />
              </p>
            </div>
          </li>
          <p className='fed-button education-bg' onClick={ () => this.placeReserve(paras) }>提交预约</p>
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
          <Icon type='down' size='xxs' style={{ color: '#0b3688' }} />
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
