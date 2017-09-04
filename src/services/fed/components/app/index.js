import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { TabBar, Icon } from 'antd-mobile'

import Main from './main'
import Knowledge from '../knowledge'
import Contribution from '../contribution'
import User from '../User'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'tab1',
      hidden:      false,
    }
  }
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor='#000'
          tintColor='#09bb07'
          barTintColor='white'
          hidden={ this.state.hidden }
        >
          <TabBar.Item
            title='首页'
            key='首页'
            icon={ <Icon type={ require('../../img/svg/idx_tab_bar1.svg') } size='md' /> }
            selectedIcon={ <Icon type={ require('../../img/svg/idx_tab_bar_ac_1.svg') } size='md' /> }
            selected={ this.state.selectedTab === 'tab1' }
            onPress={
              () => {
                this.setState({
                  selectedTab: 'tab1',
                })
              }
            }
            data-seed='logId'
          >
            <Main />
          </TabBar.Item>
          <TabBar.Item
            icon={ <Icon type={ require('../../img/svg/idx_tab_bar2.svg') } size='md' /> }
            selectedIcon={ <Icon type={ require('../../img/svg/idx_tab_bar_ac_2.svg') } size='md' /> }
            title='知识库'
            key='知识库'
            selected={ this.state.selectedTab === 'tab2' }
            onPress={
              () => {
                this.setState({
                  selectedTab: 'tab2',
                })
                hashHistory.push('/fed/knowledge')
              }
            }
            data-seed='logId1'
          >
            <Knowledge mock='知识库' />
          </TabBar.Item>
          <TabBar.Item
            icon={ <Icon type={ require('../../img/svg/idx_tab_bar3.svg') } size='md' /> }
            selectedIcon={ <Icon type={ require('../../img/svg/idx_tab_bar_ac_3.svg') } size='md' /> }
            title='贡献'
            key='贡献'
            selected={ this.state.selectedTab === 'tab3' }
            onPress={
              () => {
                this.setState({
                  selectedTab: 'tab3',
                })
              }
            }
          >
            <Contribution mock='贡献' />
          </TabBar.Item>
          <TabBar.Item
            icon={ <Icon type={ require('../../img/svg/idx_tab_bar4.svg') } size='md' /> }
            selectedIcon={ <Icon type={ require('../../img/svg/idx_tab_bar_ac_4.svg') } size='md' /> }
            title='我'
            key='我'
            selected={ this.state.selectedTab === 'tab4' }
            onPress={
              () => {
                this.setState({
                  selectedTab: 'tab4',
                })
              }
            }
          >
            <User mock='我' />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
