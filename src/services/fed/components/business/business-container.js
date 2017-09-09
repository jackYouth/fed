import React from 'react'
import { hashHistory } from 'react-router'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/business/business-container.scss'

export default class BusinessContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMenu: '首页',
      display:     'flex',
    }
  }
  componentWillReceiveProps() {
    if (location.hash.indexOf('waimai') >= 0) {
      this.setState({ display: 'none' })
    } else {
      this.setState({ display: 'flex' })
    }
  }
  handleClick(o) {
    this.setState({ currentMenu: o.text })
    if (o.url) hashHistory.push(o.url)
  }
  // componentDidMount() {
  //   console.log(8797987897)
  //   document.querySelector('.business-container-bottom').style.display = '2'
  // }
  render() {
    const { children } = this.props
    const { currentMenu, display } = this.state
    const business = getStore('currentBusiness', 'session')
    const isEducation = business === 'education'
    let menus = [
      { text: '首页', icon: require('../../img/svg/idx_tab_bar1.svg'), activeIcon: require('../../img/svg/idx_tab_bar_ef.svg'), url: `/fed/business/${ business }` },
      { text: '门店资讯', icon: require('../../img/svg/news.svg'), activeIcon: require('../../img/svg/news_ef.svg'), url: `/fed/business/${ business }/news` },
      { text: '特价', icon: require('../../img/svg/tejia.svg'), activeIcon: require('../../img/svg/tejia_ef.svg') },
      { text: '我', icon: require('../../img/svg/idx_tab_bar4.svg'), activeIcon: require('../../img/svg/idx_tab_bar_4_ef.svg'), url: `/fed/business/${ business }/center` },
    ]

    if (isEducation) {
      menus = [
        { text: '首页', icon: require('../../img/svg/idx_tab_bar1.svg'), activeIcon: require('../../img/svg/idx_tab_bar_0b.svg'), url: `/fed/business/${ business }` },
        { text: '学校新闻', icon: require('../../img/svg/news.svg'), activeIcon: require('../../img/svg/news_0b.svg'), url: `/fed/business/${ business }/news` },
        { text: '课程特色', icon: require('../../img/svg/tejia.svg'), activeIcon: require('../../img/svg/tejia_0b.svg') },
        { text: '我', icon: require('../../img/svg/idx_tab_bar4.svg'), activeIcon: require('../../img/svg/idx_tab_bar_4_0b.svg'), url: `/fed/business/${ business }/center` },
      ]
    }
    return (
      <div className='business-container'>
        <div className='business-container-top'>
          { children }
        </div>
        <ul style={{ display }} className='business-container-bottom'>
          {
            menus.map(o => (
              <li key={ o.text } onClick={ () => this.handleClick(o) }>
                <Icon type={ currentMenu === o.text ? o.activeIcon : o.icon } size='md' />
                <span className={ isEducation && currentMenu === o.text ? 'education-c' : '' } style={{ color: currentMenu === o.text ? '#ef461b' : '#000' }}>{ o.text }</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
