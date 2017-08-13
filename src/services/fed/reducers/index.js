import { combineReducers } from 'redux'
// 引入reducers
import app  from './app'
import business  from './business'
import promotion  from './promotion'
// 组合reducers
export default combineReducers({
  app,
  business,
  promotion,
})
