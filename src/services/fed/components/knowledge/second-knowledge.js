import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { Mask } from '@boluome/oto_saas_web_app_component'
import { Icon, Carousel } from 'antd-mobile'
import { hashHistory } from 'react-router'

import { getSecondCategory, addSecondCategory } from '../../actions/app.js'
import KnowledgeItem from './knowledge-item'

import '../../styles/knowledge/second-knowledge.scss'

export default class SecondKnowledge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: {},
    }
    this.getData = this.getData.bind(this)
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
  render() {
    const knowledgeDatas = [
      { img: require('../../img/knowledge_banner_1.png'), num: '1,871,767', id: '1' },
      { img: require('../../img/knowledge_banner_1.png'), num: '2,871,767', id: '2' },
      { img: require('../../img/knowledge_banner_1.png'), num: '3,871,767', id: '3' },
      { img: require('../../img/knowledge_banner_1.png'), num: '4,871,767', id: '4' },
    ]
    const { datas } = this.state
    console.log('secondDatas', datas)
    return (
      <div className='knowlege-index'>
        <h1 className='s_container'>
          <Icon type='down' size='md' />
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
          onClick={ () => Mask(<AllKnowledge />, { style: { zIndex: 1000 } }) }
        >
          <Icon type='down' size='md' />
          选择知识库
        </h1>
      </div>
    )
  }
}

const AllKnowledge = ({ handleContainerClose }) => {
  const knowledgeDatas = [
    {
      id:   'a',
      data: [
        { name: '生活综合', icon: 'down', kpi: '293', id: 1 },
        { name: '美食烹饪', icon: 'right', kpi: '293', id: 2 },
        { name: '语言学习', icon: 'left', kpi: '293', id: 3 },
        { name: '生活综合', icon: 'up', kpi: '293', id: 4 },
        { name: '美食烹饪', icon: 'down', kpi: '293', id: 5 },
      ],
    },
    {
      id:   'b',
      data: [
        { name: '我如果爱你', icon: 'down', kpi: '293', id: 1 },
        { name: '陀飞轮', icon: 'right', kpi: '293', id: 2 },
        { name: '红玫瑰', icon: 'left', kpi: '293', id: 3 },
        { name: '浮夸', icon: 'up', kpi: '293', id: 4 },
        { name: 'k歌之王', icon: 'down', kpi: '293', id: 5 },
      ],
    },
    {
      id:   'c',
      data: [
        { name: '十年', icon: 'down', kpi: '293', id: 1 },
        { name: '你给我听好', icon: 'right', kpi: '293', id: 2 },
        { name: '你的背包', icon: 'left', kpi: '293', id: 3 },
        { name: '谢谢侬', icon: 'up', kpi: '293', id: 4 },
        { name: '大开眼界', icon: 'down', kpi: '293', id: 5 },
      ],
    },
  ]
  return (
    <div className='all-knowledge'>
      <h1>全部知识库</h1>
      <Carousel
        className='knowledge-carousel'
        autoplay={ Boolean('') }
        infinite
        selectedIndex={ 1 }
        swipeSpeed={ 35 }
        beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
        afterChange={ index => console.log('slide to', index) }
      >
        {
          knowledgeDatas.map(ii => (
            <div className='konwlede-module' key={ ii.id }>
              {
                ii.data.map(item => (
                  <div className='data-item' key={ item.id }>
                    <Icon className='name-icon' type={ item.icon } size='md' />
                    <span className='name'>{ item.name }</span>
                    <Icon className='kpi-icon' type='right' size='md' />
                    &nbsp;
                    <span className='kpi'>{ `KPI ${ item.kpi }` }</span>
                    <Icon className='more-icon' type='left' size='md' />
                  </div>
                ))
              }
            </div>
          ))
        }
      </Carousel>
      <Icon className='close-mask' type='down' size='lg' onClick={ handleContainerClose } />
    </div>
  )
}
