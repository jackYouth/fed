import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/code/produce-code.scss'

import { getQrCode } from '../../actions/app'

export default class ProduceCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
    }
  }
  componentWillMount() {
    const subCategoriesId = getStore('subCategoriesId', 'session')
    const callback = url => {
      console.log('url', url)
      this.setState({ url })
    }
    getQrCode(subCategoriesId, callback)
  }
  render() {
    const { url } = this.state
    if (!url) return <div />
    return (
      <div className='produce-code'>
        <div className='hi-header'>
          <img src={ require('../../img/my_app_hi.png') } alt='hi' />
          <span>城市加油站</span>
        </div>
        <div className='banner'>
          <img src={ url } alt='code_second' />
          <p>
            <Icon type={ require('../../img/svg/selected_green.svg') } size='md' />
            二维码已经生成，您可以使用智能终端扫描手机上的二维码，或者“查询
            <Icon type={ require('../../img/svg/location_d0.svg') } size='md' />
            附近的智能终端”
          </p>
        </div>
        <div className='fed-button'>
          <p className='footer-container' onClick={ () => {
            if (window.codeTimer) clearInterval(window.codeTimer)
            hashHistory.push('/main/nearDevice')
          } }
          >
            <Icon type={ require('../../img/svg/location_d0.svg') } size='md' />
            <span>附近的智能终端</span>
          </p>
          <p className='fed-button return-index' onClick={ () => {
            if (window.codeTimer) clearInterval(window.codeTimer)
            hashHistory.push('/')
          } }
          >
            返回首页
          </p>
        </div>
      </div>
    )
  }
}
