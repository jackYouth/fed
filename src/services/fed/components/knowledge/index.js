import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import { updateRepositoryStatus, getKnowledgeIndex } from '../../actions/app'

import '../../styles/knowledge/index.scss'

export default class SetKnowledge extends Component {
  static defaultProps = {
    selectHeaders: [
      { title: '按使用次数', isSelected: false },
      { title: '按添加时间', isSelected: false },
      { title: '按热度', isSelected: false },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      currentIndex:     0,
      setKnowledgeList: [],
    }
    this.handleClickSelect = this.handleClickSelect.bind(this)
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
  }
  componentWillMount() {
    const callback = data => {
      const setKnowledgeList = data.map(o => ({
        content: '五花八门的生活常识以及丰富多彩的生活知识，快来补充你的生活技巧吧！',
        inUse:   o.status === '1' ? 1 : 0,
        id:      o.id,
        title:   o.title,
      }))
      this.setState({ setKnowledgeList })
    }
    getKnowledgeIndex(callback)
  }
  handleClickSelect(index) {
    const { currentIndex } = this.state
    if (index !== currentIndex) {
      this.setState({ currentIndex: index })
    }
  }
  handleChangeStatus(index, inUse) {
    const { setKnowledgeList } = this.state
    let i = 0
    setKnowledgeList.forEach(o => {
      if (o.inUse) i++
    })
    if (i >= 3 && !inUse) {
      return
    }
    const status = inUse ? 2 : 1
    updateRepositoryStatus(setKnowledgeList[index].id, status)
    setKnowledgeList[index].inUse = !setKnowledgeList[index].inUse
    this.setState({ setKnowledgeList })
  }
  render() {
    const { selectHeaders } = this.props
    const { currentIndex, setKnowledgeList } = this.state
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
            setKnowledgeList.map((item, i) => <SetKnowledgeItem handleChangeStatus={ this.handleChangeStatus } index={ i } { ...item } key={ item.id } />)
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
      <Icon style={{ marginTop: '28px', float: 'left' }} type={ isSelected ? require('../../img/svg/arrow_down_09.svg') : require('../../img/svg/arrow_up_d8.svg') } size='xxs' />
      { title }
    </div>
  )
}

const SetKnowledgeItem = ({ inUse, content, title, num, handleChangeStatus, index }) => {
  console.log('inUse', inUse)
  return (
    <div className={ inUse ? 'set-knowledge-item active' : 'set-knowledge-item' }>
      <div className='item-left'>
        <p className='item-title'>{ title }</p>
        <p className='item-content'>{ content }</p>
        <p className='item-num'>知识累积 <span>{ num }</span>/个 &nbsp;&nbsp; <span>详细</span></p>
      </div>
      <div className='item-right' onClick={ () => handleChangeStatus(index, inUse) }>
        {
          Boolean(inUse) &&
          <Icon style={{ marginRight: '10px' }} type={ require('../../img/svg/use_in.svg') } size='md' />
        }
        {
          Boolean(!inUse) &&
          <Icon style={{ transform: 'rotate(180deg)', marginRight: '10px' }} type={ require('../../img/svg/not_use.svg') } size='md' />
        }
        { inUse ? '使用中' : '停用' }
      </div>
    </div>
  )
}
