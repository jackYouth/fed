import { connect } from 'react-redux'
import { wrap } from '@boluome/oto_saas_web_app_component'

import Business from '../components/business'

const service = [
  { text: '一键wifi', icon: require('../img/svg/business_wifi.svg'), index: 1 },
  { text: '预定服务', icon: require('../img/svg/business_fw.svg'), index: 2 },
  { text: '甄选菜品', icon: require('../img/svg/business_cp.svg'), index: 3 },
  { text: '外卖（全城）', icon: require('../img/svg/business_wm.svg'), index: 4 },
  { text: '优惠券', icon: require('../img/svg/business_yhq.svg'), index: 5 },
]

const carouselDatas = [
  { bg: require('../img/waimai_carousel1.png'), title: '私厨餐厅', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 1 },
  { bg: require('../img/waimai_carousel1.png'), title: '星厨', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 2 },
  { bg: require('../img/waimai_carousel1.png'), title: '我爱厨房', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 3 },
  { bg: require('../img/waimai_carousel1.png'), title: '东北大菜', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 4 },
  { bg: require('../img/waimai_carousel1.png'), title: '私房龙虾', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 5 },
  { bg: require('../img/waimai_carousel1.png'), title: '江边城外', text: '安静优雅的用餐环境 每平米用餐人数在1.68以内', id: 6 },
]

const featureDatas = [
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 1 },
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 2 },
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 3 },
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 4 },
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 5 },
  { bg: require('../img/waimai_carousel1.png'), price: '87¥', title: '菜品名称', text: ['粤菜', '杭帮菜', '鲁菜', '皖菜'], id: 6 },
]


const allCommentList = [
  { id: 1, name: 'JAMES', score: '4.0', time: '2017.09.15', level: '热心大神Lv.10 回复率99%', content: '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。', imgList: [{ url: require('../img/comment_img.png'), id: 1 }, { url: require('../img/comment_img.png'), id: 2 }, { url: require('../img/comment_img.png'), id: 3 }], price: 288, serverTime: '9', upHand: 1980, downHand: 55 },
  { id: 2, name: 'JAMES', score: '3.0', time: '2017.09.15', level: '热心大神Lv.10 回复率99%', content: '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。', imgList: [{ url: require('../img/comment_img.png'), id: 1 }, { url: require('../img/comment_img.png'), id: 2 }], price: 288, serverTime: '9', upHand: 1980, downHand: 55 },
  { id: 3, name: 'JAMES', score: '3.0', time: '2017.09.15', level: '热心大神Lv.10 回复率99%', content: '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。', imgList: [], price: 288, serverTime: '9', upHand: 1980, downHand: 55 },
  { id: 4, name: 'JAMES', score: '2.0', time: '2017.09.15', level: '热心大神Lv.10 回复率99%', content: '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。', imgList: [{ url: require('../img/comment_img.png'), id: 1 }, { url: require('../img/comment_img.png'), id: 2 }], price: 288, serverTime: '9', upHand: 1980, downHand: 55 },
  { id: 5, name: 'JAMES', score: '5.0', time: '2017.09.15', level: '热心大神Lv.10 回复率99%', content: '全聚德，中华老字号，创建于1864年（清朝同治三年），历经几代创业拼搏获得了长足发展。', imgList: [], price: 288, serverTime: '9', upHand: 1980, downHand: 55 },
]

const mapStateToProps = ({ business }) => {
  console.log('business', business)
  const { currentSortIndex } = business
  const goodCommentList = allCommentList.filter(i => i.score >= 4)
  const midCommentList = allCommentList.filter(i => (i.score >= 3 && i.score < 4))
  const poorCommentList = allCommentList.filter(i => i.score < 3)
  const figureCommentList = allCommentList.filter(i => i.imgList.length > 0)
  const commentsInfo = [
    { title: '全部评价', num: allCommentList.length },
    { title: '好评', num: goodCommentList.length },
    { title: '中评', num: midCommentList.length },
    { title: '差评', num: poorCommentList.length },
    { title: '图文', num: figureCommentList.length },
  ]
  let commentList
  switch (currentSortIndex) {
    case 1:
      commentList = goodCommentList
      break
    case 2:
      commentList = midCommentList
      break
    case 3:
      commentList = poorCommentList
      break
    case 4:
      commentList = figureCommentList
      break
    default:
      commentList = allCommentList
      break
  }
  console.log(currentSortIndex, commentList)
  return {
    ...business,
    service,
    carouselDatas,
    featureDatas,
    commentsInfo,
    commentList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    handleChangeSort(currentSortIndex) {
      dispatch({ type: 'SET_CURRENT_SORT_INDEX', currentSortIndex })
    },
  }
}

const mapFunToComponent = () => {
  return {
    componentWillMount() {
      console.log('business componentWillMount')
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wrap(mapFunToComponent)(Business))
