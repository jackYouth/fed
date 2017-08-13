import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// 路由配置
const Routes = () => (
  <Router history={ browserHistory } >
    <Route path='/fed' component={ require('react-router?name=root!./components/root') } >
      <IndexRoute component={ require('react-router?name=app!./containers/app') } />
      <Route path='demo' component={ require('react-router?name=demo!./containers/promiton') } />
      <Route path='demo2' component={ require('react-router?name=demo!./components/waimai/information-inner') } />
    </Route>
  </Router>
)
export default Routes
