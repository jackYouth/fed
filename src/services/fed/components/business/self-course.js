import React from 'react'
import { Icon, List } from 'antd-mobile'

import '../../styles/business/self-course.scss'

const LItem = List.Item

const SelfCourse = () => {
  return (
    <div className='self-course'>
      <LItem className='header' arrow='horizontal' extra={ <p><Icon type={ require('../../img/svg/wifi_theme.svg') } size='lg' /><span>未连接</span></p> }>
        Hi！Jimmy同学
      </LItem>
      <p className='warning'>
        <Icon type={ require('../../img/svg/warning.svg') } size='xs' />
        <span>尚未连接到学校WIFI网络，签到功能失效</span>
      </p>
      <ul className='banner'>
        <li>
          <Icon type={ require('../../img/svg/write_13.svg') } size='lg' />
          <p>签到</p>
        </li>
        <li>
          <Icon type={ require('../../img/svg/time_13.svg') } size='lg' />
          <p>约课</p>
        </li>
      </ul>
      <p className='bottom'>
        <img src={ require('../../img/self_course_icon_1.png') } alt='self_course_icon_1' />
        <span>本月连续签到27次 继续保持！</span>
      </p>
    </div>
  )
}

export default SelfCourse
