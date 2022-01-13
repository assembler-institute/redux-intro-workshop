import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  COUNTER_LOADING,
} from './types';
import initialState from './state';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_COUNTER: {
      if (state.status === 'loading') return state;
      return { ...state, number: state.number + 1 };
    }
    case DECREASE_COUNTER: {
      if (state.status === 'loading') return state;
      return {
        ...state,
        number: state.number === 0 ? 0 : state.number - 1
      };
    }
    case RESET_COUNTER: {
      if (state.status === 'loading') return state;
      return initialState;
    }
    case SET_COUNTER: {
      const counterParsed = Number(action.payload);

      return {
        ...state,
        status: 'ok',
        number: Number.isNaN(counterParsed) ? state : counterParsed
      };
    }
    case COUNTER_LOADING: {
      return {
        ...state,
        status: 'loading'
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
