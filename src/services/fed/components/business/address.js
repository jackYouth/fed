import React from 'react'
import { getStore } from '@boluome/common-lib'
import { Flex, Icon } from 'antd-mobile'

import '../../styles/business/address.scss'

const FItem = Flex.Item

const Address = () => {
  const address = getStore('address', 'session') ? getStore('address', 'session') : '大连西岗区黄河路273号'
  const phone = getStore('phone', 'session') ? getStore('phone', 'session') : '18888888888'
  return (
    <div className='business-address'>
      <img className='bg' src={ require('../../img/waimai_address_bg.png') } alt='business_address_bg' />
      <Flex className='selectes'>
        <FItem className='active'>全景模式</FItem>
        <FItem>2D地图</FItem>
        <FItem>文字描述</FItem>
      </Flex>
      <div className='info'>
        <div className='left'>
          <p>
            <Icon type={ require('../../img/svg/location.svg') } size='xxs' />
            <span>{ `地址：${ address }` }</span>
          </p>
          <p>
            <Icon type={ require('../../img/svg/phone.svg') } size='xxs' />
            <span>{ `电话：${ phone }` }</span>
          </p>
        </div>
        <div className='phone'>
          <Icon type={ require('../../img/svg/phone_active.svg') } size='xxs' />
          <p>电话</p>
        </div>
      </div>
    </div>
  )
}

export default Address
