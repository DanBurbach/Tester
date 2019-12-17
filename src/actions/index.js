import * as types from './../constants/ActionTypes';

// export const changeCharacter = (newSelectedCharacter) => ({
//   type: types.CHANGE_CHARACTER,
//   newSelectedCharacter
// });

export const requestStockSymbol = () => ({
  type: types.REQUEST_STOCKSYMBOLS,
});

export const receiveStockSymbol = (currentCharacterArray) => ({
  type: types.RECEIVE_STOCKSYMBOLS,
  currentCharacterArray
});

export const selectStockSymbol = (character) =>
  ({
    type: types.SELECT_STOCKSYMBOL,
    selectedCharacter: character
  });

export function fetchStockSymbol(name) {
  return function (dispatch) {
    dispatch(requestStockSymbol());
    const enteredValue = name.replace(' ', '+');
    return fetch('https://api.stocktwits.com/api/2/streams/symbol/' + enteredValue + '.json').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveStockSymbol(json.results));
    });
  };
}