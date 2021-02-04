import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import APIReducer from './APIReducer';

export default combineReducers({
  home: HomeReducer,
  apiReducer: APIReducer,
});
