import { combineReducers } from 'redux'
import articleListReducer from './articleListReducer'

export default combineReducers({
  articleList: articleListReducer
})