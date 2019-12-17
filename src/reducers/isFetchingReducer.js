import constants from '../constants';
const { initialState, types } = constants;

const isFetchingReducer = (state = initialState.isFetching, action) => {
  switch (action.type) {

  case types.REQUEST_STOCKSYMBOL:
    return false;
  default:
    return state;
  }
};

export default isFetchingReducer;