import * as types from './../constants/ActionTypes';

export const changeStockSymbol = (newSelectedStockSymbol) => ({
  type: types.CHANGE_STOCKSYMBOL,
  newSelectedStockSymbol
});

export const requestStockSymbol = () => ({
  type: types.REQUEST_STOCKSYMBOLS,
});

export const receiveStockSymbol = (currentStockSymbolArray) => ({
  type: types.RECEIVE_STOCKSYMBOLS,
  currentStockSymbolArray
});

export const selectStockSymbol = (stockSymbol) =>
  ({
    type: types.SELECT_STOCKSYMBOL,
    selectStockSymbol: stockSymbol
  });

export function fetchStockSymbol(name) {
  return function (dispatch) {
    dispatch(requestStockSymbol());
    const enteredValue = name.replace(' ', '+');
    return fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json')
      .then (response => response.json(),
        error => console.log('An error occurred.', error))
      .then (function(json) {
        dispatch(receiveStockSymbol(json.results));
    });
  };
}