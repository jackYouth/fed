import React from 'react'
import { getStore } from '@boluome/common-lib'

import WaimaiReserve from './waimai-reserve'
import EducationReserve from './education-reserve'

const Reserve = () => {
  const type = getStore('currentBusiness', 'session') ? getStore('currentBusiness', 'session') : 'repast'
  console.log('type', type)
  return (
    <div>
      {
        type === 'repast' &&
        <WaimaiReserve />
      }
      {
        type === 'education' &&
        <EducationReserve />
      }
    </div>
  )
}

export default Reserve
