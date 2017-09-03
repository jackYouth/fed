import React, { Component } from 'react'
import { setStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import { getTopCategory } from '../../actions/app.js'

export default class FirstKnowledge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: {},
    }
    this.getData = this.getData.bind(this)
  }
  componentWillMount() {
    getTopCategory(this.getData)
  }
  getData(datas) {
    this.setState({ datas })
  }
  handleClick(id) {
    setStore('firstId', id, 'session')
    hashHistory.push('/fed/knowledge/second')
  }
  render() {
    const { datas } = this.state
    return (
      <div className='first-knowledge' onClick={ () => this.handleClick(1) }>
        去选择二级分类
        <p>{ JSON.stringify(datas) }</p>
      </div>
    )
  }
}
