import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon, WhiteSpace } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/password/focus-business.scss'

export default class Focusbusiness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showVideo: false,
    }
  }
  handlePlayClick() {
    this.setState({ showVideo: true })
  }
  render() {
    const isRepast = getStore('currentBusiness', 'session') === 'repast'
    let businessActivities = [
      '关注9种抵值券可领 折扣价值¥3999',
      '订坐、外卖、折扣、活动等9种功能可用',
      '预订餐服务已开通，预支付订单总价40%',
      '会员中心服务可用，消费任意金额即可成为“Level 1”会员',
    ]
    let featureDatas = [
      { title: 'wifi', icon: require('../../img/svg/feature_1.svg') },
      { title: '停车场', icon: require('../../img/svg/feature_2.svg') },
      { title: '38包间', icon: require('../../img/svg/feature_3.svg') },
      { title: '婚礼宴请', icon: require('../../img/svg/feature_4.svg') },
      { title: '私厨', icon: require('../../img/svg/feature_5.svg') },
      { title: '会议接待', icon: require('../../img/svg/feature_6.svg') },
    ]
    let businessSlogan = { titleLeft: '安吉印象', titleRight: '精致土菜专营店', content: '首次关注送¥1.00学习基金' }
    let currentBusiness = '安吉印象'

    if (!isRepast) {
      businessActivities = [
        '自助上下课、一键划课时、签到开通',
        '课表、学籍功能开通',
        '在线预约功能开通',
        '在线作业功能开通',
      ]
      featureDatas = [
        { title: 'wifi', icon: require('../../img/svg/feature_1.svg') },
        { title: '1对1课程', icon: require('../../img/svg/focus_edu_2.svg') },
        { title: '会员制', icon: require('../../img/svg/focus_edu_3.svg') },
        { title: '留学直通车', icon: require('../../img/svg/focus_edu_4.svg') },
        { title: '循环课程', icon: require('../../img/svg/focus_edu_5.svg') },
        { title: '美式课堂', icon: require('../../img/svg/focus_edu_6.svg') },
      ]
      businessSlogan = { titleLeft: '联邦教育', titleRight: '15年永续高分', content: '首次关注送¥ 1.00学习基金' }
      currentBusiness = '联邦教育'
    }
    const { showVideo } = this.state
    return (
      <div className='focus-business'>
        {
          showVideo &&
          <video style={{ background: 'none' }} src='http://aapi.ddlass.com/public/test.mp4' controls autoPlay className='header' />
        }
        {
          !showVideo &&
          <div onClick={ () => this.handlePlayClick() } className='header' style={ isRepast ? {} : { background: `url(${ require('../../img/focus_education.png') })`, backgroundSize: 'cover' } } />
        }
        <WhiteSpace size='md' />
        <ul className='activities'>
          {
            businessActivities.map(o => (
              <li key={ o }>
                <Icon type={ isRepast ? require('../../img/svg/selected_green.svg') : require('../../img/svg/selected_0b.svg') } size='xxs' />
                <span>{ o }</span>
              </li>
            ))
          }
        </ul>
        <div className='feature-service'>
          <div className='s_title'>
            <p />
            <h1>特色服务</h1>
          </div>
          <ul>
            {
              featureDatas.map(o => (
                <li key={ o.title }>
                  <Icon type={ o.icon } size='lg' />
                  <p>{ o.title }</p>
                </li>
              ))
            }
          </ul>
          <div className={ isRepast ? 'slogan' : 'slogan education-bor' }>
            <h1 className={ isRepast ? '' : 'education-c' }>{ businessSlogan.titleLeft }<span>.</span>{ businessSlogan.titleRight }</h1>
            <p className={ isRepast ? '' : 'education-c' }>{ businessSlogan.content }</p>
          </div>
        </div>
        <p className={ isRepast ? 'fed-button' : 'fed-button education-bgc' } onClick={ () => hashHistory.push('/myApps/attention') }>{ `关注${ currentBusiness }` }</p>
      </div>
    )
  }
}
