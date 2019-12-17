import constants from './../constants';
const { initialState, types } = constants;

const selectStockSymbolReducer = (state = initialState.selectedStockSymbol, action) => {
  switch (action.type) {

  case types.SELECT_STOCKSYMBOL:
    return action.selectedStockSymbol;
  default:
    return state;
  }
};

export default selectStockSymbolReducer;