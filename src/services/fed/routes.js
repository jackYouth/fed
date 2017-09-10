import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// 路由配置
const Routes = () => (
  <Router history={ hashHistory } >
    <Route path='/'>
      <IndexRoute component={ require('react-router?name=app!./containers/app') } />
      <Route path='main'>
        <IndexRoute component={ require('react-router?name=app!./containers/app') } />
        <Route path='code' component={ require('react-router?name=code!./components/code') } />
        <Route path='nearDevice' component={ require('react-router?name=nearDevice!./components/code/near-device') } />
        <Route path='navigation' component={ require('react-router?name=navigation!./components/code/navigation') } />
        <Route path='password' component={ require('react-router?name=password!./components/password/password') } />
        <Route path='vertification' component={ require('react-router?name=vertification!./components/password/vertification-suc') } />
        <Route path='focusBusiness' component={ require('react-router?name=focusBusiness!./components/password/focus-business') } />
      </Route>
      <Route path='knowledge'>
        <IndexRoute component={ require('react-router?name=knowledge!./components/knowledge') } />
        <Route path='first' component={ require('react-router?name=first!./components/knowledge/first-knowledge') } />
        <Route path='second' component={ require('react-router?name=second!./components/knowledge/second-knowledge') } />
      </Route>
      <Route path='contribution'>
        <IndexRoute component={ require('react-router?name=contribution!./components/contribution') } />
        <Route path='suc' component={ require('react-router?name=contribution-suc!./components/contribution/contribution-suc') } />
      </Route>
      <Route path='user'>
        <IndexRoute component={ require('react-router?name=user!./components/user') } />
        <Route path='setting' component={ require('react-router?name=setting!./components/user/setting') } />
        <Route path='priceList' component={ require('react-router?name=price-list!./components/user/price-list') } />
        <Route path='priceDetail' component={ require('react-router?name=price-detail!./components/user/price-detail') } />
        <Route path='withdraw' component={ require('react-router?name=withdraw!./components/user/withdraw') } />
        <Route path='withdrawSuc' component={ require('react-router?name=withdraw-suc!./components/user/withdraw-suc') } />
        <Route path='receiveMoney' component={ require('react-router?name=receive-money!./components/user/receive-money') } />
        <Route path='contribution' component={ require('react-router?name=my-contribution!./components/user/my-contribution') } />
        <Route path='achieve' component={ require('react-router?name=my-achieve!./components/user/my-achieve') } />
      </Route>
      <Route path='myApps'>
        <IndexRoute component={ require('react-router?name=my-apps!./components/my-apps') } />
        <Route path='attention' component={ require('react-router?name=my-attention!./components/my-apps/my-attention') } />
        <Route path='search' component={ require('react-router?name=business-search!./components/my-apps/business-search') } />
      </Route>
      <Route path='business/:businessName' component={ require('react-router?name=business!./components/business/business-container') }>
        <IndexRoute component={ require('react-router?name=business!./containers/business') } />
        <Route path='reserve'>
          <IndexRoute component={ require('react-router?name=reserve!./components/business/reserve') } />
          <Route path='suc' component={ require('react-router?name=reserve-suc!./components/business/reserve-suc') } />
        </Route>
        <Route path='selfCourse' component={ require('react-router?name=selfCourse!./components/business/self-course') } />
        <Route path='schedule' component={ require('react-router?name=schedule!./components/business/schedule') } />
        <Route path='waimai'>
          <IndexRoute component={ require('react-router?name=goods!./components/business/goods') } />
          <Route path='order' component={ require('react-router?name=order!./components/business/order') } />
          <Route path='pay' component={ require('react-router?name=pay!./components/business/pay') } />
          <Route path='paySuc' component={ require('react-router?name=pay-suc!./components/business/pay-suc') } />
        </Route>
        <Route path='promotion' component={ require('react-router?name=promiton!./containers/promiton') } />
        <Route path='address' component={ require('react-router?name=address!./components/business/address') } />
        <Route path='news'>
          <IndexRoute component={ require('react-router?name=news!./components/business/news') } />
          <Route path='inner' component={ require('react-router?name=news-inner!./components/business/news-inner') } />
        </Route>
        <Route path='center'>
          <IndexRoute component={ require('react-router?name=center!./components/business/center') } />
          <Route path='reserveInfo' component={ require('react-router?name=reserve-info!./components/business/reserve-info') } />
          <Route path='waimaiInfo' component={ require('react-router?name=waimai-info!./components/business/waimai-info') } />
        </Route>
      </Route>
    </Route>
  </Router>
)

export default Routes
