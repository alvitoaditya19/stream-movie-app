import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {dashboardReducer} from './dashboard';

const reducer = combineReducers({
  dashboardReducer,
  globalReducer,
});

export default reducer;