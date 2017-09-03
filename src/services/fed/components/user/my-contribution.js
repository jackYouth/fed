import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/user/my-contribution.scss'


export default class MyContrubution extends Component {
  constructor(props) {
    super(props)
    const contributionList = [
      { id: 0, icon: require('../../img/svg/arrow_down_09.svg'), name: '生活百科', code: '3', bg: '#09bb07', status: '通过', isShow: 0 },
      { id: 1, icon: require('../../img/svg/arrow_down_f5.svg'), name: '生活百科', code: '2', bg: '#f5a623', status: '未通过', isShow: 0 },
      { id: 2, icon: require('../../img/svg/arrow_down_49.svg'), name: '生活百科', code: '1', bg: '#4990e2', status: '审核中', isShow: 0 },
      { id: 3, icon: require('../../img/svg/arrow_down_09.svg'), name: '生活百科', code: '3', bg: '#09bb07', status: '通过', isShow: 1 },
    ]
    this.state = {
      contributionList,
    }
  }
  handleKnowledgeClick(i) {
    const { contributionList } = this.state
    contributionList[i].isShow = !contributionList[i].isShow
    this.setState({ contributionList })
  }
  render() {
    const status = [
      { icon: require('../../img/svg/useIn_09.svg'), name: '正在被使用' },
      { icon: require('../../img/svg/shalou_09.svg'), name: '审核中' },
      { icon: require('../../img/svg/close_f6.svg'), name: '未通过' },
    ]
    const { contributionList } = this.state
    return (
      <div className='my-contribution'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <div className='container'>
          <ul className='status'>
            {
              status.map(o => (
                <li key={ o.name }>
                  <Icon type={ o.icon } size='xs' />
                  <span>{ o.name }</span>
                </li>
              ))
            }
          </ul>
          <ul className='contribution-list'>
            {
              contributionList.map((o, i) => (
                <li key={ o.id }>
                  {
                    Boolean(!o.isShow) &&
                    <div className='top' onClick={ () => this.handleKnowledgeClick(i) }>
                      <Icon type={ o.icon } size='xs' />
                      <span className='title'>{ o.name }</span>
                      <span className='status-container' style={{ background: o.bg }}>{ o.status }</span>
                    </div>
                  }
                  {
                    Boolean(o.isShow) &&
                    <div className='bottom'>
                      <p className='bottom-item'>
                        <Icon type={ require('../../img/svg/selected_green.svg') } size='xxs' />
                        <span>2017-05-15  09:30  通过审验</span>
                      </p>
                      <p className='bottom-item'>
                        <Icon type={ require('../../img/svg/useIn_09.svg') } size='xxs' />
                        <span>2017-05-15  10:30  录入到知识库</span>
                      </p>
                      <p className='bottom-item'>
                        <Icon type={ require('../../img/svg/tips_09.svg') } size='xxs' />
                        <span>非常出色的生活贴士，小编每天看到这么多的生活技巧，对自己也是一种提升，再一次感谢您对之知的贡献。</span>
                      </p>
                      <p className='right' onClick={ () => this.handleKnowledgeClick(i) }>
                        <Icon type={ require('../../img/svg/arrow_up.svg') } size='xs' />
                        <span>{ o.name }</span>
                      </p>
                    </div>
                  }
                </li>
              ))
            }
          </ul>
        </div>
        <p className='fed-button' onClick={ () => hashHistory.push('/fed/user') }>返回个人中心</p>
      </div>
    )
  }
}
