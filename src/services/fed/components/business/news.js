import React from 'react'
import { getStore } from '@boluome/common-lib'
import { hashHistory } from 'react-router'

import '../../styles/business/information.scss'

const News = () => {
  const datas = [
    { id: 1, hasCoupon: true, content: '把麻辣小龙虾做的这么有逼格的也就我们了如果没吃过，那就快点来吧，周末全单8折抵用券可叠加哦！' },
    { id: 2, hasCoupon: false, content: '把麻辣小龙虾做的这么有逼格的也就我们了如果没吃过，那就快点来吧，周末全单8折抵用券可叠加哦！' },
  ]
  const business = getStore('business', 'session')
  return (
    <div className='information'>
      <div className='header' onClick={ () => hashHistory.push(`/fed/business/${ business }/news/inner`) }>
        <p>把麻辣小龙虾做的这么有逼格的也就我们了</p>
      </div>
      <ul>
        {
          datas.map(o => {
            const { content, hasCoupon, id } = o
            return (
              <li key={ id }>
                <img src={ require('../../img/good_img.png') } alt='good-img' />
                <p>{ content }</p>
                {
                  hasCoupon &&
                  <p className='coupon'>抢<br />红<br />包</p>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default News
