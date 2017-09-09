import React, { Component } from 'react'
import { getStore } from '@boluome/common-lib'
import { Grid, Icon, Carousel, Flex } from 'antd-mobile'
import { hashHistory } from 'react-router'

import '../../styles/business/index.scss'
import CommentItem from '../common-component/comment-item'
import ThreeFeature from '../common-component/three-feature'

const FItem = Flex.Item

export default class Business extends Component {
  handleGridClick(el) {
    console.log('el', el)
    const business = getStore('currentBusiness', 'session')
    if (el.index === 2) {
      if (business === 'education') {
        hashHistory.push(`/fed/business/${ business }/selfCourse`)
        return
      }
      hashHistory.push(`/fed/business/${ business }/reserve`)
    }
    if (el.index === 3 && business === 'education') hashHistory.push(`/fed/business/${ business }/schedule`)
    if (el.index === 4) {
      if (business === 'education') {
        hashHistory.push(`/fed/business/${ business }/reserve`)
        return
      }
      // document.querySelector('.business-container-bottom').style.zIndex = '-2'
      hashHistory.push(`/fed/business/${ business }/waimai`)
    }
    if (el.index === 5) hashHistory.push(`/fed/business/${ business }/promotion`)
  }
  render() {
    const { flagBoolean, service, carouselDatas, featureDatas, commentsInfo, commentList, handleChangeSort, currentSortIndex = 0 } = this.props
    return (
      <div className={ flagBoolean ? 'business educatioin-bg' : 'business' }>
        {
          !flagBoolean &&
          <div className='banner'>
            <img className='left' src={ require('../../img/waimai_log1.png') } alt='business' />
            <div className='right'>
              <p className='top'>精致土菜专营店</p>
              <p className='bottom'>评级：SSS 更新于 2017.09.15</p>
            </div>
          </div>
        }
        {
          flagBoolean &&
          <div className='banner-education'>
            <p className='bottom'>评级：SSS 更新于 2017.09.15</p>
            <img src={ require('../../img/lianbang_logo_f3.png') } alt='education' />
          </div>
        }
        <div className='service'>
          <div className={ flagBoolean ? 's_title educatioin-bg' : 's_title' }>
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
                  <div className={ flagBoolean ? 'education-bgc icon-container' : 'icon-container' }>
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
            <h1>{ flagBoolean ? '联邦雅思' : '安吉印象' }</h1>
          </div>
          <p className='text'>
            {
              flagBoolean ?
              '联邦雅思英语学校一直以来被学生们盛赞为高分高能的摇篮。建校15年来，共培养超过30,000名学子留学海外，雅思满分学员近70名，有超过300名学生被剑桥大学、牛津大学以及美国的耶鲁、普林斯顿大学录取....' :
              '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。1999年1月，“全聚德“被国家工商总局认定为“驰名商标”，是中国第一例服务类中国驰名商标。全聚德烤鸭肉质鲜美，适合许多人吃。'
            }
          </p>
        </div>
        <div className='surrounding'>
          <div className='s_title'>
            <p />
            <h1>{ flagBoolean ? '校区环境' : '安吉环境' }</h1>
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
            <h1>{ flagBoolean ? '师资团队' : '特色菜品' }</h1>
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
                        item.text.map(ii => <li style={ flagBoolean ? { width: '100%', border: 'none' } : {} } key={ ii }>{ ii }</li>)
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
            <h1>{ flagBoolean ? '评价／留言' : '安吉评价'}</h1>
          </div>
          <Flex className='comments-info'>
            {
              commentsInfo.map((item, index) => <FItem onClick={ () => handleChangeSort(index) } style={ currentSortIndex === index && flagBoolean ? { color: '0b3688' } : {} } className={ currentSortIndex === index ? 'active' : '' } key={ item.title }><p className={ currentSortIndex === index && flagBoolean ? 'education-c' : '' }>{ item.title }</p><p className={ currentSortIndex === index && flagBoolean ? 'education-c' : '' }>{ item.num }</p></FItem>)
            }
          </Flex>
          {
            commentList.map(item => <CommentItem key={ item.id } { ...{ commentInfo: item } } />)
          }
        </div>
        <ThreeFeature direction={ 'column' } />
      </div>
    )
  }
}
