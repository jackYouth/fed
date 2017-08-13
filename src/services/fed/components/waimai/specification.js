import React, { Component } from 'react'

export default class Specification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelect: '微辣',
    }
  }
  handleChangeSelector(currentSelect) {
    this.setState({ currentSelect })
  }
  handleAddGoodMid(goodInfo) {
    const { handleAddGood, handleContainerClose } = this.props
    handleAddGood(goodInfo)
    handleContainerClose()
  }
  render() {
    const { currentSelect } = this.state
    const { goodInfo } = this.props
    goodInfo.goodSpec = currentSelect
    console.log('currentSelect', currentSelect, currentSelect === '微辣')
    const { title, description, price } = goodInfo
    return (
      <div className='specification'>
        <p className='title'>
          <span>{ title }</span>
          <span>{ `已选‘${ currentSelect }’` }</span>
        </p>
        <p className='description'>{ description }</p>
        <ul>
          {
            ['微辣', '中辣', '重辣'].map(o => (
              <li onClick={ () => this.handleChangeSelector(o) } className={ currentSelect === o ? 'active' : '' } key={ o }>{ o }</li>
            ))
          }
        </ul>
        <div className='footer'>
          <p>
            ¥
            <span>{ price }</span>
            /份
          </p>
          <p onClick={ () => this.handleAddGoodMid(goodInfo) }>加入购物车</p>
        </div>
      </div>
    )
  }
}
