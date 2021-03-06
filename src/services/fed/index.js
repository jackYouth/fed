import React        from 'react'
import { createStore, applyMiddleware } from 'redux'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'
import thunk        from 'redux-thunk'
import reducers     from './reducers'
import Routes       from './routes'

window.OTO_SAAS = {}
window.OTO_SAAS.SERVER_URL = 'http://aapi.ddlass.com'

// 定义根组件
const Root  = () => (
  <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
    <Routes />
  </Provider>
)
render(<Root />, document.querySelector('#root'))
