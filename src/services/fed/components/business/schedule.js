import React from 'react'
import { Icon } from 'antd-mobile'

import ThreeFeature from '../common-component/three-feature'

import '../../styles/business/schedule.scss'

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentData: { date: '18' },
    }
  }
  handleClick(currentData) {
    this.setState({ currentData })
  }
  render() {
    const { currentData } = this.state
    const dates = [{ date: 31 }]
    for (let i = 1; i <= 30; i++) {
      if (i === 10 || i === 16) {
        dates.push({ flag: 1, date: i })
      } else {
        dates.push({ date: i })
      }
    }
    return (
      <div className='schedule'>
        <div className='schedule-header'>
          <Icon type={ require('../../img/svg/schedule.svg') } size='lg' />
          <span>课程表</span>
        </div>
        <div className='banner'>
          <h1>
            <Icon type={ require('../../img/svg/left_13.svg') } size='xxs' />
            <span>2017年9月</span>
            <Icon type={ require('../../img/svg/left_13.svg') } size='xxs' />
          </h1>
          <ul className='date-list'>
            {
              ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(o => (
                <li className='week' key={ o }>{ o }</li>
              ))
            }
            {
              dates.map(o => {
                let className = ''
                if (o.flag) className = 'flag'
                if (o.date === currentData.date) className = 'active'
                return (
                  <li onClick={ () => this.handleClick(o) } key={ o.date }><p className={ className }>{ o.date }</p></li>
                )
              })
            }
          </ul>
        </div>
        <div className='schedule-bottom'>
          <span>强化阅读</span>
          <span>时间 10:00 - 18:00</span>
          <span>授课老师:Steven</span>
        </div>
        <ThreeFeature />
      </div>
    )
  }
}
