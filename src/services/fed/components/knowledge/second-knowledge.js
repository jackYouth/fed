import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { Mask } from '@boluome/oto_saas_web_app_component'
import { Icon, Carousel } from 'antd-mobile'
import { hashHistory } from 'react-router'

import { getSecondCategory, addSecondCategory } from '../../actions/app.js'
import KnowledgeItem from './knowledge-item'
import FirstKnowledgeItem from './first-knowledge-item'

import '../../styles/knowledge/second-knowledge.scss'

export default class SecondKnowledge extends Component {
  constructor(props) {
    super(props)
    // limit: 当前二级分类数据的长度， currentLeft表示当前list容器的marginLeft值
    this.state = {
      datas:       {},
      currentLeft: 0,
      limit:       1,
    }
    this.getData = this.getData.bind(this)
    this.handleFirstKnowledgeClick = this.handleFirstKnowledgeClick.bind(this)
  }
  componentWillMount() {
    const id = getStore('firstId', 'session')
    getSecondCategory(id, this.getData)
  }
  getData(datas) {
    const begin = JSON.parse(JSON.stringify(datas[0]))
    const after = JSON.parse(JSON.stringify(datas[datas.length - 1]))
    begin.id = 'b'
    after.id = 'a'
    if (datas.length > 1) {
      datas.push(begin)
      datas.unshift(after)
    }
    datas.map(o => {
      if (!o.img) o.img = require('../../img/knowledge_banner_1.png')
      return o
    })
    this.setState({ datas, limit: datas.length - 2 })
  }
  handleClick(id) {
    addSecondCategory(id)
    hashHistory.push('/knowledge')
  }
  handleFirstKnowledgeClick(id, handleContainerClose) {
    getSecondCategory(id, this.getData)
    handleContainerClose()
  }

  handleStart(e) {
    const { clientX } = e.touches[0]
    this.beginPoint = { clientX }
  }

  handleEnd(e) {
    let { currentLeft } = this.state
    const { limit } = this.state
    const { clientX } = e.changedTouches[0]
    this.endPoint = { clientX }
    // 右滑
    if (clientX > this.beginPoint.clientX && currentLeft > 0) {
      currentLeft--
      console.log('左滑', currentLeft)
    }
    // 左滑
    if (clientX < this.beginPoint.clientX && currentLeft < limit - 1) {
      currentLeft++
      console.log('右滑', currentLeft)
    }
    this.setState({ currentLeft })
  }

  render() {
    // const knowledgeDatas = [
    //   { img: require('../../img/knowledge_banner_1.png'), id: '1' },
    //   { img: require('../../img/knowledge_banner_1.png'), id: '2' },
    //   { img: require('../../img/knowledge_banner_1.png'), id: '3' },
    //   { img: require('../../img/knowledge_banner_1.png'), id: '4' },
    //   { img: require('../../img/knowledge_banner_1.png'), id: '5' },
    //   { img: require('../../img/knowledge_banner_1.png'), id: '6' },
    // ]
    const { datas, currentLeft } = this.state
    console.log('secondDatas', datas)
    if (!datas) return <div />
    return (
      <div className='knowlege-index'>
        <h1 className='s_container'>
          <Icon type={ require('../../img/svg/tea_o.svg') } size='md' />
          没有什么事情会阻碍我们
        </h1>
        {
          datas && datas.length > 0 &&
          <div className='knowledge-list-container'>
            <ul style={{ marginLeft: `-${ currentLeft * 4.9 }rem`, width: `${ datas.length * 100 }%` }} className={ datas.length < 2 ? 'knowledge-list single' : 'knowledge-list' } onTouchStart={ e => this.handleStart(e) } onTouchEnd={ e => this.handleEnd(e) }>
              {
                datas.map(item => <KnowledgeItem key={ item.id } { ...{ handleClick: this.handleClick, ...item } } />)
              }
            </ul>
          </div>
        }
        <h1
          className='s_container to-select'
          onClick={ () => Mask(<AllKnowledge handleFirstKnowledgeClick={ this.handleFirstKnowledgeClick } />, { style: { zIndex: 1000 } }) }
        >
          <Icon type={ require('../../img/svg/move.svg') } size='xs' />
          <span>选择知识库</span>
        </h1>
      </div>
    )
  }
}

const AllKnowledge = ({ handleContainerClose, handleFirstKnowledgeClick }) => {
  const shortFirstKnowledges = getStore('shortFirstKnowledges', 'session')
  console.log('shortFirstKnowledges', shortFirstKnowledges)
  return (
    <div className='all-knowledge'>
      <h1>全部知识库</h1>
      <Carousel
        className='knowledge-carousel'
        autoplay={ Boolean('') }
        infinite
        selectedIndex={ 1 }
        swipeSpeed={ 35 }
        style={{ width: '6.5rem' }}
        beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
        afterChange={ index => console.log('slide to', index) }
      >
        {
          shortFirstKnowledges.map(ii => (
            <ul className='konwlede-module' key={ ii[0].id }>
              {
                ii.map(item => (
                  <FirstKnowledgeItem key={ item.id } handleClick={ id => handleFirstKnowledgeClick(id, handleContainerClose) } data={ item } />
                ))
              }
            </ul>
          ))
        }
      </Carousel>
      <span className='close-mask'><Icon type={ require('../../img/svg/close.svg') } size='md' onClick={ handleContainerClose } /></span>
    </div>
  )
}
