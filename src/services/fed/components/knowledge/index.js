import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/knowledge/index.scss'

export default class SetKnowledge extends Component {
  static defaultProps = {
    selectHeaders: [
      { title: '按使用次数', isSelected: false },
      { title: '按添加时间', isSelected: false },
      { title: '按热度', isSelected: false },
    ],
    setKnowledgeList: [
      { title: '生活-生活百科', content: '五花八门的生活常识以及丰富多彩的生活知识，快来补充你的生活技巧吧！', inUse: true, num: '1900', id: 1 },
      { title: '生活-生活百科', content: '五花八门的生活常识以及丰富多彩的生活知识，快来补充你的生活技巧吧！', inUse: true, num: '1900', id: 2 },
      { title: '生活-生活百科', content: '五花八门的生活常识以及丰富多彩的生活知识，快来补充你的生活技巧吧！', inUse: true, num: '1900', id: 3 },
      { title: '生活-生活百科', content: '五花八门的生活常识以及丰富多彩的生活知识，快来补充你的生活技巧吧！', inUse: false, num: '1900', id: 4 },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.handleClickSelect = this.handleClickSelect.bind(this)
  }
  handleClickSelect(index) {
    const { currentIndex } = this.state
    if (index !== currentIndex) {
      this.setState({ currentIndex: index })
    }
  }
  render() {
    const { selectHeaders, setKnowledgeList } = this.props
    const { currentIndex } = this.state
    const datas = JSON.parse(JSON.stringify(selectHeaders))
    datas[currentIndex].isSelected = true
    return (
      <div className='konwledge'>
        <div className='header'>
          {
            datas.map((item, index) => <SelectHeaderItem key={ item.title } { ...{ handleClick: this.handleClickSelect, index, ...item } } />)
          }
          <div className='select-header-item in-use'>使用中(<span>3/3</span>)</div>
        </div>
        <div className='set-knowledge-list'>
          {
            setKnowledgeList.map(item => <SetKnowledgeItem { ...item } key={ item.id } />)
          }
        </div>
        <h1 className='s_container return-button' onClick={ () => hashHistory.push('/fed') }>
          返回首页
        </h1>
        <h1 className='s_container set-button' onClick={ () => hashHistory.push('/fed/knowledge/first') }>
          设置知识库
        </h1>
      </div>
    )
  }
}

const SelectHeaderItem = ({ handleClick, index, title, isSelected }) => {
  return (
    <div className='select-header-item' onClick={ () => handleClick(index) }>
      <Icon type={ isSelected ? 'down' : 'up' } size='xxs' />
      { title }
    </div>
  )
}

const SetKnowledgeItem = ({ inUse, content, title, num }) => {
  return (
    <div className={ inUse ? 'set-knowledge-item active' : 'set-knowledge-item' }>
      <div className='item-left'>
        <p className='item-title'>{ title }</p>
        <p className='item-content'>{ content }</p>
        <p className='item-num'>知识累积 <span>{ num }</span>/个 &nbsp;&nbsp; <span>详细</span></p>
      </div>
      <div className='item-right'>
        <Icon type={ inUse ? 'right' : 'left' } size='md' />
        { inUse ? '使用中' : '停用' }
      </div>
    </div>
  )
}
