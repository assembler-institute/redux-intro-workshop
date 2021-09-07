import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  RANDOM_COUNTER,
  LOADING_COUNTER,
} from './types';
import initialState from './state';

const reducer = (state = initialState, action) => {
console.log('IMTCHLG ~ file: reducer.js ~ line 11 ~ reducer ~ action', action);
  switch(action.type) {
    case INCREASE_COUNTER: {
      const newCounterValue = state.value + 1;
      localStorage.setItem('ASSEMBLER_COUNTER', newCounterValue);
      return {
        ...state,
        value: newCounterValue,
      }
    }
    case DECREASE_COUNTER: {
      return {
        ...state,
        value: state.value - 1,
      }
    }
    case RESET_COUNTER: {
      return initialState;
    }
    case SET_COUNTER: {
      return {
        ...state,
        value: action.payload,
        status: 'ok',
      }
    }
    case RANDOM_COUNTER: {
      return {
        ...state,
        value: Math.round(Math.random() * 10),
      }
    }
    case LOADING_COUNTER: {
      return {
        ...state,
        status: 'loading',
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
