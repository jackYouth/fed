import React from 'react'
import { hashHistory } from 'react-router'
import { Icon } from 'antd-mobile'

import '../../styles/code/navigation.scss'

export default class Navigation extends React.Component {
  componentDidMount() {
    const { AMap } = window
    const aMap = new AMap.Map(this.mapNode, {
      resizeEnable: true,
      zoom:         11,
    })
    aMap.plugin(['AMap.ToolBar'], () => {
      // 工具条
      aMap.addControl(new window.AMap.ToolBar({ position: 'LB' }))
    })
    const myCircle = new AMap.Circle({
      center:       aMap.getCenter(),
      radius:       100,
      fillOpacity:  0.3,
      strokeWeight: 1,
    })
    myCircle.setMap(aMap)
    aMap.setFitView()
  }
  render() {
    return (
      <div className='navigation'>
        <div className='map' ref={ node => this.mapNode = node } />
        <div className='top'>
          <Icon type={ require('../../img/svg/sound.svg') } size='lg' />
          <p>
            GPS信号弱<br />
            请步行到开阔地带
          </p>
        </div>
        <div className='bottom'>
          <Icon onClick={ () => hashHistory.push('/fed/main/nearDevice') } type='cross' style={{ color: '#4a4a4a' }} size='md' />
          查看全览
          <Icon type={ require('../../img/svg/point_three_4a.svg') } size='md' />
        </div>
      </div>
    )
  }
}
