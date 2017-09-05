import React from 'react'
import { Icon  } from 'antd-mobile'

import '../../styles/knowledge/first-knowledge-item.scss'

const FirstKnowledgeItem = ({ data, handleClick }) => {
  return (
    <li onClick={ () => handleClick(data.id) } className='first-knowledge-item' key={ data.id }>
      <p>
        <Icon className='name-icon' type={ require('../../img/svg/tea_09.svg') } size='md' />
        <span className='name'>{ data.title }</span>
      </p>
      <p>
        <Icon style={{ marginTop: '-5px' }} className='kpi-icon' type={ require('../../img/svg/kpi.svg') } size='xs' />
        &nbsp;
        <span className='kpi'>{ `KPI ${ data.kpi }` }</span>
      </p>
      <Icon className='more-icon' type={ require('../../img/svg/point_three.svg') } size='md' />
    </li>
  )
}

export default FirstKnowledgeItem
