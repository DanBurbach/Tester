import { combineReducers } from 'redux';
import stockSymbolChangeReducer from './stockSymbolChangeReducer.js';
import isFetchingReducer from './isFetchingReducer.js';
import selectStockSymbolReducer from './selectStockSymbolReducer.js';

const rootReducer = combineReducers({
  currentStockSymbolArray: stockSymbolChangeReducer,
  isFetching: isFetchingReducer,
  selectedStockSymbol: selectStockSymbolReducer
});

export default rootReducer;