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

export function fetchStockSymbol(symbol) {
  return function (dispatch) {

    dispatch(requestStockSymbol());

    const enteredValue = symbol.replace(' ', '+').toUpperCase();
    console.log("actions enteredValue: " + enteredValue);

    return fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json')
      .then (response => response.json(),
        error => console.log('An error occurred.', error))
      .then (function(json) {
        dispatch(receiveStockSymbol(json.results));
    });
  };
}