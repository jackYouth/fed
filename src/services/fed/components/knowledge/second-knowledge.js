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
    this.state = {
      datas: {},
    }
    this.getData = this.getData.bind(this)
    this.handleFirstKnowledgeClick = this.handleFirstKnowledgeClick.bind(this)
  }
  componentWillMount() {
    const id = getStore('firstId', 'session')
    getSecondCategory(id, this.getData)
  }
  getData(datas) {
    this.setState({ datas })
  }
  handleClick(id) {
    addSecondCategory(id)
    hashHistory.push('/fed/knowledge')
  }
  handleFirstKnowledgeClick(id, handleContainerClose) {
    getSecondCategory(id, this.getData)
    handleContainerClose()
  }

  render() {
    const knowledgeDatas = [
      { img: require('../../img/knowledge_banner_1.png'), id: '1' },
      { img: require('../../img/knowledge_banner_1.png'), id: '2' },
      { img: require('../../img/knowledge_banner_1.png'), id: '3' },
      { img: require('../../img/knowledge_banner_1.png'), id: '4' },
    ]
    const { datas } = this.state
    console.log('secondDatas', datas)
    return (
      <div className='knowlege-index'>
        <h1 className='s_container'>
          <Icon type={ require('../../img/svg/tea_o.svg') } size='md' />
          没有什么事情会阻碍我们
        </h1>
        {
          knowledgeDatas && knowledgeDatas.length > 0 &&
          <div className='knowledge-list-container'>
            <ul className='knowledge-list'>
              {
                knowledgeDatas.map(item => <KnowledgeItem key={ item.id } { ...{ handleClick: this.handleClick, ...item } } />)
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
