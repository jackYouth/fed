import React from 'react'

import '../../styles/waimai/information.scss'

const Information = () => {
  const datas = [
    { id: 1, hasCoupon: true, content: '把麻辣小龙虾做的这么有逼格的也就我们了如果没吃过，那就快点来吧，周末全单8折抵用券可叠加哦！' },
    { id: 2, hasCoupon: false, content: '把麻辣小龙虾做的这么有逼格的也就我们了如果没吃过，那就快点来吧，周末全单8折抵用券可叠加哦！' },
  ]
  return (
    <div className='information'>
      <div className='header'>
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

export default Information
