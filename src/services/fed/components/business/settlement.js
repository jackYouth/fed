import React from 'react'

const Settlement = () => {
  return (
    <div className='settlement'>
      <div className='common-header'>
        <div className='content'>
          <Icon type={ require('../../img/svg/business_yhq.svg') } size='lg' />
          <span>结算</span>
        </div>
      </div>
      <div className='container'>
        <div className='top'>
          <p className='title'>
            <Icon type={  }>
          </p>
          <div>
            <img src={ require('../../img/good_img.png') } alt='good-img' />
            <div className='center'>
              <p>{ title }</p>
              <p>{ description }</p>
              <p>
                ¥ &nbsp;
                <span>{ price }</span>
              </p>
            </div>
            <div className='right'>
              <Icon type={ require('../../img/svg/del.svg') } size='md' />
              <span>删除</span>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <p className='title'></p>

        </div>
      </div>
    </div>
  )
}

export default Settlement
