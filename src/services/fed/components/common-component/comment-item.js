import React, { Component } from 'react'
import { Evaluation } from '@boluome/oto_saas_web_app_component'
import { Icon } from 'antd-mobile'

import '../../styles/comment-item.scss'

export default class CommentItem extends Component {
  constructor(props) {
    super(props)
    this.state = { upHandActive: false, downHandActive: false }
  }
  handleUpClick() {
    this.setState({ upHandActive: true, downHandActive: false })
  }
  handleDownClick() {
    this.setState({ upHandActive: false, downHandActive: true })
  }
  render() {
    const { name, score, time, level, content, imgList, price, serverTime } = this.props.commentInfo
    let { upHand, downHand } = this.props.commentInfo
    const { upHandActive, downHandActive } = this.state
    if (upHandActive) upHand++
    if (downHandActive) downHand++
    return (
      <div className='comment-item'>
        <div className='header'>
          <img className='user-icon' src={ require('../../img/comment_user.png') } alt='user_icon' />
          <div className='right'>
            <p className='top'>
              { name }
              <span>{ time }</span>
            </p>
            <div className='bottom'>
              <Evaluation defaultValue={ `${ score / 0.05 }%` } width={ '1rem' } />
              { score }
              <p className='level'>
                <Icon type={ require('../../img/svg/heart.svg') } size='xxs' />
                &nbsp;
                { level }
              </p>
            </div>
          </div>
        </div>
        <p className='content'>{ content }</p>
        <div className='img-list'>
          {
            imgList.length > 0 &&
            imgList.map(i => <img key={ i.id } src={ i.url } alt='comment-img' />)
          }
        </div>
        <div className='footer'>
          <p>{ `人均消费${ price } ` }&nbsp;&nbsp;&nbsp;{ ` 平均上菜时间${ serverTime }分钟` }</p>
          <div className={ downHandActive ? 'down active' : 'down' } onClick={ () => this.handleDownClick() }>
            { downHandActive ? <Icon type={ require('../../img/svg/hand_active.svg') } size='xxs' /> : <Icon type={ require('../../img/svg/hand.svg') } size='xxs' /> }
            &nbsp;&nbsp;
            { downHand }
          </div>
          <div className={ upHandActive ? 'up active' : 'up' } onClick={ () => this.handleUpClick() }>
            { upHandActive ? <Icon type={ require('../../img/svg/hand_active.svg') } size='xxs' /> : <Icon type={ require('../../img/svg/hand.svg') } size='xxs' /> }
            &nbsp;&nbsp;
            { upHand }
          </div>
        </div>
      </div>
    )
  }
}
