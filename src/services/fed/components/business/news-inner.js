import React from 'react'

import '../../styles/business/information-inner.scss'
import ThreeFeature from '../common-component/three-feature'

const InformationInner = () => {
  return (
    <div className='information-inner'>
      <p className='title'>把麻辣小龙虾做的这么有逼格的也就我们了</p>
      <p className='time'>2017.09.15</p>
      <div className='content'>内容区</div>
      <p>阅读 10万+</p>
      <ThreeFeature direction={ 'column' } num={ 1 } />
    </div>
  )
}

export default InformationInner
