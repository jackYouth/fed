import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/user/my-achieve.scss'

export default class MyAchieve extends Component {
  constructor(props) {
    super(props)
    const achieveList = [
      { id: 0, title: '生活 - 生活百科', es: '987', avrageEs: '986', voteNum: '903', exceedNum: '93', isShow: false },
      { id: 1, title: '生活 - 生活百科', es: '987', avrageEs: '986', voteNum: '903', exceedNum: '93', isShow: true },
    ]
    this.state = { achieveList }
  }
  handleItemClick(i) {
    const { achieveList } = this.state
    achieveList[i].isShow = !achieveList[i].isShow
    this.setState({ achieveList })
  }
  render() {
    const { achieveList } = this.state
    return (
      <div className='my-achieve'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <div className='my-achieve-slogan'>
          <p><Icon type={ require('../../img/svg/tea.svg') } size='md' /></p>
          <span>生  活 - 没有什么事情会阻碍我们</span>
        </div>
        <ul className='achieve-list'>
          {
            achieveList.map((o, i) => (
              <li className='achieve-item' key={ o.id }>
                {
                  Boolean(!o.isShow) &&
                  <div className='top' onClick={ () => this.handleItemClick(i) }>
                    <Icon type={ require('../../img/svg/arrow_down_09.svg') } size='md' />
                    <span>{ o.title }</span>
                    <span>{ `ES 综合指数 ${ o.es }` }</span>
                  </div>
                }
                {
                  Boolean(o.isShow) &&
                  <div className='bottom'>
                    <p className='bottom-item' onClick={ () => this.handleItemClick(i) }>
                      <Icon type={ require('../../img/svg/arrow_up.svg') } size='md' />
                      <span>{ o.title }</span>
                    </p>
                    <div className='bottom-item'>
                      <div className='left'>
                        <h4>累计取票次数</h4>
                        <p><span>{ o.voteNum }</span>／次</p>
                        <h4>ES 综合指数</h4>
                        <p>{ o.es }</p>
                      </div>
                      <div className='left'>
                        <h4>超越该知识库</h4>
                        <p><span>{ o.exceedNum }</span> %的人</p>
                        <h4>本库平均ES指数</h4>
                        <p>{ o.avrageEs }</p>
                      </div>
                    </div>
                    <p className='medal'>
                      <Icon type={ require('../../img/svg/tea.svg') } size='md' />
                      <span>咖啡杯勋章</span>
                      <span>献给热爱生活的人</span>
                      <span>已获得</span>
                    </p>
                  </div>
                }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
