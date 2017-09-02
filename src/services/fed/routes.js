import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// 路由配置
const Routes = () => (
  <Router history={ browserHistory } >
    <Route path='/fed' component={ require('react-router?name=root!./components/root') }>
      <IndexRoute component={ require('react-router?name=app!./containers/app') } />
      <Route path='main' component={ require('react-router?name=demo!./components/business/good-order') }>
        <IndexRoute component={ require('react-router?name=app!./containers/app') } />
        <Route path='code' component={ require('react-router?name=demo!./components/code') } />
        <Route path='nearDevice' component={ require('react-router?name=demo!./components/code/near-device') } />
      </Route>
      <Route path='knowledge' component={ require('react-router?name=demo!./components/knowledge') }>
        <IndexRoute component={ require('react-router?name=app!./components/knowledge') } />
        <Route path='sencondKnowledge' component={ require('react-router?name=demo!./components/knowledge/sencond-knowledge') } />
        <Route path='setKnowledge' component={ require('react-router?name=demo!./components/knowledge/set-knowledge') } />
      </Route>
    </Route>
  </Router>
)

export default Routes
