import {
  SET_CURRENCY_DATA,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
} from '../Actions/types';
const INITIAL_STATE = {
  myCurrencies: ['BTC', 'ETH'],
  data: [],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENCY_DATA:
      return {...state, data: action.payload};
    case ADD_CURRENCY:
      return {
        ...state,
        myCurrencies: [...state.myCurrencies.concat(action.payload)],
      };
    case REMOVE_CURRENCY:
      return {
        ...state,
        myCurrencies: removeVal(state.myCurrencies, action.payload),
      };
    default:
      return state;
  }
}

function removeVal(myCurrencies, val) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
