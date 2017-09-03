import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { Grid, Icon, Carousel, Flex } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/business/index.scss'
import CommentItem from '../common-component/comment-item'

const FItem = Flex.Item

export default class Business extends Component {
  handleGridClick(el) {
    const business = getStore('business', 'session')
    if (el.index === 2) hashHistory.push(`/fed/business/${ business }/reserve`)
    if (el.index === 4) hashHistory.push(`/fed/business/${ business }/waimai`)
    if (el.index === 5) hashHistory.push(`/fed/business/${ business }/promotion`)
  }
  render() {
    const { service, carouselDatas, featureDatas, commentsInfo, commentList, handleChangeSort, currentSortIndex = 0 } = this.props
    return (
      <div className='business'>
        <div className='banner'>
          <img className='left' src={ require('../../img/waimai_log1.png') } alt='business' />
          <div className='right'>
            <p className='top'>精致土菜专营店</p>
            <p className='bottom'>评级：SSS 更新于 2017.09.15</p>
          </div>
        </div>
        <div className='service'>
          <div className='s_title'>
            <p />
            <h1>可提供服务</h1>
          </div>
          <Grid
            data={ service }
            columnNum={ 5 }
            hasLine={ false }
            className='service-item'
            onClick={ el => this.handleGridClick(el) }
            renderItem={
              dataItem => (
                <div style={{ padding: '0.25rem' }}>
                  <div className='icon-container'>
                    <Icon type={ dataItem.icon } style={{ width: '.5rem', height: '.5rem' }} size='xxs' />
                  </div>
                  <p>{ dataItem.text }</p>
                </div>
              )
            }
          />
        </div>
        <div className='introduction'>
          <div className='s_title'>
            <p />
            <h1>安吉印象</h1>
          </div>
          <p className='text'>
            全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。1999年1月，“全聚德“被国家工商总局认定为“驰名商标”，是中国第一例服务类中国驰名商标。全聚德烤鸭肉质鲜美，适合许多人吃。
          </p>
        </div>
        <div className='surrounding'>
          <div className='s_title'>
            <p />
            <h1>安吉印象</h1>
          </div>
          <Carousel
            className='my-carousel'
            autoplay={ false }
            infinite
            selectedIndex={ 1 }
            swipeSpeed={ 35 }
          >
            {
              carouselDatas.map(item => (
                <div key={ item.id } className='carousel-item' style={{ background: `url(${ item.bg })` }}>
                  <div className='content'>
                    <h1>{ item.title }</h1>
                    <p className='border' />
                    <p>{ item.text }</p>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className='feature'>
          <div className='s_title'>
            <p />
            <h1>特色菜品</h1>
          </div>
          <Carousel
            className='my-carousel'
            autoplay={ false }
            infinite
            selectedIndex={ 1 }
            swipeSpeed={ 35 }
            dotStyle={{ bottom: '20px' }}
          >
            {
              featureDatas.map(item => (
                <div key={ item.id } className='carousel-item' style={{ background: `url(${ item.bg })` }}>
                  <div className='content'>
                    <h1>{ item.title }</h1>
                    <p className='border' />
                    <p style={{ fontSize: '.26rem' }}>{ item.price }</p>
                    <ul>
                      {
                        item.text.map(ii => <li key={ ii }>{ ii }</li>)
                      }
                    </ul>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className='comment'>
          <div className='s_title'>
            <p />
            <h1>安吉评价</h1>
          </div>
          <Flex className='comments-info'>
            {
              commentsInfo.map((item, index) => <FItem onClick={ () => handleChangeSort(index) } className={ currentSortIndex === index ? 'active' : '' } key={ item.title }><p>{ item.title }</p><p>{ item.num }</p></FItem>)
            }
          </Flex>
          {
            commentList.map(item => <CommentItem key={ item.id } { ...{ commentInfo: item } } />)
          }
        </div>
      </div>
    )
  }
}
