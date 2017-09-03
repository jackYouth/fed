import { connect } from 'react-redux'
import { wrap } from '@boluome/oto_saas_web_app_component'

import Promotion from '../components/business/promotion'

const mapStateToProps = ({ promotion }) => {
  const { currenFilter = '' } = promotion
  const allPromotions = [
    { price: '100', isQp: 1, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '无限制', status: 'havent', id: '1' },
    { price: '100', isQp: 1, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '无限制', status: 'has', id: '2' },
    { price: '100', isQp: 0, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '2017.09.15', status: 'used', id: '3' },
    { price: '100', isQp: 1, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '无限制', status: 'expired', id: '4' },
    { price: '100', isQp: 0, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '2017.09.20', status: 'used', id: '5' },
    { price: '100', isQp: 0, title: '6店通用 套餐名称抵值券', content: '套餐内含：宫保鸡丁，是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录', expired: '无限制', status: 'havent', id: '6' },
  ]
  const filters = [{ name: '全部', attr: '' }, { name: '未领', attr: 'havent' }, { name: '已领', attr: 'has' }, { name: '过期', attr: 'expired' }, { name: '已用', attr: 'used' }]
  const promotions = allPromotions.filter(i => !i.status.indexOf(currenFilter))
  return {
    currenFilter,
    promotions,
    filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    handleChangeFilter(currenFilter) {
      console.log('currenFilter', currenFilter)
      dispatch({ type: 'SET_CURRENT_FILTER', currenFilter })
    },
  }
}

const mapFunToComponent = () => {
  return {
    componentWillMount() {
      console.log('demo componentWillMount')
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wrap(mapFunToComponent)(Promotion))
