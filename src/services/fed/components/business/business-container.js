import React from 'react'
import { hashHistory } from 'react-router'
import { getStore, setStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/business/business-container.scss'

export default class BusinessContainer extends React.Component {
  constructor(props) {
    super(props)
    const currentMenu = getStore('currentBusinessMenu', 'session') ? getStore('currentBusinessMenu', 'session') : '首页'
    this.state = {
      currentMenu,
      display: 'flex',
    }
  }
  componentWillMount() {
    if (location.hash.indexOf('waimai') >= 0) this.setState({ display: 'none' })
  }
  componentWillReceiveProps() {
    if (location.hash.indexOf('waimai') >= 0) {
      this.setState({ display: 'none' })
    } else {
      if (location.hash.split('/').length === 3) {
        this.setState({ display: 'flex', currentMenu: '首页' })
        return
      }
      this.setState({ display: 'flex' })
    }
  }
  handleClick(o) {
    setStore('currentBusinessMenu', o.text, 'session')
    this.setState({ currentMenu: o.text })
    if (o.url) hashHistory.push(o.url)
  }
  render() {
    const { children } = this.props
    const { currentMenu, display } = this.state
    const business = location.hash.split('/')[2]
    console.log('business', business)
    const isEducation = business === 'education'
    let menus = [
      { text: '首页', icon: require('../../img/svg/idx_tab_bar1.svg'), activeIcon: require('../../img/svg/idx_tab_bar_ef.svg'), url: `/business/${ business }` },
      { text: '门店资讯', icon: require('../../img/svg/news.svg'), activeIcon: require('../../img/svg/news_ef.svg'), url: `/business/${ business }/news` },
      { text: '特价', icon: require('../../img/svg/tejia.svg'), activeIcon: require('../../img/svg/tejia_ef.svg') },
      { text: '我', icon: require('../../img/svg/idx_tab_bar4.svg'), activeIcon: require('../../img/svg/idx_tab_bar_4_ef.svg'), url: `/business/${ business }/center` },
    ]

    if (isEducation) {
      menus = [
        { text: '首页', icon: require('../../img/svg/idx_tab_bar1.svg'), activeIcon: require('../../img/svg/idx_tab_bar_0b.svg'), url: `/business/${ business }` },
        { text: '学校新闻', icon: require('../../img/svg/news.svg'), activeIcon: require('../../img/svg/news_0b.svg'), url: `/business/${ business }/news` },
        { text: '课程特色', icon: require('../../img/svg/tejia.svg'), activeIcon: require('../../img/svg/tejia_0b.svg') },
        { text: '我', icon: require('../../img/svg/idx_tab_bar4.svg'), activeIcon: require('../../img/svg/idx_tab_bar_4_0b.svg'), url: `/business/${ business }/center` },
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
