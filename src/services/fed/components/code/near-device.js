import React from 'react'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/code/produce-code.scss'

const nearDevice = () => {
  const nearMachines = [
    { name: '西安路地铁2号线候车区', num: '19027', area: '12', distance: '100', status: '1' },
    { name: '西安路地铁1号线候车区', num: '9027', area: '13', distance: '300', status: '1' },
    { name: '罗斯福1楼 直梯等待区', num: '127', area: '11', distance: '600', status: '1' },
    { name: '罗斯福4楼 直梯等待区', num: '207', area: '15', distance: '500', status: '0' },
  ]
  return (
    <div className='produce-code'>
      <div className='hi-header'>
        <img src={ require('../../img/my_app_hi.png') } alt='hi' />
        <span>城市加油站</span>
      </div>
      <div className='container'>
        <div className='tips box'>
          <Icon type={ require('../../img/svg/compass.svg') } size='md' />
          <span>进入详细页可以使用导航服务</span>
          <p>知道了</p>
        </div>
        {
          nearMachines.map(o => (
            <div className='machine box' key={ o.name } onClick={ () => hashHistory.push('/main/navigation') }>
              <img className='left' src={ require('../../img/machine.png') } alt='near-machine' />
              <div className='center'>
                <p>{ o.name }</p>
                <p>今日{ o.num }人次使用</p>
                <p>{ `该区域共有${ o.area }个取票点`}</p>
              </div>
              <div className='right'>
                <p>{ `距当前${ o.distance }米` }</p>
                <p className={ o.status === '1' ? '' : 'disable' }>{ o.status === '1' ? '正常' : '检修' }</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='slide'>
        <p className='slide-container'>
          <Icon type={ require('../../img/svg/point.svg') } size='xxs' />
          <span>上滑获取更多位置</span>
        </p>
      </div>
      <div className='fed-button' onClick={ () => hashHistory.push('/main/code') }>
        <p className='footer-container'>
          <Icon type={ require('../../img/svg/arrow_left.svg') } size='md' />
          <span>返回二维码页面</span>
        </p>
      </div>
    </div>
  )
}

export default nearDevice
