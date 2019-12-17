import constants from './../constants';

const { initialState, types } = constants;

const stockSymbolChangeReducer = (state = initialState.currentStockSymbolArray, action) => {

  switch (action.type) {

  case types.RECEIVE_STOCKSYMBOLS:
    return action.currentStockSymbolArray;
  default:
    return state;
  }
};

export default stockSymbolChangeReducer;