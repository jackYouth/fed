import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

export default class KnowledgeItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.types = ['常用', '进阶', '专家']
  }
  handleChangeIndex(currentIndex) {
    this.setState({ currentIndex })
  }
  render() {
    const { img, num, handleClick } = this.props
    const { currentIndex } = this.state
    return (
      <li className='knowledge-item'>
        <p className='img'><img src={ img } alt='knowlege' /></p>
        <div className='type'>
          {
            this.types.map((item, index) => <div className={ currentIndex === index ? 'active type-item' : 'type-item' } key={ item } onClick={ () => { if (currentIndex !== index) { this.handleChangeIndex(index) } } }><Icon type={ currentIndex === index ? 'up' : 'down' } size='md' /><span>{ item }</span></div>)
          }
        </div>
        <p className='number'>共有<span>{ num }</span>人添加该库</p>
        <p className='knowledge-item-button' onClick={ () => handleClick(1) }>
          <Icon type='down' size='md' />
          添加
        </p>
      </li>
    )
  }
}