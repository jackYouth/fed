import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// 路由配置
const Routes = () => (
  <Router history={ hashHistory } >
    <Route path='/fed'>
      <IndexRoute component={ require('react-router?name=app!./containers/app') } />
      <Route path='main'>
        <IndexRoute component={ require('react-router?name=app!./containers/app') } />
        <Route path='code' component={ require('react-router?name=demo!./components/code') } />
        <Route path='nearDevice' component={ require('react-router?name=demo!./components/code/near-device') } />
        <Route path='navigation' component={ require('react-router?name=demo!./components/code/navigation') } />
        <Route path='password' component={ require('react-router?name=demo!./components/password/password') } />
        <Route path='vertification' component={ require('react-router?name=demo!./components/password/vertification-suc') } />
        <Route path='focusBusiness' component={ require('react-router?name=demo!./components/password/focus-business') } />
      </Route>
      <Route path='knowledge'>
        <IndexRoute component={ require('react-router?name=app!./components/knowledge') } />
        <Route path='first' component={ require('react-router?name=demo!./components/knowledge/first-knowledge') } />
        <Route path='second' component={ require('react-router?name=demo!./components/knowledge/second-knowledge') } />
      </Route>
      <Route path='contribution'>
        <IndexRoute component={ require('react-router?name=app!./components/contribution') } />
        <Route path='suc' component={ require('react-router?name=demo!./components/contribution/contribution-suc') } />
      </Route>
      <Route path='user'>
        <IndexRoute component={ require('react-router?name=app!./components/user') } />
        <Route path='setting' component={ require('react-router?name=demo!./components/user/setting') } />
        <Route path='priceList' component={ require('react-router?name=demo!./components/user/price-list') } />
        <Route path='priceDetail' component={ require('react-router?name=demo!./components/user/price-detail') } />
        <Route path='withdraw' component={ require('react-router?name=demo!./components/user/withdraw') } />
        <Route path='withdrawSuc' component={ require('react-router?name=demo!./components/user/withdraw-suc') } />
        <Route path='receiveMoney' component={ require('react-router?name=demo!./components/user/receive-money') } />
        <Route path='contribution' component={ require('react-router?name=demo!./components/user/my-contribution') } />
        <Route path='achieve' component={ require('react-router?name=demo!./components/user/my-achieve') } />
      </Route>
      <Route path='myApps'>
        <IndexRoute component={ require('react-router?name=app!./components/my-apps') } />
        <Route path='attention' component={ require('react-router?name=demo!./components/my-apps/my-attention') } />
        <Route path='search' component={ require('react-router?name=demo!./components/my-apps/business-search') } />
      </Route>
      <Route path='business/:businessName'>
        <IndexRoute component={ require('react-router?name=app!./containers/business') } />
        <Route path='reserve'>
          <IndexRoute component={ require('react-router?name=app!./components/business/reserve') } />
          <Route path='suc' component={ require('react-router?name=demo!./components/business/reserve-suc') } />
        </Route>
        <Route path='waimai'>
          <IndexRoute component={ require('react-router?name=app!./components/business/goods') } />
          <Route path='order' component={ require('react-router?name=demo!./components/business/order') } />
          <Route path='pay' component={ require('react-router?name=demo!./components/business/pay') } />
          <Route path='paySuc' component={ require('react-router?name=demo!./components/business/pay-suc') } />
        </Route>
        <Route path='promotion' component={ require('react-router?name=demo!./containers/promiton') } />
        <Route path='address' component={ require('react-router?name=demo!./components/business/address.js') } />
        <Route path='news'>
          <IndexRoute component={ require('react-router?name=app!./components/business/news') } />
          <Route path='inner' component={ require('react-router?name=demo!./components/business/news-inner') } />
        </Route>
        <Route path='center'>
          <IndexRoute component={ require('react-router?name=app!./components/business/center') } />
          <Route path='reserveInfo' component={ require('react-router?name=demo!./components/business/reserve-info') } />
          <Route path='waimaiInfo' component={ require('react-router?name=demo!./components/business/waimai-info') } />
        </Route>
      </Route>
    </Route>
  </Router>
)

export default Routes
