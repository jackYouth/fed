import React from 'react'
import { getStore, setStore } from '@boluome/common-lib'
import { Icon } from 'antd-mobile'

import '../../styles/common-component/three-feature.scss'

// style 为column 表示垂直布局模式

const ThreeFeature = ({ direction = 'row', num = 3 }) => {
  const currentBusiness = getStore('currentBusiness', 'session')
  const isEducation = currentBusiness === 'education'
  let features = [
    { title: '位置', icon: isEducation ? require('../../img/svg/location_13.svg') : require('../../img/svg/location_ef.svg'), url: `/business/${ currentBusiness }/address` },
    { title: '电话', icon: isEducation ? require('../../img/svg/phone_13.svg') : require('../../img/svg/phone_ef.svg') },
    { title: '返回', icon: isEducation ? require('../../img/svg/return_13.svg') : require('../../img/svg/return_ef.svg'), url: `/business/${ currentBusiness }` },
  ]
  if (num === 1) {
    features = [
      { title: '返回', icon: isEducation ? require('../../img/svg/return_13.svg') : require('../../img/svg/return_ef.svg'), url: `/business/${ currentBusiness }` },
    ]
  }
  const handleClick = feature => {
    if (feature === '返回') setStore('currentBusinessMenu', '首页', 'session')
  }
  return (
    <p className='three-reature' style={{ flexDirection: direction }}>
      {
        features.map(o => (
          <a onClick={ () => handleClick(o.title) } href={ o.url ? `#${ o.url }` : 'tel:18888888888' } key={ o.title }>
            <Icon type={ o.icon } size='xxs' />
            <span className={ isEducation ? 'education-c' : '' }>{ o.title }</span>
          </a>
        ))
      }
    </p>
  )
}

export default ThreeFeature
