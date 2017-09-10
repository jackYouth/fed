import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { setStore } from '@boluome/common-lib'
import { Icon, Carousel } from 'antd-mobile'

import FirstKnowledgeItem from './first-knowledge-item'
import { getTopCategory } from '../../actions/app.js'

import '../../styles/knowledge/first-knowledge.scss'

export default class FirstKnowledge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstKnowledges: '',
    }
    this.getData = this.getData.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    getTopCategory(this.getData)
  }
  getNewFirstKnowledges(firstKnowledges, offset) {
    const newFirstKnowledges = []
    const length = Math.ceil(firstKnowledges.length / offset)
    for (let i = 1; i <= length; i++) {
      newFirstKnowledges.push(firstKnowledges.splice(0, offset))
    }
    return newFirstKnowledges
  }
  getData(firstKnowledges) {
    const newFirstKnowledges = this.getNewFirstKnowledges(JSON.parse(JSON.stringify(firstKnowledges)), 7)
    this.setState({ firstKnowledges: newFirstKnowledges })
    const shortFirstKnowledges = this.getNewFirstKnowledges(JSON.parse(JSON.stringify(firstKnowledges)), 5)
    setStore('shortFirstKnowledges', shortFirstKnowledges, 'session')
  }
  handleClick(id) {
    setStore('firstId', id, 'session')
    hashHistory.push('/knowledge/second')
  }
  render() {
    const datas = [
      { title: '按使用次数', isSelected: true },
      { title: '按添加时间', isSelected: false },
      { title: '按热度', isSelected: false },
      { title: '按最近更新', isSelected: false },
    ]
    const { firstKnowledges } = this.state
    if (!firstKnowledges) return <div />
    // {id: "2", title: "英语", kpi: "1"}
    return (
      <div className='first-knowledge'>
        <p className='fed-button top'>全部知识库</p>
        <div className='header'>
          {
            datas.map((item, index) => <SelectHeaderItem key={ item.title } { ...{ handleClick: this.handleClickSelect, index, ...item } } />)
          }
        </div>
        <Carousel
          className='knowledge-carousel'
          autoplay={ Boolean('') }
          infinite
          selectedIndex={ 0 }
          swipeSpeed={ 35 }
          beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
          afterChange={ index => console.log('slide to', index) }
        >
          {
            firstKnowledges.map(o => (
              <ul key={ o[0].id }>
                {
                  o.map((oo, i) => {
                    if (i >= 7) return false
                    return <FirstKnowledgeItem handleClick={ this.handleClick } key={ oo.id } data={ oo } />
                  })
                }
              </ul>)
            )
          }
        </Carousel>
        <p className='fed-button' onClick={ () => hashHistory.push('/knowledge') }>返回知识库</p>
      </div>
    )
  }
}

const SelectHeaderItem = ({ handleClick, index, title, isSelected }) => {
  return (
    <div className='select-header-item' onClick={ () => handleClick(index) }>
      <Icon type={ isSelected ? require('../../img/svg/arrow_down_09.svg') : require('../../img/svg/arrow_up_d8.svg') } size='xxs' />
      <span>{ title }</span>
    </div>
  )
}
